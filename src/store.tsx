import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type User = {
  name: string;
  email: string;
  goal?: string;
  level?: string;
  weight?: string;
  height?: string;
};
export type Session = {
  date: string;
  planId: string;
  day: number;
  seconds: number;
};
type Saved = {
  onboarded: boolean;
  user: User | null;
  progress: Record<string, number>;
  history: Session[];
};
type Accounts = Record<
  string,
  {
    name: string;
    hash: string;
    goal?: string;
    level?: string;
    weight?: string;
    height?: string;
  }
>;

const EMPTY: Saved = {
  onboarded: false,
  user: null,
  progress: {},
  history: [],
};

// Demo only: this is a local stand-in for a backend, not real security.
const hash = (s: string) => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return String(h);
};

export const dayKey = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export function streakOf(history: Session[]) {
  const days = new Set(history.map((h) => h.date));
  const d = new Date();
  if (!days.has(dayKey(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (days.has(dayKey(d))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

export function lastSevenDays(history: Session[]) {
  const out: { label: string; minutes: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const k = dayKey(d);
    const secs = history
      .filter((h) => h.date === k)
      .reduce((a, h) => a + h.seconds, 0);
    out.push({ label: "SMTWTFS"[d.getDay()], minutes: Math.round(secs / 60) });
  }
  return out;
}

type Store = Saved & {
  ready: boolean;
  finishOnboarding: () => void;
  signUp: (name: string, email: string, pw: string) => Promise<string | null>;
  signIn: (email: string, pw: string) => Promise<string | null>;
  signOut: () => void;
  saveSetup: (
    goal: string,
    level: string,
    weight?: string,
    height?: string,
  ) => void;
  logSession: (planId: string, day: number, seconds: number) => void;
  resetProgress: () => void;
};

const StoreCtx = createContext<Store>(null as unknown as Store);

async function readAccounts(): Promise<Accounts> {
  try {
    return JSON.parse((await AsyncStorage.getItem("fb:accounts")) || "{}");
  } catch {
    return {};
  }
}
const writeAccounts = (a: Accounts) =>
  AsyncStorage.setItem("fb:accounts", JSON.stringify(a)).catch(() => {});

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [s, setS] = useState<Saved>(EMPTY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("fb:state-v2")
      .then((raw) => {
        if (raw) setS({ ...EMPTY, ...JSON.parse(raw) });
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  useEffect(() => {
    if (ready)
      AsyncStorage.setItem("fb:state-v2", JSON.stringify(s)).catch(() => {});
  }, [s, ready]);

  const api = useMemo<Store>(
    () => ({
      ...s,
      ready,
      finishOnboarding: () => setS((p) => ({ ...p, onboarded: true })),
      signUp: async (name, email, pw) => {
        const key = email.trim().toLowerCase();
        const accounts = await readAccounts();
        if (accounts[key])
          return "An account with this email already exists. Sign in instead.";
        accounts[key] = { name, hash: hash(pw) };
        await writeAccounts(accounts);
        setS((p) => ({ ...p, user: { name, email: key } }));
        return null;
      },
      signIn: async (email, pw) => {
        const key = email.trim().toLowerCase();
        const acc = (await readAccounts())[key];
        if (!acc || acc.hash !== hash(pw))
          return "Email or password is incorrect.";
        setS((p) => ({
          ...p,
          user: {
            name: acc.name,
            email: key,
            goal: acc.goal,
            level: acc.level,
            weight: acc.weight,
            height: acc.height,
          },
        }));
        return null;
      },
      signOut: () => setS((p) => ({ ...p, user: null })),
      saveSetup: (goal, level, weight, height) => {
        setS((p) =>
          p.user
            ? { ...p, user: { ...p.user, goal, level, weight, height } }
            : p,
        );
        readAccounts().then((a) => {
          const email = s.user?.email;
          if (email && a[email]) {
            a[email] = { ...a[email], goal, level, weight, height };
            writeAccounts(a);
          }
        });
      },
      logSession: (planId, day, seconds) =>
        setS((p) => ({
          ...p,
          progress: {
            ...p.progress,
            [planId]: Math.max(p.progress[planId] ?? 0, day),
          },
          history: [...p.history, { date: dayKey(), planId, day, seconds }],
        })),
      resetProgress: () => setS((p) => ({ ...p, progress: {}, history: [] })),
    }),
    [s, ready],
  );

  return <StoreCtx.Provider value={api}>{children}</StoreCtx.Provider>;
}

export const useStore = () => useContext(StoreCtx);
