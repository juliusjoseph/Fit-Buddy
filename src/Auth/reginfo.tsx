// import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TouchableOpacity,
//   Image,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
//   ScrollView,
// } from "react-native";

// import Colors from "../../component/colors";
// import AppImages from "../../component/images";
// import GradientButton from "../../component/button";
// import UserIcon from "../../component/svgs/user";
// import MessageSvg from "../../component/svgs/message";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from "@react-navigation/native";
// import { useAuth } from "../../providers/AuthProvider";
// import { supabase } from "../lib/supabase";

// export default function Reginfo() {
//   const [gender, setGender] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);

//   const genders = ["Male", "Female", "Other", "Prefer not to say"];

//   const handleGenderSelect = (selectedGender) => {
//     setGender(selectedGender);
//     setShowDropdown(false);
//   };

//   // In your Reginfo screen
//   const { session, refreshProfile } = useAuth();

//   const saveProfileData = async (sex: string) => {
//     try {
//       const { error } = await supabase
//         .from("profiles")
//         .update({ sex })
//         .eq("id", session.user.id);

//       if (error) {
//         console.error("Error updating profile:", error);
//       } else {
//         // Refresh the profile in our auth context
//         await refreshProfile();
//         // Navigate to next screen
//         navigation.navigate("Goal");
//       }
//     } catch (error) {
//       console.error("Error saving profile data:", error);
//     }
//   };

//   const colors = ["#FFE5F1", "#7226FF"];
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView
//       style={{ flex: 1, backgroundColor: Colors.bacground, width: "100%" }}
//     >
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//       >
//         <ScrollView
//           contentContainerStyle={{
//             flexGrow: 1,
//             alignItems: "center",
//             paddingBottom: 10,
//           }}
//           keyboardShouldPersistTaps="handled"
//           showsVerticalScrollIndicator={false}
//         >
//           <View style={{ width: "100%", height: 310, alignItems: "center" }}>
//             <Image
//               source={AppImages.Lad}
//               style={{ width: "90%", height: "80%" }}
//               resizeMode="stretch"
//             />
//           </View>

//           <View style={{ marginTop: "3%", width: "80%", alignItems: "center" }}>
//             <Text style={{ fontWeight: "bold", fontSize: 18 }}>
//               Let's complete your profile
//             </Text>
//             <Text
//               style={{
//                 fontSize: 14,
//                 color: Colors.textgray,
//                 textAlign: "center",
//               }}
//             >
//               It will help us to know more about you!
//             </Text>
//           </View>

//           <View
//             style={{ width: "100%", alignItems: "center", marginTop: "10%" }}
//           >
//             <TouchableOpacity
//               onPress={() => setShowDropdown(!showDropdown)}
//               style={{
//                 borderWidth: 1,
//                 borderColor: "#ddd",
//                 borderRadius: 8,
//                 width: "90%",
//                 paddingVertical: 13,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 backgroundColor: Colors.textinputcolor,
//               }}
//             >
//               <View style={{ marginLeft: "3%" }}>
//                 <UserIcon />
//               </View>

//               <Text
//                 style={{
//                   color: gender ? "#000" : "#888",
//                   paddingLeft: "3%",
//                   flex: 1,
//                 }}
//               >
//                 {gender || "Choose Gender"}
//               </Text>

//               <View style={{ marginRight: "3%" }}>
//                 {showDropdown ? (
//                   <AntDesign name="up" size={20} color={Colors.textgray} />
//                 ) : (
//                   <Ionicons
//                     name="chevron-down-outline"
//                     size={20}
//                     color={Colors.textgray}
//                   />
//                 )}
//               </View>
//             </TouchableOpacity>

//             {showDropdown && (
//               <View
//                 style={{
//                   borderWidth: 1,
//                   borderColor: "#ddd",
//                   borderRadius: 8,
//                   width: "90%",
//                   paddingVertical: 10,
//                   position: "absolute",
//                   top: 50,
//                   zIndex: 10,
//                   marginTop: 5,
//                   backgroundColor: Colors.bacground,
//                   shadowColor: "#000",
//                   shadowOffset: { width: 0, height: 2 },
//                   shadowOpacity: 0.2,
//                   shadowRadius: 4,
//                   elevation: 3,
//                 }}
//               >
//                 {genders.map((item) => (
//                   <TouchableOpacity
//                     key={item}
//                     style={{
//                       padding: 15,
//                       borderBottomWidth: 1,
//                       borderBottomColor: "#eee",
//                     }}
//                     onPress={() => handleGenderSelect(item)}
//                   >
//                     <Text style={{ fontSize: 15, color: Colors.textgray }}>
//                       {item}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             )}
//           </View>

//           <View style={{ width: "90%" }}>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 borderRadius: 10,
//                 marginVertical: 10,
//                 backgroundColor: Colors.textinputcolor,
//                 borderWidth: 1,
//                 borderColor: "#ddd",
//               }}
//             >
//               <View style={{ marginLeft: "3%" }}>
//                 <MessageSvg />
//               </View>
//               <TextInput
//                 value={dateOfBirth}
//                 placeholder="Date of Birth"
//                 onChangeText={setDateOfBirth}
//                 style={{ borderRadius: 8, padding: 13, fontSize: 16, flex: 1 }}
//               />
//             </View>

