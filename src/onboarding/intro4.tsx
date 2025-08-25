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
import PlayButtonIcon from "../../component/svgs/rightthree";
import { useNavigation } from "@react-navigation/native";

export default function Introfour(props) {
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
          source={AppImages.introthree}
          style={{ width: "100%", height: "100%" }}
          resizeMode="stretch"
        />
      </View>

      <View style={{ marginLeft: "10%", marginTop: "15%", width: "80%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Eat Well</Text>
        <Text style={{ fontSize: 14, color: Colors.textgray, paddingTop: 20 }}>
          Let's start a healthy lifestyle with us, we can determine your diet
          every day. healthy eating is fun
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("Signup")}
        style={{ marginLeft: "70%", marginTop: "30%" }}
      >
        <PlayButtonIcon />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
