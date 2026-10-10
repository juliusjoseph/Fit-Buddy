// import React from "react";
// import { View, TextInput, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import Colors from "./colors";

// interface CustomInputProps {
//   placeholder?: string;
//   value?: string;
//   onChangeText?: (text: string) => void;
//   leftIcon?: string; // name of Ionicon icon
//   rightIcon?: string; // name of Ionicon icon
//   onRightIconPress?: () => void;
//   onLeftIconPress?: () => void;
//   secureTextEntry?: boolean;
// }

// const CustomTextInput: React.FC<CustomInputProps> = ({
//   placeholder,
//   value,
//   onChangeText,
//   leftIcon,
//   rightIcon,
//   onRightIconPress,
//   onLeftIconPress,
//   secureTextEntry = false,
// }) => {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         alignItems: "center",
//         borderRadius: 10,
//         paddingHorizontal: 20,
//         marginVertical: 9,
//         backgroundColor:Colors.textinputcolor,
//       }}
//     >
//       {leftIcon && (
//         <TouchableOpacity onPress={onLeftIconPress} style={{ paddingHorizontal: 5 }}>
//           <Ionicons name={leftIcon as any} size={22} color="#555" />
//         </TouchableOpacity>
//       )}

//       <TextInput
//         style={{
//           flex: 1,
//           fontSize: 14,
//           paddingVertical: 10,
//           color: "#000",
//         }}
//         placeholder={placeholder}
//         value={value}
//         onChangeText={onChangeText}
//         secureTextEntry={secureTextEntry}
//         placeholderTextColor={Colors.textinputgray}
//       />

//       {rightIcon && (
//         <TouchableOpacity onPress={onRightIconPress} style={{ paddingHorizontal: 5 }}>
//           <Ionicons name={rightIcon as any} size={22} color="#555" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// export default CustomTextInput;

import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Colors from "./colors";

interface CustomInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  leftIcon?: React.ReactNode; // SVG or any component
  rightIcon?: React.ReactNode; // SVG or any component
  onRightIconPress?: () => void;
  onLeftIconPress?: () => void;
  secureTextEntry?: boolean;
}

const CustomTextInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  onLeftIconPress,
  secureTextEntry = false,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 7,
        backgroundColor: Colors.textinputcolor,
        height: 48,
      }}
    >
      {leftIcon && <View style={{}}>{leftIcon}</View>}

      <TextInput
        style={{
          flex: 1,
          fontSize: 14,
          paddingVertical: 10,
          color: "#000",
          marginLeft: 5,
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={Colors.textinputgray}
      />

      {rightIcon && (
        <TouchableOpacity
          onPress={onRightIconPress}
          style={{ paddingHorizontal: 5 }}
        >
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