//             <View style={{ flexDirection: "row", marginBottom: 10 }}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   borderRadius: 10,
//                   backgroundColor: Colors.textinputcolor,
//                   borderWidth: 1,
//                   borderColor: "#ddd",
//                   flex: 1,
//                   marginRight: 10,
//                   height: 50,
//                 }}
//               >
//                 <View style={{ marginLeft: "3%" }}>
//                   <MessageSvg />
//                 </View>
//                 <TextInput
//                   value={weight}
//                   placeholder="Your Weight"
//                   onChangeText={setWeight}
//                   keyboardType="numeric"
//                   style={{
//                     borderRadius: 8,
//                     padding: 13,
//                     fontSize: 16,
//                     flex: 1,
//                   }}
//                 />
//               </View>

//               <View style={{ width: "20%", height: 50 }}>
//                 <LinearGradient
//                   colors={colors}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                   style={{
//                     padding: 15,
//                     borderRadius: 10,
//                     alignItems: "center",
//                     justifyContent: "center",
//                     height: "100%",
//                   }}
//                 >
//                   <Text
//                     style={{
//                       color: "#FFFFFF",
//                       fontWeight: "bold",
//                       fontSize: 14,
//                       letterSpacing: 1,
//                     }}
//                   >
//                     KG
//                   </Text>
//                 </LinearGradient>
//               </View>
//             </View>

//             {/* Height Input Field */}
//             <View style={{ flexDirection: "row", marginBottom: 20 }}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   borderRadius: 10,
//                   backgroundColor: Colors.textinputcolor,
//                   borderWidth: 1,
//                   borderColor: "#ddd",
//                   flex: 1,
//                   marginRight: 10,
//                   height: 50,
//                 }}
//               >
//                 <View style={{ marginLeft: "3%" }}>
//                   <MessageSvg />
//                 </View>
//                 <TextInput
//                   value={height}
//                   placeholder="Your Height"
//                   onChangeText={setHeight}
//                   keyboardType="numeric"
//                   style={{
//                     borderRadius: 8,
//                     padding: 13,
//                     fontSize: 16,
//                     flex: 1,
//                   }}
//                 />
//               </View>

//               <View style={{ width: "20%", height: 50 }}>
//                 <LinearGradient
//                   colors={colors}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                   style={{
//                     padding: 15,
//                     borderRadius: 10,
//                     alignItems: "center",
//                     justifyContent: "center",
//                     height: "100%",
//                   }}
//                 >
//                   <Text
//                     style={{
//                       color: "#FFFFFF",
//                       fontWeight: "bold",
//                       fontSize: 14,
//                       letterSpacing: 1,
//                     }}
//                   >
//                     CM
//                   </Text>
//                 </LinearGradient>
//               </View>
//             </View>

//             <View style={{ width: "100%", alignItems: "center" }}>
//               <GradientButton
//                 title="Next"
//                 onPress={() => navigation.navigate("Goal")}
//               />
//             </View>
//           </View>

//           <StatusBar style="auto" />
//         </ScrollView>
//       </KeyboardAvoidingView>
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
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";

import Colors from "../../component/colors";
import AppImages from "../../component/images";
import GradientButton from "../../component/button";
import UserIcon from "../../component/svgs/user";
import MessageSvg from "../../component/svgs/message";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../providers/AuthProvider";
import { supabase } from "../lib/supabase";

