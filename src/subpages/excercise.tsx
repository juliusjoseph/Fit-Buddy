import React, { useState, useEffect } from "react";
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
import Return from "../../component/returnbutton";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

export default function Excercise(Props) {
  const navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState(200); // 3 minutes 20 seconds = 200 seconds
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      // Timer completed, you can add any action here
      console.log("Countdown finished!");
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Toggle timer pause/play
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  // Reset timer
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(200);
  };

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
          marginTop: "10%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            justifyContent: "space-between",
            position: "absolute",
            alignItems: "center",
            marginBottom: "10%",
            marginTop: "10%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 35,
              height: 35,
              backgroundColor: Colors.white,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="left" size={15} color="black" />
          </TouchableOpacity>
          <View style={{}}>
            <Text style={{ fontWeight: "bold" }}>Exercise 1/11</Text>
            <Text style={{ paddingLeft: 55 }}>{formatTime(timeLeft)}</Text>
          </View>
          {/* <TouchableOpacity
            onPress={toggleTimer}
            style={{
              width: 35,
              height: 35,
              backgroundColor: Colors.white,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign
              name={isActive ? "pause" : "play"}
              size={15}
              color="black"
            />
          </TouchableOpacity> */}
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: "40%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
          marginBottom: "10%",
        }}
      >
        <Image
          source={AppImages.Weight}
          style={{ width: "85%", height: "90%" }}
          resizeMode="center"
        />
      </View>

      <View
        style={{
          marginTop: "5%",
          width: "100%",
          alignItems: "center",
          backgroundColor: Colors.primary,
          height: "40%",
          borderTopRightRadius: 45,
          borderTopLeftRadius: 45,
        }}
      >
        <View style={{ marginTop: "10%" }}>
          <Text style={{ color: Colors.white, letterSpacing: 1, fontSize: 16 }}>
            WEIGHTLIFTING
          </Text>
          <Text
            style={{
              color: Colors.white,

              fontSize: 50,
              textAlign: "center",
            }}
          >
            X 7
          </Text>
        </View>
        {/* Timer controls at the bottom */}
        <View
          style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}
        >
          <TouchableOpacity
            // onPress={toggleTimer}
            style={{
              marginTop: "10%",
              marginRight: "5%",
            }}
          >
            <AntDesign name="stepforward" size={24} color={Colors.white} />
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={toggleTimer}
            onPress={() => Props.navigation.navigate("finish")}
            style={{
              backgroundColor: Colors.white,
              borderRadius: 10,
              marginHorizontal: 10,
              height: 50,
              width: 100,
              marginTop: "10%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="check" size={18} color={Colors.primary} />
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={toggleTimer}
            style={{
              marginTop: "10%",
              marginLeft: "5%",
            }}
          >
            <AntDesign name="stepbackward" size={24} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
