// import React from "react";
// import { View, TextInput, TouchableOpacity, Text } from "react-native";
// import Colors from "./colors";
// import AntDesign from "@expo/vector-icons/AntDesign";

// const DayButton = ({ day, completed = false }) => {
//   return (
//     <View style={{ flexDirection: "row" }}>
//       <View
//         style={{
//           width: 35,
//           height: 35,
//           borderRadius: 30,
//           backgroundColor: completed ? Colors.primary : Colors.textinputcolor,
//           justifyContent: "center",
//           alignItems: "center",
//           marginHorizontal: 5, // Add horizontal spacing
//           marginVertical: 5, // Add vertical spacing
//         }}
//       >
//         <Text
//           style={{
//             color: completed ? Colors.white : Colors.primary,
//             fontWeight: completed ? "bold" : "normal",
//           }}
//         >
//           {day}
//         </Text>
//       </View>
//       <AntDesign name="right" size={24} color="black" />
//     </View>
//   );
// };
// export default DayButton;

import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Colors from "./colors";
import AntDesign from "@expo/vector-icons/AntDesign";

const DayButton = ({ day, completed = false, showArrow = true }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          backgroundColor: completed ? Colors.primary : Colors.textinputcolor,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 4,
          marginVertical: 5,
        }}
      >
        <Text
          style={{
            color: completed ? Colors.white : Colors.primary,
            fontWeight: completed ? "bold" : "normal",
          }}
        >
          {day}
        </Text>
      </View>

      {showArrow && (
        <AntDesign
          name="right"
          size={10}
          color={Colors.textgray}
          style={{ marginHorizontal: 5 }}
        />
      )}
    </View>
  );
};

export default DayButton;
