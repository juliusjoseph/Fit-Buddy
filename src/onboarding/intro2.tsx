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
import Rightone from "../../component/svgs/rightone";
import { useNavigation } from "@react-navigation/native";

export default function Intro2(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.bacground,

        width: "100%",
        height: "100%",
      }}
    >
      <View style={{ width: "100%", height: "50%" }}>
        <Image
          source={AppImages.intro}
          style={{ width: "100%", height: "100%" }}
          resizeMode="stretch"
        />
      </View>

      <View style={{ marginLeft: "10%", marginTop: "15%", width: "80%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Track Your Goal
        </Text>
        <Text style={{ fontSize: 14, color: Colors.textgray, paddingTop: 20 }}>
          Don't worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("Introthree")}
        style={{ marginLeft: "70%", marginTop: "30%" }}
      >
        <Rightone />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
