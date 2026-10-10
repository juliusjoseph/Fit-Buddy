import React from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Screen, Card, Bar, PlanArt } from "../components/ui";
import { useTheme } from "../theme";
import { useStore, streakOf, lastSevenDays } from "../store";
import { PLANS, GOAL_PLAN } from "../data";
import { RootStackParamList } from "../types";

export default function Home() {
  const { c } = useTheme();
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { user, progress, history } = useStore();
  const streak = streakOf(history);
  const week = lastSevenDays(history).reduce((a, d) => a + d.minutes, 0);
  const pick = PLANS.find((p) => p.id === GOAL_PLAN[user?.goal ?? ""]) ?? PLANS[0];
  const day = Math.min((progress[pick.id] ?? 0) + 1, pick.days);

  return (
    <Screen pad={false}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 32 }}>
        <Text style={{ color: c.sub, fontSize: 15 }}>Welcome back, {user?.name.split(" ")[0]}</Text>
        <Text style={{ color: c.text, fontSize: 28, fontWeight: "800", marginTop: 2 }}>
          {streak > 0 ? `${streak}-day streak. Keep it going.` : "Ready for your first workout?"}
        </Text>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Card style={{ flex: 1, marginRight: 8 }}>
            <Ionicons name="flame" size={22} color={c.ember} />
            <Text style={{ color: c.text, fontSize: 26, fontWeight: "800", marginTop: 8 }}>{streak}</Text>
            <Text style={{ color: c.sub }}>Day streak</Text>
          </Card>
          <Card style={{ flex: 1, marginLeft: 8 }}>
            <Ionicons name="time" size={22} color={c.primary} />
            <Text style={{ color: c.text, fontSize: 26, fontWeight: "800", marginTop: 8 }}>{week}</Text>
            <Text style={{ color: c.sub }}>Minutes this week</Text>
          </Card>
        </View>

        <Pressable onPress={() => nav.navigate("Session", { planId: pick.id, day })} style={{ marginTop: 16 }}>
          <LinearGradient colors={pick.tint} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ borderRadius: 24, padding: 22 }}>
            <Text style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>Today's workout</Text>
            <Text style={{ color: "#fff", fontSize: 26, fontWeight: "800", marginTop: 4 }}>{pick.title}, day {day}</Text>
            <Text style={{ color: "rgba(255,255,255,0.85)", marginTop: 4 }}>{pick.minutes} · {pick.exercises.length} exercises, 2 rounds</Text>
            <View style={{ flexDirection: "row", marginTop: 18 }}>
              <View style={{ backgroundColor: "#fff", borderRadius: 24, paddingVertical: 10, paddingHorizontal: 18, flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="play" size={16} color="#1D1617" />
                <Text style={{ color: "#1D1617", fontWeight: "700", marginLeft: 6 }}>Start now</Text>
              </View>
            </View>
          </LinearGradient>
        </Pressable>

        <Text style={{ color: c.text, fontSize: 18, fontWeight: "700", marginTop: 28, marginBottom: 14 }}>Workout plans</Text>
        <FlatList
          horizontal data={PLANS} keyExtractor={(p) => p.id} showsHorizontalScrollIndicator={false}
          renderItem={({ item: p }) => {
            const done = progress[p.id] ?? 0;
            return (
              <Pressable onPress={() => nav.navigate("Plan", { planId: p.id })} style={{ width: 260, marginRight: 14 }}>
                <View style={{ borderRadius: 20, overflow: "hidden" }}><PlanArt plan={p} height={150} /></View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                  <Text style={{ color: c.text, fontSize: 16, fontWeight: "700" }}>{p.title}</Text>
                  <Text style={{ color: c.primary, fontSize: 13, fontWeight: "600" }}>{p.minutes} a day</Text>
                </View>
                <Text style={{ color: c.sub, marginTop: 2, marginBottom: 8 }}>{done} of {p.days} days</Text>
                <Bar value={done / p.days} />
              </Pressable>
            );
          }}
        />
      </ScrollView>
    </Screen>
  );
}
