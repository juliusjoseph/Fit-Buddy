import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import Colors from "../../component/colors";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppImages from "../../component/images";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../lib/supabase";

const Home = () => {
  const navigation = useNavigation();

  const workoutPlans = [
    {
      id: "1",
      title: "Upper Body",
      duration: "10-29 mins/day",
      period: "30 days Plan",
      image: AppImages.Man,
    },
    {
      id: "2",
      title: "Lower Body",
      duration: "15-35 mins/day",
      period: "28 days Plan",
      image: AppImages.Man,
    },
    {
      id: "3",
      title: "Cardio",
      duration: "20-40 mins/day",
      period: "21 days Plan",
      image: AppImages.Man,
    },
    {
      id: "4",
      title: "Yoga",
      duration: "15-30 mins/day",
      period: "30 days Plan",
      image: AppImages.Man,
    },
  ];

  const renderWorkoutPlan = ({ item }) => (
    <View
      style={{
        marginRight: 15,
        borderRadius: 15,
        width: 280,
        padding: 2,
        height: 215,
        marginTop: "5%",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 150,
          borderRadius: 15,
        }}
      >
        <Image
          source={
            typeof item.image === "string" ? { uri: item.image } : item.image
          }
          resizeMode="cover"
          style={{ width: "100%", height: 150, borderRadius: 15 }}
        />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "2%",
          padding: 2,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
        <Text style={{ color: Colors.primary, fontSize: 13 }}>
          {item.duration}
        </Text>
      </View>
      <Text style={{ color: Colors.textgray, paddingLeft: 4 }}>
        {item.period}
      </Text>
    </View>
  );

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Colors.bacground,
        marginBottom: "10%",
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Section */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          paddingTop: 50,
        }}
      >
        <View>
          <Text style={{ fontSize: 15, color: Colors.textgray }}>
            Welcome Back,
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>John Doe</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.textinputcolor,
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="bell-o" size={18} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View
        style={{
          backgroundColor: Colors.searchbar,
          marginHorizontal: 20,

          borderRadius: 10,
          padding: 3,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: Colors.normalgray,
        }}
      >
        <View style={{ marginLeft: "2%" }}>
          <EvilIcons name="search" size={24} color={Colors.normalgray} />
        </View>
        <TextInput
          placeholder="Search"
          style={{ color: Colors.textgray, height: 38, width: "85%" }}
        />
      </View>

      {/* Recent Workouts Section */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        Recent
      </Text>
      <View
        style={{
          backgroundColor: Colors.textinputcolor,
          margin: 20,
          borderRadius: 15,
          padding: 20,
          alignItems: "center",
          justifyContent: "center",
          height: 150,
        }}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3094/3094836.png",
          }}
          style={{ width: 40, height: 40, tintColor: "#ccc", marginBottom: 10 }}
        />
        <Text style={{ color: "#999" }}>No recent workout</Text>
      </View>

      {/* Today Target Section */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: Colors.textinputcolor,
          height: "5%",
          width: "90%",
          marginLeft: "5%",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            padding: 7,
          }}
        >
          Today Target
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Workoutdetails")}
          style={{
            backgroundColor: "#6a5acd",
            height: 30,
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            marginRight: 7,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 14, letterSpacing: 1 }}>
            Check
          </Text>
        </TouchableOpacity>
      </View>

      {/* Workout Plan Section */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
          Workout Plan
        </Text>
        <TouchableOpacity>
          <Text style={{ color: Colors.primary, fontWeight: "bold" }}>
            See more
          </Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Scrollable Workout Plans */}
      <FlatList
        data={workoutPlans}
        renderItem={renderWorkoutPlan}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 10 }}
      />

      {/* Workout Progress Section */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "#333" }}>
          Workout Progress
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            height: 30,
            width: "21%",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: 20,
            flexDirection: "row",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: Colors.white, fontSize: 12 }}>Weekly</Text>
          <View style={{ paddingTop: 2 }}>
            <AntDesign name="down" size={13} color={Colors.white} />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          margin: 20,
          borderRadius: 15,
          padding: 20,
          alignItems: "center",
          justifyContent: "center",
          height: 200,
        }}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/7486/7486746.png",
          }}
          style={{ width: 50, height: 50, tintColor: "#ccc", marginBottom: 10 }}
        />
        <Text style={{ color: "#999" }}>No recorded progress yet</Text>
      </View>

      {/* Bottom Padding */}
      <View style={{ height: 70 }} />
    </ScrollView>
  );
};

export default Home;
