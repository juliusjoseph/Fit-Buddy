import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import Colors from "../../component/colors";
import AppImages from "../../component/images";
import GradientButton from "../../component/button";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.bacground,

        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "40%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={AppImages.Welcome}
          style={{ width: "80%", height: "80%" }}
          resizeMode="center"
        />
      </View>
      <View
        style={{
          marginTop: "5%",
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Welcome, John</Text>
        <Text
          style={{ fontSize: 14, color: Colors.textgray, textAlign: "center" }}
        >
          You are all set now, let’s reach your goals together with us
        </Text>
      </View>
      <View style={{ width: "100%", alignItems: "center", marginTop: "25%" }}>
        <GradientButton
          title="Go To Home"
          onPress={() => navigation.navigate("Tabs")}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
