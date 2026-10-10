import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Screen, Card } from "../components/ui";
import { useTheme } from "../theme";
import { useStore, streakOf, lastSevenDays } from "../store";
import { PLANS } from "../data";
import AppImages from "../images";

export default function Progress() {
  const { c } = useTheme();
  const { history } = useStore();
  const week = lastSevenDays(history);
  const max = Math.max(10, ...week.map((d) => d.minutes));
  const totalMin = Math.round(history.reduce((a, h) => a + h.seconds, 0) / 60);

  return (
    <Screen pad={false}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 32 }}>
        <Text style={{ color: c.text, fontSize: 28, fontWeight: "800" }}>Progress</Text>
        <View style={{ flexDirection: "row", marginTop: 18 }}>
          {[["Sessions", history.length], ["Minutes", totalMin], ["Streak", streakOf(history)]].map(([l, v], n) => (
            <Card key={l as string} style={{ flex: 1, marginLeft: n ? 8 : 0, alignItems: "center" }}>
              <Text style={{ color: c.text, fontSize: 24, fontWeight: "800" }}>{v}</Text>
              <Text style={{ color: c.sub, fontSize: 13 }}>{l}</Text>
            </Card>
          ))}
        </View>

        <Card style={{ marginTop: 16 }}>
          <Text style={{ color: c.text, fontWeight: "700", marginBottom: 14 }}>Minutes, last 7 days</Text>
          <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", height: 130 }}>
            {week.map((d, n) => (
              <View key={n} style={{ alignItems: "center", flex: 1 }}>
                <View style={{ width: 22, height: Math.max(4, (d.minutes / max) * 100), borderRadius: 8, backgroundColor: d.minutes ? c.primary : c.raised }} />
                <Text style={{ color: n === 6 ? c.text : c.sub, fontWeight: n === 6 ? "700" : "400", marginTop: 8 }}>{d.label}</Text>
              </View>
            ))}
          </View>
        </Card>

        <Text style={{ color: c.text, fontSize: 18, fontWeight: "700", marginTop: 24, marginBottom: 12 }}>History</Text>
        {history.length === 0 ? (
          <View style={{ alignItems: "center" }}>
            <Image source={AppImages.skip} resizeMode="contain" style={{ width: "60%", height: 170 }} />
            <Text style={{ color: c.sub, lineHeight: 22, textAlign: "center", marginTop: 8 }}>No sessions yet. Finish a workout and it will show up here.</Text>
          </View>
        ) : (
          [...history].reverse().slice(0, 15).map((h, n) => (
            <Card key={n} style={{ marginBottom: 10, flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <Text style={{ color: c.text, fontWeight: "700" }}>{PLANS.find((p) => p.id === h.planId)?.title}, day {h.day}</Text>
                <Text style={{ color: c.sub, marginTop: 2 }}>{h.date}</Text>
              </View>
              <Text style={{ color: c.sub }}>{Math.max(1, Math.round(h.seconds / 60))} min</Text>
            </Card>
          ))
        )}
      </ScrollView>
    </Screen>
  );
}
