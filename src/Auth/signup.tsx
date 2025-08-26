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
// import UserIcon from "../../component/svgs/user";
// import MessageSvg from "../../component/svgs/message";
// import LockIcon from "../../component/svgs/lock";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { AntDesign, FontAwesome } from "@expo/vector-icons";
// import AppImages from "../../component/images";
// import { useNavigation } from "@react-navigation/native";
// import Feather from "@expo/vector-icons/Feather";
// import { supabase } from "../lib/supabase";

// export default function SignUp(props) {
//   const [isChecked, setIsChecked] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Better naming
//   const [loading, setLoading] = useState(false);
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");

//   const navigation = useNavigation();

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   async function signUpWithName() {
//     setLoading(true);
//     const { error } = await supabase.auth.signUp({
//       email: email,
//       password: password,
//       options: {
//         data: {
//           first_name: firstname,
//           last_name: lastname,
//           full_name: `${firstname} ${lastname}`,
//         },
//       },
//     });

//     if (error) {
//       Alert.alert(error.message);
//       setLoading(false);
//     } else {
//       // After successful signup, check if profile is complete
//       // For new users, profile won't be complete, so navigate to Reginfo
//       navigation.navigate("Reginfo");
//       setLoading(false);
//     }
//   }

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: Colors.bacground,
//         width: "100%",
//         height: "100%",
//       }}
//     >
//       <Text style={{ fontSize: 15, textAlign: "center", paddingTop: "15%" }}>
//         Hey there,
//       </Text>
//       <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "bold" }}>
//         Create an Account
//       </Text>

//       <View style={{ marginTop: "10%", width: "90%", marginLeft: "5%" }}>
//         <CustomTextInput
//           placeholder="First Name"
//           leftIcon={<UserIcon />}
//           value={firstname}
//           onChangeText={setFirstName}
//         />
//         <CustomTextInput
//           placeholder="Last Name"
//           leftIcon={<UserIcon />}
//           value={lastname}
//           onChangeText={setLastName}
//         />
//         <CustomTextInput
//           placeholder="Email"
//           leftIcon={<MessageSvg />}
//           value={email}
//           onChangeText={setEmail}
//         />
//         <CustomTextInput
//           placeholder="Password"
//           onChangeText={setPassword}
//           value={password}
//           leftIcon={<LockIcon />}
//           secureTextEntry={!isPasswordVisible} // Corrected logic
//           rightIcon={
//             isPasswordVisible ? (
//               <Ionicons name="eye-outline" size={24} color={Colors.textgray} />
//             ) : (
//               <Feather name="eye-off" size={20} color={Colors.textgray} />
//             )
//           }
//           onRightIconPress={togglePasswordVisibility} // Use the toggle function
//         />
//       </View>

//       {/* ✅ Checkbox Section */}
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           marginTop: 20,
//           paddingHorizontal: 25,
//         }}
//       >
//         <TouchableOpacity
//           onPress={() => setIsChecked(!isChecked)}
//           style={{
//             width: 20,
//             height: 20,
//             borderWidth: 1,
//             borderColor: Colors.textgray,
//             borderRadius: 4,
//             justifyContent: "center",
//             alignItems: "center",
//             marginRight: 10,
//             backgroundColor: isChecked ? Colors.primary : "transparent",
//           }}
//         >
//           {isChecked && <Ionicons name="checkmark" size={14} color="white" />}
//         </TouchableOpacity>
//         <Text style={{ fontSize: 13, color: Colors.textgray, flex: 1 }}>
//           By continuing you accept our{" "}
//           <Text
//             style={{ color: Colors.textgray, textDecorationLine: "underline" }}
//           >
//             Privacy Policy
//           </Text>{" "}
//           and{" "}
//           <Text
//             style={{ color: Colors.textgray, textDecorationLine: "underline" }}
//           >
//             Term of Use
//           </Text>
//         </Text>
//       </View>

//       <View style={{ width: "100%", alignItems: "center", marginTop: "15%" }}>
//         <GradientButton
//           title={loading ? "Creating account ..." : "Register"}
//           // onPress={() => navigation.navigate("Reginfo")}
//           onPress={signUpWithName}
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
//           onPress={() => alert("Sign in with Google")}
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
//           Already have an account?{" "}
//         </Text>
//         <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//           <Text
//             style={{
//               fontSize: 14,
//               color: Colors.primary,
//               fontWeight: "bold",
//             }}
//           >
//             Login
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
  Alert,
} from "react-native";
import Colors from "../../component/colors";
import CustomTextInput from "../../component/textinput";
import GradientButton from "../../component/button";
import UserIcon from "../../component/svgs/user";
import MessageSvg from "../../component/svgs/message";
import LockIcon from "../../component/svgs/lock";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import AppImages from "../../component/images";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import { supabase } from "../lib/supabase";
import Toast from "react-native-toast-message";

