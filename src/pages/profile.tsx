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
import { supabase } from "../lib/supabase";

export default function Profile(props) {
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
          source={AppImages.Welcome}
          style={{ width: "80%", height: "80%" }}
          resizeMode="stretch"
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
          Building in progress
        </Text>
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <GradientButton
          title="Logout"
          onPress={() => supabase.auth.signOut()}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
