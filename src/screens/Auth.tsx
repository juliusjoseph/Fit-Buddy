import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Screen, Button, Field } from "../components/ui";
import MessageSvg from "../components/svgs/message";
import LockIcon from "../components/svgs/lock";
import UserIcon from "../components/svgs/user";
import { useTheme } from "../theme";
import { useStore } from "../store";

export default function Auth() {
  const { c } = useTheme();
  const { signIn, signUp } = useStore();
  const [mode, setMode] = useState<"up" | "in">("up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);

  async function submit() {
    const e: Record<string, string> = {};
    if (mode === "up" && !name.trim()) e.name = "Enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email address";
    if (pw.length < 6) e.pw = "Use at least 6 characters";
    setErrs(e);
    if (Object.keys(e).length) return;
    setBusy(true);
    const msg = mode === "up" ? await signUp(name.trim(), email, pw) : await signIn(email, pw);
    setBusy(false);
    if (msg) setErrs({ form: msg });
  }

  return (
    <Screen>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ paddingTop: 40, paddingBottom: 24 }}>
          <Text style={{ color: c.text, fontSize: 30, fontWeight: "800" }}>
            {mode === "up" ? "Create your account" : "Welcome back"}
          </Text>
          <Text style={{ color: c.sub, fontSize: 15, marginTop: 6, marginBottom: 28 }}>
            {mode === "up" ? "Your plans and progress are saved on this device." : "Sign in to pick up where you stopped."}
          </Text>
          {mode === "up" && (
            <Field label="Name" value={name} onChangeText={setName} error={errs.name} autoCapitalize="words" leftIcon={<UserIcon color={c.sub} />} />
          )}
          <Field label="Email" value={email} onChangeText={setEmail} error={errs.email} autoCapitalize="none" keyboardType="email-address" leftIcon={<MessageSvg color={c.sub} />} />
          <Field label="Password" value={pw} onChangeText={setPw} error={errs.pw} secureTextEntry={!show} autoCapitalize="none"
            leftIcon={<LockIcon color={c.sub} />} onRightPress={() => setShow(!show)}
            rightIcon={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} size={22} color={c.sub} />} />
          {errs.form ? <Text style={{ color: c.ember, marginBottom: 14 }}>{errs.form}</Text> : null}
          <View style={{ marginTop: 6 }}>
            <Button title={busy ? "Please wait..." : mode === "up" ? "Create account" : "Sign in"} onPress={submit} disabled={busy} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 22 }}>
            <Text style={{ color: c.sub }}>{mode === "up" ? "Already have an account? " : "New here? "}</Text>
            <Pressable onPress={() => { setMode(mode === "up" ? "in" : "up"); setErrs({}); }}>
              <Text style={{ color: c.primary, fontWeight: "700" }}>{mode === "up" ? "Sign in" : "Create one"}</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}
