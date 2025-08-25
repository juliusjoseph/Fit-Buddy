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

export default function Finish() {
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
          height: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={AppImages.Done}
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
        <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
          Congratulations, You Have Finished Your Workout
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: Colors.textgray,
            textAlign: "center",
            paddingTop: 10,
          }}
        >
          Exercises is king and nutrition is queen. Combine the two and you will
          have a kingdom
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: Colors.textgray,
            textAlign: "center",
            paddingTop: 10,
          }}
        >
          -Jack Lalanne
        </Text>
      </View>
      <View style={{ width: "100%", alignItems: "center", marginTop: "20%" }}>
        <GradientButton
          title="Back To Home"
          onPress={() => navigation.navigate("Tabs")}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
