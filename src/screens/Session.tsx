import React, { useEffect, useMemo, useRef, useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Screen, Bar } from "../components/ui";
import { useTheme } from "../theme";
import { useStore } from "../store";
import { PLANS } from "../data";
import { RootStackParamList } from "../types";

export default function Session({ route, navigation }: NativeStackScreenProps<RootStackParamList, "Session">) {
  const { c } = useTheme();
  const { logSession } = useStore();
  const { planId, day } = route.params;
  const plan = PLANS.find((p) => p.id === planId)!;
  const steps = useMemo(() => [...plan.exercises, ...plan.exercises], [plan]); // 2 rounds

  const [i, setI] = useState(0);
  const [resting, setResting] = useState(false);
  const [left, setLeft] = useState(steps[0].secs);
  const [paused, setPaused] = useState(false);
  const elapsed = useRef(0);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => { elapsed.current += 1; setLeft((l) => l - 1); }, 1000);
    return () => clearInterval(t);
  }, [paused]);

  useEffect(() => {
    if (left > 0) return;
    if (!resting) {
      if (i === steps.length - 1) {
        logSession(planId, day, elapsed.current);
        navigation.replace("Finish", { planId, day, seconds: elapsed.current });
        return;
      }
      setResting(true);
      setLeft(steps[i].rest);
    } else {
      setResting(false);
      setI(i + 1);
      setLeft(steps[i + 1].secs);
    }
  }, [left]);

  const step = steps[i];
  const next = steps[Math.min(i + 1, steps.length - 1)];
  const accent = resting ? c.ember : c.primary;
  const mm = String(Math.floor(Math.max(left, 0) / 60)).padStart(2, "0");
  const ss = String(Math.max(left, 0) % 60).padStart(2, "0");

  const quit = () => Alert.alert("End this workout?", "Your progress for today will not be saved.", [
    { text: "Keep going", style: "cancel" },
    { text: "End workout", style: "destructive", onPress: () => navigation.goBack() },
  ]);

  return (
    <Screen>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
        <Pressable onPress={quit} hitSlop={10}><Ionicons name="close" size={28} color={c.text} /></Pressable>
        <Text style={{ color: c.sub, fontWeight: "600" }}>{plan.title}, day {day}</Text>
        <View style={{ width: 28 }} />
      </View>
      <View style={{ marginTop: 16 }}><Bar value={(i + (resting ? 1 : 0)) / steps.length} color={accent} /></View>
      <Text style={{ color: c.sub, marginTop: 8 }}>Move {i + 1} of {steps.length}</Text>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: accent, fontSize: 18, fontWeight: "700" }}>{resting ? "Rest" : "Go"}</Text>
        <Text style={{ color: c.text, fontSize: 104, fontWeight: "800", fontVariant: ["tabular-nums"] }}>{mm}:{ss}</Text>
        <Text style={{ color: c.text, fontSize: 28, fontWeight: "800", textAlign: "center" }}>{resting ? "Next: " + next.name : step.name}</Text>
        <Text style={{ color: c.sub, fontSize: 16, textAlign: "center", marginTop: 8, paddingHorizontal: 24 }}>
          {resting ? "Shake out your arms and breathe." : step.cue}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingBottom: 24 }}>
        <Pressable onPress={() => setPaused(!paused)}
          style={{ width: 84, height: 84, borderRadius: 42, backgroundColor: accent, alignItems: "center", justifyContent: "center" }}>
          <Ionicons name={paused ? "play" : "pause"} size={36} color="#fff" />
        </Pressable>
        <Pressable onPress={() => setLeft(0)} style={{ position: "absolute", right: 12, padding: 12 }}>
          <Text style={{ color: c.sub, fontWeight: "700" }}>Skip</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