export default function SignUp(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const navigation = useNavigation();

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation function
  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  // Name validation function
  const isValidName = (name) => {
    return name.trim().length >= 2;
  };

  // Frontend validation before sending to backend
  const validateForm = () => {
    if (!firstname.trim()) {
      Toast.show({
        type: "error",
        text1: "First name required",
        text2: "Please enter your first name",
      });
      return false;
    }

    if (!isValidName(firstname)) {
      Toast.show({
        type: "error",
        text1: "Invalid first name",
        text2: "First name must be at least 2 characters",
      });
      return false;
    }

    if (!lastname.trim()) {
      Toast.show({
        type: "error",
        text1: "Last name required",
        text2: "Please enter your last name",
      });
      return false;
    }

    if (!isValidName(lastname)) {
      Toast.show({
        type: "error",
        text1: "Invalid last name",
        text2: "Last name must be at least 2 characters",
      });
      return false;
    }

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
        text1: "Weak password",
        text2: "Password must be at least 6 characters",
      });
      return false;
    }

    if (!isChecked) {
      Toast.show({
        type: "error",
        text1: "Terms acceptance required",
        text2: "Please accept our Privacy Policy and Terms of Use",
      });
      return false;
    }

    return true;
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  async function signUpWithName() {
    // Frontend validation first
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
        options: {
          data: {
            first_name: firstname.trim(),
            last_name: lastname.trim(),
            full_name: `${firstname.trim()} ${lastname.trim()}`,
          },
        },
      });

      if (error) {
        Toast.show({
          type: "error",
          text1: "Registration failed",
          text2: error.message,
        });
      } else {
        Toast.show({
          type: "success",
          text1: "Account created",
          text2: "Please check your email for verification",
        });
        // Navigate to registration info screen
        navigation.navigate("Reginfo");
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Registration error",
        text2: "An unexpected error occurred",
      });
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.bacground,
        width: "100%",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 15, textAlign: "center", paddingTop: "15%" }}>
        Hey there,
      </Text>
      <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "bold" }}>
        Create an Account
      </Text>

      <View style={{ marginTop: "10%", width: "90%", marginLeft: "5%" }}>
        <CustomTextInput
          placeholder="First Name"
          leftIcon={<UserIcon />}
          value={firstname}
          onChangeText={setFirstName}
        />
        <CustomTextInput
          placeholder="Last Name"
          leftIcon={<UserIcon />}
          value={lastname}
          onChangeText={setLastName}
        />
        <CustomTextInput
          placeholder="Email"
          leftIcon={<MessageSvg />}
          value={email}
          onChangeText={setEmail}
        />
        <CustomTextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          leftIcon={<LockIcon />}
          secureTextEntry={!isPasswordVisible}
          rightIcon={
            isPasswordVisible ? (
              <Ionicons name="eye-outline" size={24} color={Colors.textgray} />
            ) : (
              <Feather name="eye-off" size={20} color={Colors.textgray} />
            )
          }
          onRightIconPress={togglePasswordVisibility}
        />
      </View>

      {/* ✅ Checkbox Section */}
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
        <Text style={{ fontSize: 13, color: Colors.textgray, flex: 1 }}>
          By continuing you accept our{" "}
          <Text
            style={{ color: Colors.textgray, textDecorationLine: "underline" }}
          >
            Privacy Policy
          </Text>{" "}
          and{" "}
          <Text
            style={{ color: Colors.textgray, textDecorationLine: "underline" }}
          >
            Term of Use
          </Text>
        </Text>
      </View>

      <View style={{ width: "100%", alignItems: "center", marginTop: "15%" }}>
        <GradientButton
          title={loading ? "Creating account..." : "Register"}
          onPress={signUpWithName}
          disabled={loading || !isChecked}
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
              text1: "Google Sign Up",
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
              text1: "Facebook Sign Up",
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
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              fontSize: 14,
              color: Colors.primary,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
      <Toast />
    </SafeAreaView>
  );
}
