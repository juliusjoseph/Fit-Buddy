import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Palette = {
  bg: string; surface: string; raised: string; text: string; sub: string;
  line: string; primary: string; primary2: string; ember: string; ok: string;
};
export type Mode = "system" | "light" | "dark";

const dark: Palette = {
  bg: "#15121F", surface: "#1F1B2E", raised: "#2A2540", text: "#F4F1FF", sub: "#A39BC2",
  line: "#332D4D", primary: "#8B5CFF", primary2: "#C45BFF", ember: "#FF7A59", ok: "#3DD9A0",
};
const light: Palette = {
  bg: "#F7F9FC", surface: "#FFFFFF", raised: "#F5F0FF", text: "#1D1617", sub: "#7B6F72",
  line: "#E6E1EA", primary: "#7226FF", primary2: "#A56BFF", ember: "#E8552F", ok: "#12A877",
};

type Ctx = { c: Palette; isDark: boolean; mode: Mode; setMode: (m: Mode) => void };
const ThemeCtx = createContext<Ctx>({ c: dark, isDark: true, mode: "system", setMode: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const scheme = useColorScheme();
  const [mode, setModeState] = useState<Mode>("system");

  useEffect(() => {
    AsyncStorage.getItem("fb:theme")
      .then((v) => { if (v === "light" || v === "dark" || v === "system") setModeState(v); })
      .catch(() => {});
  }, []);

  const setMode = (m: Mode) => {
    setModeState(m);
    AsyncStorage.setItem("fb:theme", m).catch(() => {});
  };

  const isDark = mode === "system" ? scheme !== "light" : mode === "dark";
  const value = useMemo(() => ({ c: isDark ? dark : light, isDark, mode, setMode }), [isDark, mode]);
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => useContext(ThemeCtx);
