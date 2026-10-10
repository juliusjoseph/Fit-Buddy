import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UserIcon from "./components/svgs/user";
import AppImages from "./images";
import { useStore } from "./store";
import { useTheme } from "./theme";
import { RootStackParamList, TabParamList } from "./types";
import Onboarding from "./screens/Onboarding";
import Auth from "./screens/Auth";
import Setup from "./screens/Setup";
import Home from "./screens/Home";
import Progress from "./screens/Progress";
import Profile from "./screens/Profile";
import Plan from "./screens/Plan";
import Session from "./screens/Session";
import Finish from "./screens/Finish";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function Tabs() {
  const { c } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: c.surface, borderTopColor: c.line },
        tabBarIcon: ({ focused }) =>
          route.name === "Home" ? (
            <Image source={focused ? AppImages.active : AppImages.vector}
              style={focused ? { width: 28, height: 36 } : { width: 23, height: 23 }} resizeMode="contain" />
          ) : route.name === "Progress" ? (
            <View style={{ marginTop: -26 }}>
              <LinearGradient colors={[c.primary2, c.primary]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                style={{ width: 58, height: 58, borderRadius: 29, alignItems: "center", justifyContent: "center" }}>
                <Image source={AppImages.calendar} style={{ width: 26, height: 26 }} resizeMode="contain" />
              </LinearGradient>
            </View>
          ) : (
            <UserIcon width={22} height={22} color={focused ? c.primary : c.sub} />
          ),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  const { ready, onboarded, user } = useStore();
  const { c } = useTheme();
  if (!ready) return null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: c.bg } }}>
      {!onboarded ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : !user ? (
        <Stack.Screen name="Auth" component={Auth} />
      ) : !user.goal ? (
        <Stack.Screen name="Setup" component={Setup} />
      ) : (
        <>
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Plan" component={Plan} />
          <Stack.Screen name="Session" component={Session} options={{ gestureEnabled: false }} />
          <Stack.Screen name="Finish" component={Finish} options={{ gestureEnabled: false }} />
        </>
      )}
    </Stack.Navigator>
  );
}
