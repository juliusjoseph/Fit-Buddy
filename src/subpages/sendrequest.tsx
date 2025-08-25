import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import DayButton from "../../component/daybutton";
import GradientButton from "../../component/button";
import Colors from "../../component/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppImages from "../../component/images";
import Heart from "../../component/svgs/heart";
import Dots from "../../component/svgs/dots";
import { useNavigation } from "@react-navigation/native";
import Return from "../../component/returnbutton";
import Streak from "../../component/streak";
import Toast from "react-native-toast-message";

const Sendrequest = () => {
  const navigation = useNavigation();
  const showToast = () => {
    Toast.show({
      type: "success", // 'success', 'error', or 'info'
      text1: "Successful!",
      text2: "your request has been sent 👋",
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bacground }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            height: 350,
            marginTop: "5%",
          }}
        >
          <Image
            source={AppImages.Budding}
            style={{
              alignItems: "center",
              width: "100%",
              height: 350,
            }}
            resizeMode="stretch"
          />
        </View>
        <Return />
        {/* Header Section */}
        <View
          style={{
            borderTopLeftRadius: 25,
            backgroundColor: Colors.bacground,
            marginTop: "-9%",
            width: "100%",
            borderTopRightRadius: 25,
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3%",
            }}
          >
            <View
              style={{
                backgroundColor: Colors.normalgray,
                width: 55,
                height: 7,
                borderRadius: 10,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ padding: 15 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Jason Mangreen
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#666",
                }}
              >
                07:00 AM | Upperbody
              </Text>
            </View>
          </View>

          <View style={{ padding: 15 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Jason’s Motivation
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "#666",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eget blandit neque, ut imperdiet urna. Curabitur ut iaculis lacus.
              Lorem ipsum blandit neque.
            </Text>
          </View>
        </View>

        {/* Week 1 */}
        <View
          style={{
            marginBottom: 24,
            width: "90%",
            marginLeft: "5%",
          }}
        >
          <View style={{ justifyContent: "space-between" }}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", marginBottom: 12 }}
            >
              Last Week’s Streak
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "2%",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((day, index, array) => (
              <Streak
                key={day}
                day={day}
                completed={day < 8}
                showArrow={index < array.length - 1} // This will automatically handle the arrows
              />
            ))}
          </View>
          <View
            style={{
              width: "100%",
              marginLeft: "5%",
              marginBottom: "5%",
              marginTop: "20%",
            }}
          >
            <GradientButton title="Send Buddy Request" onPress={showToast} />
          </View>
        </View>
        <Toast />
      </ScrollView>
    </SafeAreaView>
  );
};

const WeekSection = ({ week }) => {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text
        style={{
          fontSize: 18,
          marginBottom: 12,
          color: Colors.normalgray,
        }}
      >
        Week {week}
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginHorizontal: 5,
          marginBottom: 16,
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <View
            key={day}
            style={{ marginBottom: 12, width: "23%", alignItems: "center" }}
          >
            <DayButton day={day} completed={day < 0} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Sendrequest;
