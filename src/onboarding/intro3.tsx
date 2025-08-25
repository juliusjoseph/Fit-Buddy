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
import PlayButton2 from "../../component/svgs/righttwo";
import { useNavigation } from "@react-navigation/native";

export default function Intro3(props) {
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
          source={AppImages.introtwo}
          style={{ width: "100%", height: "100%" }}
          resizeMode="stretch"
        />
      </View>
      <View style={{ marginLeft: "10%", marginTop: "15%", width: "80%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Get Burn</Text>
        <Text style={{ fontSize: 14, color: Colors.textgray, paddingTop: 20 }}>
          Let’s keep burning, to achive yours goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Introfour")}
        style={{ marginLeft: "70%", marginTop: "30%" }}
      >
        <PlayButton2 />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
