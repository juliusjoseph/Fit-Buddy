import React, { useState } from "react";
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
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import Dots from "../../component/svgs/dots";

export default function Social() {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckeding, setIsCheckeding] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.bacground,

        width: "100%",
        height: "100%",

        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-between",
          marginTop: "12%",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            backgroundColor: Colors.textinputcolor,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="left" size={15} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: Colors.textinputcolor,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Dots />
        </TouchableOpacity>
      </View>

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
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          What kind of buddy do you need?
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          paddingHorizontal: 25,
        }}
      >
        <TouchableOpacity
          onPress={() => setIsChecked(!isChecked)}
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: Colors.textgray,
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            backgroundColor: isChecked ? Colors.primary : "transparent",
          }}
        >
          {isChecked && <Ionicons name="checkmark" size={14} color="white" />}
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            color: Colors.textgray,
            flex: 1,
            letterSpacing: 1,
          }}
        >
          Works out at similar times
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          paddingHorizontal: 25,
        }}
      >
        <TouchableOpacity
          onPress={() => setIsCheckeding(!isCheckeding)}
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: Colors.textgray,
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            backgroundColor: isCheckeding ? Colors.primary : "transparent",
          }}
        >
          {isCheckeding && (
            <Ionicons name="checkmark" size={14} color="white" />
          )}
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            color: Colors.textgray,
            flex: 1,
            letterSpacing: 1,
          }}
        >
          Works out at similar times
        </Text>
      </View>

      <View style={{ width: "100%", alignItems: "center", marginTop: "20%" }}>
        <GradientButton
          title="Find Buddy"
          onPress={() => navigation.navigate("Connect")}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
