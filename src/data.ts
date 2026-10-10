import { ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppImages from "./images";

export type Exercise = { name: string; secs: number; rest: number; cue: string };
export type Plan = {
  id: string; title: string; blurb: string; minutes: string; days: number;
  icon: keyof typeof Ionicons.glyphMap; tint: [string, string]; exercises: Exercise[];
  image: ImageSourcePropType; photo?: boolean;
};

export const GOALS = [
  { label: "Improve Shape", plan: "upper", image: AppImages.cellone },
  { label: "Lean & Tone", plan: "lower", image: AppImages.celltwo },
  { label: "Lose a Fat", plan: "cardio", image: AppImages.cellthree },
];
export const LEVELS = ["Beginner", "Intermediate", "Advanced"];

export const PLANS: Plan[] = [
  {
    id: "upper", title: "Upper Body", image: AppImages.man, photo: true, blurb: "Chest, shoulders and arms using only your bodyweight.",
    minutes: "12 min", days: 28, icon: "barbell-outline", tint: ["#5B2BE0", "#9B4DF0"],
    exercises: [
      { name: "Push-ups", secs: 30, rest: 15, cue: "Keep your body in one straight line." },
      { name: "Pike push-ups", secs: 30, rest: 15, cue: "Hips high, head moves toward the floor." },
      { name: "Tricep dips", secs: 30, rest: 15, cue: "Use a chair. Elbows point straight back." },
      { name: "Plank shoulder taps", secs: 30, rest: 15, cue: "Hips stay still as you tap." },
    ],
  },
  {
    id: "lower", title: "Lower Body", image: AppImages.weight, blurb: "Legs and glutes, built from simple movements.",
    minutes: "14 min", days: 28, icon: "walk-outline", tint: ["#0F7B8A", "#1FA896"],
    exercises: [
      { name: "Squats", secs: 40, rest: 15, cue: "Push your knees out over your toes." },
      { name: "Reverse lunges", secs: 40, rest: 15, cue: "Step back, drop the back knee low." },
      { name: "Glute bridges", secs: 40, rest: 15, cue: "Squeeze at the top for one second." },
      { name: "Wall sit", secs: 30, rest: 15, cue: "Thighs parallel to the floor." },
    ],
  },
  {
    id: "cardio", title: "Cardio Burst", image: AppImages.budding, photo: true, blurb: "Short, high-energy rounds that get your heart rate up.",
    minutes: "10 min", days: 21, icon: "flash-outline", tint: ["#D94B2B", "#F28A3C"],
    exercises: [
      { name: "Jumping jacks", secs: 40, rest: 15, cue: "Land softly and breathe steadily." },
      { name: "High knees", secs: 30, rest: 15, cue: "Drive your knees up to hip height." },
      { name: "Mountain climbers", secs: 30, rest: 15, cue: "Shoulders over wrists, move fast." },
      { name: "Burpees", secs: 30, rest: 20, cue: "Take your time. Form beats speed." },
    ],
  },
  {
    id: "core", title: "Core and Mobility", image: AppImages.lad, blurb: "Strengthen your middle and loosen up tight spots.",
    minutes: "9 min", days: 30, icon: "body-outline", tint: ["#2E4BC9", "#5B7CFA"],
    exercises: [
      { name: "Plank", secs: 30, rest: 15, cue: "Squeeze your glutes and brace your abs." },
      { name: "Bicycle crunches", secs: 30, rest: 15, cue: "Slow turns. Elbow to opposite knee." },
      { name: "Dead bug", secs: 30, rest: 15, cue: "Lower back stays pressed to the floor." },
      { name: "Cat-cow stretch", secs: 30, rest: 10, cue: "Move with your breath." },
    ],
  },
];

export const GOAL_PLAN: Record<string, string> = Object.fromEntries(GOALS.map((g) => [g.label, g.plan]));
