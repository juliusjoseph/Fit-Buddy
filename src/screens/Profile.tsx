import React from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { Screen, Card, Button } from "../components/ui";
import { useTheme, Mode } from "../theme";
import { useStore } from "../store";

const MODES: { id: Mode; label: string }[] = [
  { id: "system", label: "System" }, { id: "light", label: "Light" }, { id: "dark", label: "Dark" },
];

export default function Profile() {
  const { c, mode, setMode } = useTheme();
  const { user, signOut, resetProgress } = useStore();
  const w = parseFloat(user?.weight ?? ""), h = parseFloat(user?.height ?? "");
  const bmi = w > 0 && h > 0 ? (w / ((h / 100) * (h / 100))).toFixed(1) : null;

  const confirmReset = () => Alert.alert("Reset progress?", "This clears all finished days and history.", [
    { text: "Cancel", style: "cancel" },
    { text: "Reset", style: "destructive", onPress: resetProgress },
  ]);

  return (
    <Screen pad={false}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 32 }}>
        <View style={{ alignItems: "center", marginTop: 12 }}>
          <View style={{ width: 84, height: 84, borderRadius: 42, backgroundColor: c.primary, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#fff", fontSize: 34, fontWeight: "800" }}>{user?.name.charAt(0).toUpperCase()}</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 22, fontWeight: "800", marginTop: 12 }}>{user?.name}</Text>
          <Text style={{ color: c.sub }}>{user?.email}</Text>
        </View>

        <Card style={{ marginTop: 24 }}>
          <Text style={{ color: c.sub, fontSize: 13 }}>Goal</Text>
          <Text style={{ color: c.text, fontSize: 16, fontWeight: "700", marginBottom: 12 }}>{user?.goal}</Text>
          <Text style={{ color: c.sub, fontSize: 13 }}>Level</Text>
          <Text style={{ color: c.text, fontSize: 16, fontWeight: "700" }}>{user?.level}</Text>
          {bmi ? (
            <>
              <Text style={{ color: c.sub, fontSize: 13, marginTop: 12 }}>Weight, height and BMI</Text>
              <Text style={{ color: c.text, fontSize: 16, fontWeight: "700" }}>{w} kg · {h} cm · BMI {bmi}</Text>
              <Text style={{ color: c.sub, fontSize: 12, marginTop: 4 }}>BMI is only a rough guide.</Text>
            </>
          ) : null}
        </Card>

        <Text style={{ color: c.text, fontSize: 18, fontWeight: "700", marginTop: 24, marginBottom: 12 }}>Appearance</Text>
        <View style={{ flexDirection: "row", backgroundColor: c.surface, borderRadius: 14, padding: 4, borderWidth: 1, borderColor: c.line }}>
          {MODES.map((m) => (
            <Pressable key={m.id} onPress={() => setMode(m.id)}
              style={{ flex: 1, paddingVertical: 10, borderRadius: 10, alignItems: "center", backgroundColor: mode === m.id ? c.primary : "transparent" }}>
              <Text style={{ color: mode === m.id ? "#fff" : c.sub, fontWeight: "700" }}>{m.label}</Text>
            </Pressable>
          ))}
        </View>

        <View style={{ marginTop: 28 }}>
          <Button title="Sign out" onPress={signOut} />
          <Pressable onPress={confirmReset} style={{ alignItems: "center", paddingVertical: 16 }}>
            <Text style={{ color: c.ember, fontWeight: "600" }}>Reset progress</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Screen>
  );
}
