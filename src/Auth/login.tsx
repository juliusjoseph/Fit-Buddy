// import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TouchableOpacity,
//   Image,
//   Alert,
// } from "react-native";
// import Colors from "../../component/colors";
// import CustomTextInput from "../../component/textinput";
// import GradientButton from "../../component/button";
// import MessageSvg from "../../component/svgs/message";
// import LockIcon from "../../component/svgs/lock";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { AntDesign, FontAwesome } from "@expo/vector-icons";
// import AppImages from "../../component/images";
// import { useNavigation } from "@react-navigation/native";
// import { supabase } from "../lib/supabase";

// export default function Login(props) {
//   const [isChecked, setIsChecked] = useState(false);
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);

//   async function signInWithEmail() {
//     setLoading(true);
//     const { error } = await supabase.auth.signInWithPassword({
//       email: email,
//       password: password,
//     });
//     if (error) Alert.alert(error.message);
//     props.navigation.navigate("Welcome");
//     setLoading(false);
//   }

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: Colors.bacground,
//         width: "100%",
//         height: "100%",
//         padding: 15,
//       }}
//     >
//       <Text style={{ fontSize: 15, textAlign: "center", paddingTop: "15%" }}>
//         Hey there,
//       </Text>
//       <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "bold" }}>
//         Welcome Back
//       </Text>

//       <View style={{ marginTop: "10%" }}>
//         <CustomTextInput
//           placeholder="Email"
//           leftIcon={<MessageSvg />}
//           value={email}
//           onChangeText={setEmail}
//         />
//         <CustomTextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           leftIcon={<LockIcon />}
//           rightIcon={
//             <Ionicons name="eye-outline" size={24} color={Colors.textgray} />
//           }
//           onRightIconPress={() => alert("Right icon pressed!")}
//         />
//       </View>
//       <TouchableOpacity>
//         <Text
//           style={{
//             color: Colors.textgray,
//             textAlign: "center",
//             paddingTop: 15,
//             textDecorationLine: "underline",
//           }}
//         >
//           Forgot your password?
//         </Text>
//       </TouchableOpacity>

//       <View style={{ width: "100%", alignItems: "center", marginTop: "55%" }}>
//         <GradientButton
//           title={loading ? "Signin in .. " : "Signin"}
//           // onPress={() => props.navigation.navigate("Welcome")}
//           onPress={signInWithEmail}
//           disabled={loading}
//         />
//       </View>
//       <View
//         style={{
//           width: "100%",
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "5%",
//         }}
//       >
//         <View
//           style={{
//             width: "40%",
//             height: 1,
//             backgroundColor: Colors.normalgray,
//           }}
//         ></View>
//         <Text style={{ paddingHorizontal: 5 }}>OR</Text>
//         <View
//           style={{
//             width: "40%",
//             height: 1,
//             backgroundColor: Colors.normalgray,
//           }}
//         ></View>
//       </View>

//       <View
//         style={{
//           flexDirection: "row",
//           marginTop: 20,
//           justifyContent: "center",
//         }}
//       >
//         <TouchableOpacity
//           style={{
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#fff",
//             borderRadius: 8,

