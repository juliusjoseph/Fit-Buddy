import React, { useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Screen, Button, Chip, Field } from "../components/ui";
import { useTheme } from "../theme";
import { useStore } from "../store";
import { GOALS, LEVELS } from "../data";

export default function Setup() {
  const { c } = useTheme();
  const { saveSetup } = useStore();
  const { width } = useWindowDimensions();
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const cw = Math.round(width * 0.5);
  const h = {
    color: c.text,
    fontSize: 18,
    fontWeight: "700" as const,
    marginBottom: 14,
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <Screen pad={false}>
        <ScrollView
          contentContainerStyle={{ paddingTop: 32, paddingBottom: 16 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ color: c.text, fontSize: 30, fontWeight: "800" }}>
              What is your goal?
            </Text>
            <Text
              style={{
                color: c.sub,
                fontSize: 15,
                marginTop: 6,
                marginBottom: 16,
              }}
            >
              It helps us choose the best program for you.
            </Text>
          </View>
          <FlatList
            horizontal
            data={GOALS}
            keyExtractor={(g) => g.label}
            showsHorizontalScrollIndicator={false}
            snapToInterval={cw + 12}
            decelerationRate="fast"
            contentContainerStyle={{ paddingHorizontal: 20 }}
            renderItem={({ item }) => {
              const on = goal === item.label;
              return (
                <Pressable
                  onPress={() => setGoal(item.label)}
                  style={{
                    width: cw,
                    marginRight: 12,
                    borderRadius: 24,
                    borderWidth: 3,
                    borderColor: on ? c.primary : "transparent",
                    opacity: !goal || on ? 1 : 0.55,
                  }}
                >
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      height: 260,
                      borderRadius: 20,
                    }}
                  />
                </Pressable>
              );
            }}
          />
          <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
            <Text style={h}>Your fitness level</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {LEVELS.map((l) => (
                <Chip
                  key={l}
                  label={l}
                  active={level === l}
                  onPress={() => setLevel(l)}
                />
              ))}
            </View>
            <Text style={[h, { marginTop: 14 }]}>About you (optional)</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, marginRight: 8 }}>
                <Field
                  label="Weight (kg)"
                  value={weight}
                  onChangeText={setWeight}
                  keyboardType="numeric"
                />
              </View>
              <View style={{ flex: 1, marginLeft: 8 }}>
                <Field
                  label="Height (cm)"
                  value={height}
                  onChangeText={setHeight}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ paddingHorizontal: 20, paddingBottom: 12 }}>
          <Button
            title="Confirm"
            disabled={!goal || !level}
            onPress={() =>
              saveSetup(
                goal,
                level,
                weight.trim() || undefined,
                height.trim() || undefined,
              )
            }
          />
        </View>
      </Screen>
    </KeyboardAvoidingView>
  );
}
