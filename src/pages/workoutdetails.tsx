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

const Workoutdetails = (Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bacground }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            height: 320,
            flex: 1,
            marginTop: "8%",
          }}
        >
          <ImageBackground
            source={AppImages.BG}
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                padding: 10,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="left" size={15} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Dots />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "90%",
                height: "75%",
                marginTop: "12%",
              }}
            >
              <Image
                source={AppImages.Circle}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
              <Image
                source={AppImages.Skip}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  marginTop: "-15%",
                }}
              />
            </View>
          </ImageBackground>
        </View>
        {/* Header Section */}
        <View
          style={{
            marginBottom: 24,
            borderTopLeftRadius: 25,
            backgroundColor: Colors.white,
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
                Massive Upper Body Workout
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#666",
                }}
              >
                28 Days
              </Text>
            </View>
            <View style={{ padding: 15 }}>
              <Heart />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",

              padding: 15,
            }}
          >
            <Text style={{ fontSize: 14 }}>1/28 Days Finished</Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>11%</Text>
          </View>

          <View
            style={{
              height: 8,
              backgroundColor: "#e0e0e0",
              borderRadius: 4,
              overflow: "hidden",
              width: "90%",
              marginLeft: "5%",
            }}
          >
            <View
              style={{
                width: "11%",
                height: "100%",
                backgroundColor: "#4a90e2",
              }}
            />
          </View>
        </View>

        {/* Week 1 */}
        <View style={{ marginBottom: 24, width: "90%", marginLeft: "5%" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", marginBottom: 12 }}
            >
              Week 1
            </Text>
            <Text style={{ fontSize: 14, color: "#666", marginBottom: 12 }}>
              1/7
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginHorizontal: 5,
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <View
                key={day}
                style={{ marginBottom: 12, width: "23%", alignItems: "center" }}
              >
                <DayButton day={day} completed={day < 2} />
              </View>
            ))}
          </View>
          <View style={{ width: "100%", marginLeft: "5%", marginBottom: "5%" }}>
            <GradientButton
              title="continue"
              onPress={() => Props.navigation.navigate("excercise")}
            />
          </View>
          {/* Week 2 */}
          <WeekSection week={2} />

          {/* Week 3 */}
          <WeekSection week={3} />

          {/* Week 4 */}
          <WeekSection week={4} />
        </View>
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

export default Workoutdetails;
