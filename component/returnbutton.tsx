import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Colors from "./colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Dots from "./svgs/dots";

const Return = ({ day, completed = false }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        position: "absolute",
        alignItems: "center",
        marginBottom: "10%",
        marginTop: "10%",
        marginLeft: "5%",
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

      <TouchableOpacity
        style={{
          width: 35,
          height: 35,
          backgroundColor: Colors.textinputcolor,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dots />
      </TouchableOpacity>
    </View>
  );
};
export default Return;