//             borderWidth: 1,
//             borderColor: "#ddd",
//             width: "18%",
//             height: 55,
//           }}
//           // onPress={() => alert("Sign in with Google")}
//           onPress={() => supabase.auth.signOut()}
//         >
//           <Image
//             source={AppImages.GG}
//             resizeMode="center"
//             style={{ height: 25 }}
//           />
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#ffffff",
//             borderRadius: 8,
//             width: "18%",
//             height: 55,
//             marginLeft: "15%",
//             borderColor: "#ddd",
//             borderWidth: 1,
//           }}
//           onPress={() => alert("Sign in with Facebook")}
//         >
//           <FontAwesome name="facebook" size={20} color="#1877F2" />
//         </TouchableOpacity>
//       </View>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "center",
//           marginTop: 30,
//         }}
//       >
//         <Text style={{ fontSize: 14, color: Colors.textgray }}>
//           Don’t have an account yet?{" "}
//         </Text>
//         <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
//           <Text
//             style={{
//               fontSize: 14,
//               color: Colors.primary,
//               fontWeight: "bold",
//             }}
//           >
//             Register
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

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
import CustomTextInput from "../../component/textinput";
import GradientButton from "../../component/button";
import MessageSvg from "../../component/svgs/message";
import LockIcon from "../../component/svgs/lock";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import AppImages from "../../component/images";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../lib/supabase";
import Toast from "react-native-toast-message";

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation function
  const isValidPassword = (password: string | any[]) => {
    return password.length >= 6;
  };

  // Frontend validation before sending to backend
  const validateForm = () => {
    if (!email.trim()) {
      Toast.show({
        type: "error",
        text1: "Email required",
        text2: "Please enter your email address",
      });
      return false;
    }

    if (!isValidEmail(email)) {
      Toast.show({
        type: "error",
        text1: "Invalid email",
        text2: "Please enter a valid email address",
      });
      return false;
    }

    if (!password) {
      Toast.show({
        type: "error",
        text1: "Password required",
        text2: "Please enter your password",
      });
      return false;
    }

    if (!isValidPassword(password)) {
      Toast.show({
        type: "error",
        text1: "Invalid password",
        text2: "Password must be at least 6 characters",
      });
      return false;
    }

    return true;
  };

  async function signInWithEmail() {
    // Frontend validation first
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) {
        Toast.show({
          type: "error",
          text1: "Login failed",
          text2: error.message,
        });
      } else {
        Toast.show({
          type: "success",
          text1: "Login successful",
          text2: "Welcome back!",
        });
        // Navigate after successful login
        props.navigation.navigate("Welcome");
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Login error",
        text2: "An unexpected error occurred",
      });
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.bacground,
        width: "100%",
        height: "100%",
        padding: 15,
      }}
    >
      <Text style={{ fontSize: 15, textAlign: "center", paddingTop: "15%" }}>
        Hey there,
      </Text>
      <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "bold" }}>
        Welcome Back
      </Text>

      <View style={{ marginTop: "10%" }}>
        <CustomTextInput
          placeholder="Email"
          leftIcon={<MessageSvg />}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <CustomTextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          leftIcon={<LockIcon />}
          secureTextEntry={!isPasswordVisible}
          rightIcon={
            isPasswordVisible ? (
              <Ionicons name="eye-outline" size={24} color={Colors.textgray} />
            ) : (
              <Ionicons
                name="eye-off-outline"
                size={24}
                color={Colors.textgray}
              />
            )
          }
          onRightIconPress={togglePasswordVisibility}
        />
      </View>

      <TouchableOpacity>
        <Text
          style={{
            color: Colors.textgray,
            textAlign: "center",
            paddingTop: 15,
            textDecorationLine: "underline",
          }}
        >
          Forgot your password?
        </Text>
      </TouchableOpacity>

      <View style={{ width: "100%", alignItems: "center", marginTop: "55%" }}>
        <GradientButton
          title={loading ? "Signing in..." : "Sign in"}
          onPress={signInWithEmail}
          disabled={loading}
        />
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <View
          style={{
            width: "40%",
            height: 1,
            backgroundColor: Colors.normalgray,
          }}
        ></View>
        <Text style={{ paddingHorizontal: 5 }}>OR</Text>
        <View
          style={{
            width: "40%",
            height: 1,
            backgroundColor: Colors.normalgray,
          }}
        ></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#ddd",
            width: "18%",
            height: 55,
          }}
          onPress={() =>
            Toast.show({
              type: "info",
              text1: "Google Sign In",
              text2: "This feature is coming soon!",
            })
          }
        >
          <Image
            source={AppImages.GG}
            resizeMode="center"
            style={{ height: 25 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            borderRadius: 8,
            width: "18%",
            height: 55,
            marginLeft: "15%",
            borderColor: "#ddd",
            borderWidth: 1,
          }}
          onPress={() =>
            Toast.show({
              type: "info",
              text1: "Facebook Sign In",
              text2: "This feature is coming soon!",
            })
          }
        >
          <FontAwesome name="facebook" size={20} color="#1877F2" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 14, color: Colors.textgray }}>
          Don't have an account yet?{" "}
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
          <Text
            style={{
              fontSize: 14,
              color: Colors.primary,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
      <Toast />
    </SafeAreaView>
  );
}