export default function Reginfo() {
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const genders = ["Male", "Female", "Other", "Prefer not to say"];

  const { session, refreshProfile } = useAuth();
  const navigation = useNavigation();

  const handleGenderSelect = async (selectedGender) => {
    setGender(selectedGender);
    setShowDropdown(false);

    // Save gender to Supabase immediately when selected
    if (session?.user?.id) {
      try {
        const { error } = await supabase
          .from("profiles")
          .update({ Sex: selectedGender })
          .eq("id", session.user.id);

        if (error) {
          console.error("Error updating gender:", error);
          Alert.alert("Error", "Failed to save gender selection");
        } else {
          console.log("Gender saved successfully");
          await refreshProfile(); // Refresh the profile data
        }
      } catch (error) {
        console.error("Error saving gender:", error);
        Alert.alert("Error", "Failed to save gender selection");
      }
    }
  };

  const handleNext = async () => {
    if (!gender) {
      Alert.alert("Please select your gender");
      return;
    }

    setLoading(true);

    try {
      // Save all profile data to Supabase
      const { error } = await supabase
        .from("profiles")
        .update({
          Sex: gender,
          // date_of_birth: dateOfBirth,
          // weight: weight ? parseFloat(weight) : null,
          // height: height ? parseFloat(height) : null,
        })
        .eq("id", session.user.id);

      if (error) {
        console.error("Error updating profile:", error);
        Alert.alert("Error", "Failed to save profile information");
      } else {
        console.log("Profile updated successfully");
        await refreshProfile(); // Refresh the profile data
        navigation.navigate("Goal");
      }
    } catch (error) {
      console.error("Error saving profile data:", error);
      Alert.alert("Error", "Failed to save profile information");
    } finally {
      setLoading(false);
    }
  };

  const colors = ["#FFE5F1", "#7226FF"];

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.bacground, width: "100%" }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            paddingBottom: 10,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: "100%", height: 310, alignItems: "center" }}>
            <Image
              source={AppImages.Lad}
              style={{ width: "90%", height: "80%" }}
              resizeMode="stretch"
            />
          </View>

          <View style={{ marginTop: "3%", width: "80%", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Let's complete your profile
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Colors.textgray,
                textAlign: "center",
              }}
            >
              It will help us to know more about you!
            </Text>
          </View>

          <View
            style={{ width: "100%", alignItems: "center", marginTop: "10%" }}
          >
            <TouchableOpacity
              onPress={() => setShowDropdown(!showDropdown)}
              style={{
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 8,
                width: "90%",
                paddingVertical: 13,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Colors.textinputcolor,
              }}
            >
              <View style={{ marginLeft: "3%" }}>
                <UserIcon />
              </View>

              <Text
                style={{
                  color: gender ? "#000" : "#888",
                  paddingLeft: "3%",
                  flex: 1,
                }}
              >
                {gender || "Choose Gender"}
              </Text>

              <View style={{ marginRight: "3%" }}>
                {showDropdown ? (
                  <AntDesign name="up" size={20} color={Colors.textgray} />
                ) : (
                  <Ionicons
                    name="chevron-down-outline"
                    size={20}
                    color={Colors.textgray}
                  />
                )}
              </View>
            </TouchableOpacity>

            {showDropdown && (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#ddd",
                  borderRadius: 8,
                  width: "90%",
                  paddingVertical: 10,
                  position: "absolute",
                  top: 50,
                  zIndex: 10,
                  marginTop: 5,
                  backgroundColor: Colors.bacground,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 3,
                }}
              >
                {genders.map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={{
                      padding: 15,
                      borderBottomWidth: 1,
                      borderBottomColor: "#eee",
                    }}
                    onPress={() => handleGenderSelect(item)}
                  >
                    <Text style={{ fontSize: 15, color: Colors.textgray }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View style={{ width: "90%" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 10,
                marginVertical: 10,
                backgroundColor: Colors.textinputcolor,
                borderWidth: 1,
                borderColor: "#ddd",
              }}
            >
              <View style={{ marginLeft: "3%" }}>
                <MessageSvg />
              </View>
              <TextInput
                value={dateOfBirth}
                placeholder="Date of Birth (YYYY-MM-DD)"
                onChangeText={setDateOfBirth}
                style={{ borderRadius: 8, padding: 13, fontSize: 16, flex: 1 }}
              />
            </View>

            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor: Colors.textinputcolor,
                  borderWidth: 1,
                  borderColor: "#ddd",
                  flex: 1,
                  marginRight: 10,
                  height: 50,
                }}
              >
                <View style={{ marginLeft: "3%" }}>
                  <MessageSvg />
                </View>
                <TextInput
                  value={weight}
                  placeholder="Your Weight"
                  onChangeText={setWeight}
                  keyboardType="numeric"
                  style={{
                    borderRadius: 8,
                    padding: 13,
                    fontSize: 16,
                    flex: 1,
                  }}
                />
              </View>

              <View style={{ width: "20%", height: 50 }}>
                <LinearGradient
                  colors={colors}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    padding: 15,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      fontSize: 14,
                      letterSpacing: 1,
                    }}
                  >
                    KG
                  </Text>
                </LinearGradient>
              </View>
            </View>

            {/* Height Input Field */}
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor: Colors.textinputcolor,
                  borderWidth: 1,
                  borderColor: "#ddd",
                  flex: 1,
                  marginRight: 10,
                  height: 50,
                }}
              >
                <View style={{ marginLeft: "3%" }}>
                  <MessageSvg />
                </View>
                <TextInput
                  value={height}
                  placeholder="Your Height"
                  onChangeText={setHeight}
                  keyboardType="numeric"
                  style={{
                    borderRadius: 8,
                    padding: 13,
                    fontSize: 16,
                    flex: 1,
                  }}
                />
              </View>

              <View style={{ width: "20%", height: 50 }}>
                <LinearGradient
                  colors={colors}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    padding: 15,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      fontSize: 14,
                      letterSpacing: 1,
                    }}
                  >
                    CM
                  </Text>
                </LinearGradient>
              </View>
            </View>

            <View style={{ width: "100%", alignItems: "center" }}>
              <GradientButton
                title={loading ? "Saving..." : "Next"}
                onPress={handleNext}
                disabled={loading}
              />
            </View>
          </View>

          <StatusBar style="auto" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
