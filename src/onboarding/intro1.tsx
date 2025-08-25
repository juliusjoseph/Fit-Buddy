import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Colors from "../../component/colors";
import GradientButton from "../../component/button";
import { useNavigation } from "@react-navigation/native";

export default function Intro1(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.bacground,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <View style={{ alignItems: "center", marginTop: "50%" }}>
        <Text style={{ fontSize: 36, fontWeight: "bold", color: "#2D3436" }}>
          Fit-<Text style={{ color: Colors.primary }}>buddy</Text>
        </Text>
        <Text style={{ color: Colors.textgray, fontSize: 15 }}>
          Everybody Can Train
        </Text>
      </View>

      <View style={{ width: "100%", alignItems: "center", marginTop: "60%" }}>
        <GradientButton
          title="Get Started"
          onPress={() => props.navigation.navigate("Introtwo")}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
