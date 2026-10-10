import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Card, IconBtn, Bar, PlanArt } from "../components/ui";
import { useTheme } from "../theme";
import { useStore } from "../store";
import { PLANS } from "../data";
import { RootStackParamList } from "../types";

export default function Plan({ route, navigation }: NativeStackScreenProps<RootStackParamList, "Plan">) {
  const { c } = useTheme();
  const i = useSafeAreaInsets();
  const { progress } = useStore();
  const plan = PLANS.find((p) => p.id === route.params.planId)!;
  const done = progress[plan.id] ?? 0;
  const finished = done >= plan.days;
  const day = finished ? plan.days : done + 1;

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
        <View>
          <PlanArt plan={plan} height={310 + i.top} />
          <LinearGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0)", "rgba(0,0,0,0.72)"]} style={StyleSheet.absoluteFill} />
          <View style={{ position: "absolute", top: i.top + 12, left: 20 }}>
            <IconBtn name="chevron-back" onPress={() => navigation.goBack()} />
          </View>
          <View style={{ position: "absolute", left: 20, right: 20, bottom: 20 }}>
            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "800" }}>{plan.title}</Text>
            <Text style={{ color: "rgba(255,255,255,0.9)", fontSize: 15, marginTop: 4 }}>{plan.blurb}</Text>
            <Text style={{ color: "#fff", fontWeight: "700", marginTop: 14, marginBottom: 8 }}>{done} of {plan.days} days finished</Text>
            <Bar value={done / plan.days} color="#fff" />
          </View>
        </View>

        <View style={{ padding: 20 }}>
          <Text style={{ color: c.text, fontSize: 18, fontWeight: "700", marginBottom: 14 }}>Your {plan.days} days</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {Array.from({ length: plan.days }, (_, n) => n + 1).map((d) => {
              const isDone = d <= done;
              const isNext = d === done + 1;
              return (
                <View key={d} style={{ width: "14.285%", alignItems: "center", marginBottom: 10 }}>
                  <View style={{ width: 38, height: 38, borderRadius: 19, alignItems: "center", justifyContent: "center",
                    backgroundColor: isDone ? c.primary : c.raised, borderWidth: isNext ? 2 : 0, borderColor: c.primary }}>
                    {isDone ? <Ionicons name="checkmark" size={18} color="#fff" />
                      : <Text style={{ color: isNext ? c.primary : c.sub, fontWeight: isNext ? "800" : "500" }}>{d}</Text>}
                  </View>
                </View>
              );
            })}
          </View>

          <Text style={{ color: c.text, fontSize: 18, fontWeight: "700", marginTop: 20, marginBottom: 12 }}>Each session</Text>
          {plan.exercises.map((ex) => (
            <Card key={ex.name} style={{ marginBottom: 10 }}>
              <Text style={{ color: c.text, fontSize: 16, fontWeight: "700" }}>{ex.name}</Text>
              <Text style={{ color: c.sub, fontSize: 13, marginTop: 2 }}>{ex.secs}s work, {ex.rest}s rest</Text>
              <Text style={{ color: c.sub, marginTop: 6 }}>{ex.cue}</Text>
            </Card>
          ))}
        </View>
      </ScrollView>
      <View style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: 20, paddingBottom: i.bottom + 12, backgroundColor: c.bg }}>
        <Button title={finished ? "Replay last day" : `Start day ${day}`} onPress={() => navigation.navigate("Session", { planId: plan.id, day })} />
      </View>
    </View>
  );
}
