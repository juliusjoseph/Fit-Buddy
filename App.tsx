// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { View, ActivityIndicator } from "react-native";
// import Intro1 from "./src/onboarding/intro1";
// import Intro2 from "./src/onboarding/intro2";
// import Intro3 from "./src/onboarding/intro3";
// import Introfour from "./src/onboarding/intro4";
// import SignUp from "./src/Auth/signup";
// import Login from "./src/Auth/login";
// import Reginfo from "./src/Auth/reginfo";
// import Goal from "./src/Auth/goal";
// import Welcome from "./src/Auth/welcome";
// import Home from "./src/pages/Home";
// import Workoutdetails from "./src/pages/workoutdetails";
// import BottomTabNavigator from "./src/ButtomTab/buttomtab";
// import Connect from "./src/subpages/connext";
// import Sendrequest from "./src/subpages/sendrequest";
// import AuthProvider, { useAuth } from "./providers/AuthProvider";

// const Stack = createStackNavigator();

// // Create a separate component that uses the auth hook
// function AppContent() {
//   const { session, loading, profile } = useAuth();

//   console.log(
//     "Session status:",
//     session ? "Authenticated" : "Not authenticated"
//   );

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   // In your AppContent component
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {session ? (
//           // User is logged in - show app screens
//           <>
//             <Stack.Screen name="Tabs" component={BottomTabNavigator} />
//             <Stack.Screen name="Workoutdetails" component={Workoutdetails} />
//             <Stack.Screen name="Connect" component={Connect} />
//             <Stack.Screen name="Sendrequest" component={Sendrequest} />
//             <Stack.Screen name="Home" component={Home} />
//           </>
//         ) : (
//           // User is not logged in - show auth/onboarding screens
//           <>
//             <Stack.Screen name="Introone" component={Intro1} />
//             <Stack.Screen name="Introtwo" component={Intro2} />
//             <Stack.Screen name="Introthree" component={Intro3} />
//             <Stack.Screen name="Introfour" component={Introfour} />
//             <Stack.Screen name="Signup" component={SignUp} />
//             <Stack.Screen name="Login" component={Login} />
//           </>
//         )}

//         {/* These screens are available in both states for the registration flow */}
//         <Stack.Screen name="Reginfo" component={Reginfo} />
//         <Stack.Screen name="Goal" component={Goal} />
//         <Stack.Screen name="Welcome" component={Welcome} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default function App() {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// }

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import Intro1 from "./src/onboarding/intro1";
import Intro2 from "./src/onboarding/intro2";
import Intro3 from "./src/onboarding/intro3";
import Introfour from "./src/onboarding/intro4";
import SignUp from "./src/Auth/signup";
import Login from "./src/Auth/login";
import Reginfo from "./src/Auth/reginfo";
import Goal from "./src/Auth/goal";
import Welcome from "./src/Auth/welcome";
import Home from "./src/pages/Home";
import Workoutdetails from "./src/pages/workoutdetails";
import BottomTabNavigator from "./src/ButtomTab/buttomtab";
import Connect from "./src/subpages/connext";
import Sendrequest from "./src/subpages/sendrequest";
import AuthProvider, { useAuth } from "./providers/AuthProvider";
import Toast from "react-native-toast-message";
import Excercise from "./src/subpages/excercise";
import Finish from "./src/subpages/finish";

const Stack = createStackNavigator();

// Create a separate component that uses the auth hook
function AppContent() {
  const { session, loading, profile } = useAuth();

  console.log(
    "Session status:",
    session ? "Authenticated" : "Not authenticated",
    "Profile:",
    profile
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Check if user has completed profile (has sex value)
  const hasCompletedProfile =
    profile && profile.sex !== "" && profile.sex !== "";

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {session ? (
          // User is logged in
          hasCompletedProfile ? (
            // User has completed profile - show app screens
            <>
              <Stack.Screen name="Tabs" component={BottomTabNavigator} />
              <Stack.Screen name="Workoutdetails" component={Workoutdetails} />
              <Stack.Screen name="Connect" component={Connect} />
              <Stack.Screen name="Sendrequest" component={Sendrequest} />
              <Stack.Screen name="excercise" component={Excercise} />
              <Stack.Screen name="finish" component={Finish} />
            </>
          ) : (
            // User is logged in but hasn't completed profile - show registration flow
            <>
              <Stack.Screen name="Reginfo" component={Reginfo} />
              <Stack.Screen name="Goal" component={Goal} />
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Login" component={Login} />
              {/* Also include app screens to handle navigation after completion */}
              <Stack.Screen name="Tabs" component={BottomTabNavigator} />
              <Stack.Screen name="Workoutdetails" component={Workoutdetails} />
              <Stack.Screen name="Connect" component={Connect} />
              <Stack.Screen name="Sendrequest" component={Sendrequest} />
              <Stack.Screen name="Home" component={Home} />
            </>
          )
        ) : (
          // User is not logged in - show auth/onboarding screens
          <>
            <Stack.Screen name="Introone" component={Intro1} />
            <Stack.Screen name="Introtwo" component={Intro2} />
            <Stack.Screen name="Introthree" component={Intro3} />
            <Stack.Screen name="Introfour" component={Introfour} />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { View, ActivityIndicator } from "react-native";
// import Intro1 from "./src/onboarding/intro1";
// import Intro2 from "./src/onboarding/intro2";
// import Intro3 from "./src/onboarding/intro3";
// import Introfour from "./src/onboarding/intro4";
// import SignUp from "./src/Auth/signup";
// import Login from "./src/Auth/login";
// import Reginfo from "./src/Auth/reginfo";
// import Goal from "./src/Auth/goal";
// import Welcome from "./src/Auth/welcome";
// import Home from "./src/pages/Home";
// import Workoutdetails from "./src/pages/workoutdetails";
// import BottomTabNavigator from "./src/ButtomTab/buttomtab";
// import Connect from "./src/subpages/connext";
// import Sendrequest from "./src/subpages/sendrequest";
// import AuthProvider, { useAuth } from "./providers/AuthProvider";
// import Toast from "react-native-toast-message";

// const Stack = createStackNavigator();

// // Create a separate component that uses the auth hook
// function AppContent() {
//   const { session, loading, profile } = useAuth();

//   console.log(
//     "Session status:",
//     session ? "Authenticated" : "Not authenticated",
//     "Profile:",
//     profile
//   );

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   // Check if user has completed profile (has sex value)
//   const hasCompletedProfile =
//     profile && profile.sex !== "" && profile.sex !== "";

//   // Determine the initial route based on auth state and profile completion
//   let initialRouteName = "Introone"; // Default for non-authenticated users

//   if (session) {
//     initialRouteName = hasCompletedProfile ? "Tabs" : "Reginfo";
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{ headerShown: false }}
//         initialRouteName={initialRouteName}
//       >
//         {session ? (
//           // User is logged in
//           hasCompletedProfile ? (
//             // User has completed profile - show app screens
//             <>
//               <Stack.Screen name="Tabs" component={BottomTabNavigator} />
//               <Stack.Screen name="Workoutdetails" component={Workoutdetails} />
//               <Stack.Screen name="Connect" component={Connect} />
//               <Stack.Screen name="Sendrequest" component={Sendrequest} />
//               <Stack.Screen name="Home" component={Home} />
//             </>
//           ) : (
//             // User is logged in but hasn't completed profile - show registration flow
//             <>
//               <Stack.Screen name="Reginfo" component={Reginfo} />
//               <Stack.Screen name="Goal" component={Goal} />
//               <Stack.Screen name="Welcome" component={Welcome} />
//               {/* Also include app screens to handle navigation after completion */}
//               <Stack.Screen name="Tabs" component={BottomTabNavigator} />
//               <Stack.Screen name="Workoutdetails" component={Workoutdetails} />
//               <Stack.Screen name="Connect" component={Connect} />
//               <Stack.Screen name="Sendrequest" component={Sendrequest} />
//               <Stack.Screen name="Home" component={Home} />
//             </>
//           )
//         ) : (
//           // User is not logged in - show auth/onboarding screens
//           <>
//             <Stack.Screen name="Introone" component={Intro1} />
//             <Stack.Screen name="Introtwo" component={Intro2} />
//             <Stack.Screen name="Introthree" component={Intro3} />
//             <Stack.Screen name="Introfour" component={Introfour} />
//             <Stack.Screen name="Signup" component={SignUp} />
//             <Stack.Screen name="Login" component={Login} />
//           </>
//         )}
//       </Stack.Navigator>
//       <Toast />
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// }
