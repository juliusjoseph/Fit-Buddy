import React from "react";
import { Image, Text, View } from "react-native";
import AppImages from "../images";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Screen, Button, Card } from "../components/ui";
import { useTheme } from "../theme";
import { useStore, streakOf } from "../store";
import { PLANS } from "../data";
import { RootStackParamList } from "../types";

export default function Finish({ route, navigation }: NativeStackScreenProps<RootStackParamList, "Finish">) {
  const { c } = useTheme();
  const { history } = useStore();
  const { planId, day, seconds } = route.params;
  const plan = PLANS.find((p) => p.id === planId)!;
  const mins = Math.max(1, Math.round(seconds / 60));

  return (
    <Screen>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={AppImages.done} resizeMode="contain" style={{ width: "70%", height: 260 }} />
        <Text style={{ color: c.text, fontSize: 30, fontWeight: "800", marginTop: 20 }}>Day {day} done</Text>
        <Text style={{ color: c.sub, fontSize: 16, marginTop: 6 }}>{plan.title} is {Math.round((day / plan.days) * 100)}% complete.</Text>
        <View style={{ flexDirection: "row", marginTop: 28, width: "100%" }}>
          <Card style={{ flex: 1, marginRight: 8, alignItems: "center" }}>
            <Text style={{ color: c.text, fontSize: 24, fontWeight: "800" }}>{mins}</Text>
            <Text style={{ color: c.sub }}>Minutes</Text>
          </Card>
          <Card style={{ flex: 1, marginLeft: 8, alignItems: "center" }}>
            <Text style={{ color: c.text, fontSize: 24, fontWeight: "800" }}>{streakOf(history)}</Text>
            <Text style={{ color: c.sub }}>Day streak</Text>
          </Card>
        </View>
      </View>
      <View style={{ paddingBottom: 12 }}>
        <Button title="Back to home" onPress={() => navigation.reset({ index: 0, routes: [{ name: "Tabs" }] })} />
      </View>
    </Screen>
  );
}
