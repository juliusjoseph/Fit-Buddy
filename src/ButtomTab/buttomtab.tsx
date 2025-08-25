import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import AppImages from "../../component/images";
import Cookie from "../pages/cookie";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Colors from "../../component/colors";
import Calender from "../pages/calender";
import { LinearGradient } from "expo-linear-gradient";
import Social from "../pages/social";
import Profile from "../pages/profile";
import UserIcon from "../../component/svgs/user";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const colors = ["#FFE5F1", "#7226FF"];
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: "flex",
          position: "absolute",
          bottom: 0.9,
          left: 0,
          right: 0,
          elevation: 10,
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: 90,
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === "ios" ? 10 : 0,

                height: 40,
                width: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {focused ? (
                <Image
                  source={AppImages.Active}
                  style={{ height: 35, width: 35 }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={AppImages.Vector}
                  style={{ height: 23, width: 23 }}
                  resizeMode="contain"
                />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Cookie"
        component={Cookie}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === "ios" ? 10 : 0,

                height: 40,
                width: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                name="cookie"
                size={24}
                color={focused ? Colors.primary : Colors.normalgray}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Calender"
        component={Calender}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === "ios" ? 10 : 0,

                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                marginTop: -35,
              }}
            >
              <LinearGradient
                colors={colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  padding: 15,
                  borderRadius: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={AppImages.calender}
                  style={{ height: 25, width: 25 }}
                  resizeMode="contain"
                />
              </LinearGradient>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Social"
        component={Social}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === "ios" ? 10 : 0,

                height: 40,
                width: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {focused ? (
                <Image
                  source={AppImages.Dell}
                  style={{ height: 30, width: 30 }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={AppImages.group}
                  style={{ height: 25, width: 25 }}
                  resizeMode="contain"
                />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === "ios" ? 10 : 0,

                height: 40,
                width: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <UserIcon />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
