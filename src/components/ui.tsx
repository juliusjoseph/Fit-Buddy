import React from "react";
import { Image, ImageBackground, Pressable, Text, TextInput, TextInputProps, View, ViewStyle, StyleProp } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../theme";
import AppImages from "../images";
import type { Plan } from "../data";

export function Screen({ children, pad = true, style }: { children: React.ReactNode; pad?: boolean; style?: StyleProp<ViewStyle> }) {
  const { c } = useTheme();
  const i = useSafeAreaInsets();
  return (
    <View style={[{ flex: 1, backgroundColor: c.bg, paddingTop: i.top, paddingBottom: i.bottom, paddingHorizontal: pad ? 20 : 0 }, style]}>
      {children}
    </View>
  );
}

export function Button({ title, onPress, disabled, variant = "solid" }: { title: string; onPress: () => void; disabled?: boolean; variant?: "solid" | "ghost" }) {
  const { c } = useTheme();
  if (variant === "ghost") {
    return (
      <Pressable onPress={onPress} style={{ paddingVertical: 14, alignItems: "center" }}>
        <Text style={{ color: c.sub, fontWeight: "600", fontSize: 15 }}>{title}</Text>
      </Pressable>
    );
  }
  return (
    <Pressable onPress={onPress} disabled={disabled} style={({ pressed }) => ({ opacity: disabled ? 0.5 : pressed ? 0.85 : 1 })}>
      <LinearGradient colors={[c.primary2, c.primary]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        style={{ borderRadius: 30, paddingVertical: 16, alignItems: "center" }}>
        <Text style={{ color: "#fff", fontSize: 15, fontWeight: "700", letterSpacing: 0.5 }}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

type FieldProps = TextInputProps & { label: string; error?: string; leftIcon?: React.ReactNode; rightIcon?: React.ReactNode; onRightPress?: () => void };
export function Field({ label, error, leftIcon, rightIcon, onRightPress, ...p }: FieldProps) {
  const { c } = useTheme();
  return (
    <View style={{ marginBottom: 14 }}>
      <Text style={{ color: c.sub, fontSize: 13, marginBottom: 6 }}>{label}</Text>
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: c.raised, borderRadius: 12, borderWidth: 1,
        borderColor: error ? c.ember : c.line, paddingHorizontal: 16, height: 52 }}>
        {leftIcon}
        <TextInput placeholderTextColor={c.sub} {...p}
          style={{ flex: 1, color: c.text, fontSize: 15, marginLeft: leftIcon ? 10 : 0 }} />
        {rightIcon ? <Pressable onPress={onRightPress} hitSlop={8}>{rightIcon}</Pressable> : null}
      </View>
      {error ? <Text style={{ color: c.ember, fontSize: 12, marginTop: 4 }}>{error}</Text> : null}
    </View>
  );
}

export function Card({ children, style }: { children: React.ReactNode; style?: StyleProp<ViewStyle> }) {
  const { c } = useTheme();
  return <View style={[{ backgroundColor: c.surface, borderRadius: 20, padding: 16, borderWidth: 1, borderColor: c.line }, style]}>{children}</View>;
}

export function Bar({ value, color }: { value: number; color?: string }) {
  const { c } = useTheme();
  return (
    <View style={{ height: 8, borderRadius: 4, backgroundColor: c.raised, overflow: "hidden" }}>
      <View style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%`, height: "100%", backgroundColor: color ?? c.primary }} />
    </View>
  );
}

export function Chip({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  const { c } = useTheme();
  return (
    <Pressable onPress={onPress} style={{ paddingVertical: 12, paddingHorizontal: 16, borderRadius: 14, borderWidth: 1.5,
      borderColor: active ? c.primary : c.line, backgroundColor: active ? c.raised : c.surface, marginRight: 10, marginBottom: 10 }}>
      <Text style={{ color: active ? c.text : c.sub, fontWeight: "600" }}>{label}</Text>
    </Pressable>
  );
}

export function IconBtn({ name, onPress }: { name: keyof typeof Ionicons.glyphMap; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} hitSlop={8}
      style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.25)", alignItems: "center", justifyContent: "center" }}>
      <Ionicons name={name} size={22} color="#fff" />
    </Pressable>
  );
}

// Photos fill the box. Illustrations sit on your purple Bg.png gradient.
export function PlanArt({ plan, height }: { plan: Plan; height: number }) {
  return (
    <View style={{ height, width: "100%", overflow: "hidden" }}>
      {plan.photo ? (
        <Image source={plan.image} resizeMode="cover" style={{ width: "100%", height: "100%" }} />
      ) : (
        <ImageBackground source={AppImages.bg} resizeMode="cover" style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
          <Image source={plan.image} resizeMode="contain" style={{ width: "80%", height: "92%" }} />
        </ImageBackground>
      )}
    </View>
  );
}
