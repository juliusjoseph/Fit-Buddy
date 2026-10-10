export type RootStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
  Setup: undefined;
  Tabs: undefined;
  Plan: { planId: string };
  Session: { planId: string; day: number };
  Finish: { planId: string; day: number; seconds: number };
};

export type TabParamList = {
  Home: undefined;
  Progress: undefined;
  Profile: undefined;
};
