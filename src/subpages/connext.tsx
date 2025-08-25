import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
  FlatList,
} from "react-native";
import Colors from "../../component/colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Dots from "../../component/svgs/dots";
import AppImages from "../../component/images";

const Connect = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Mock data for buddy list
  const buddyData = [
    {
      id: "1",
      name: "Jason Mangeren",
      time: "07:30 AM",
      workoutType: "Upperbody",
      pic: AppImages.Budone,
    },
    {
      id: "2",
      name: "Sarah Johnson",
      time: "08:00 AM",
      workoutType: "Cardio",
      pic: AppImages.Budone,
    },
    {
      id: "3",
      name: "Mike Peterson",
      time: "07:45 AM",
      workoutType: "Lowerbody",
      pic: AppImages.Budone,
    },
    {
      id: "4",
      name: "Emily Williams",
      time: "09:15 AM",
      workoutType: "Yoga",
      pic: AppImages.Budone,
    },
    {
      id: "5",
      name: "David Chen",
      time: "08:30 AM",
      workoutType: "Upperbody",
      pic: AppImages.Budone,
    },
  ];

  const renderBuddyItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Sendrequest")}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 10,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      }}
    >
      <View
        style={{
          marginRight: 12,
        }}
      >
        <Image
          source={item.pic}
          style={{
            width: 60,
            height: 60,
            borderRadius: 5,
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#1A1A1A",
            marginBottom: 4,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#666666",
          }}
        >
          {item.time} | {item.workoutType}
        </Text>
      </View>
      <View
        style={{
          height: 25,
          width: 25,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: Colors.textinputgray,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign name="right" size={14} color={Colors.textinputgray} />
      </View>
    </TouchableOpacity>
  );

  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F8F9FA",
      }}
    >
      <StatusBar barStyle="dark-content" />

      {/* Main Content */}
      <ScrollView
        style={{
          flex: 1,
          padding: 16,
        }}
      >
        {/* Section Title */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "12%",
            alignItems: "center",
            marginBottom: "10%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 40,
              height: 40,
              backgroundColor: Colors.textinputcolor,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="left" size={15} color="black" />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Buddy Pool</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: Colors.textinputcolor,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Dots />
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: "10%" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Buddies that match your need
          </Text>
        </View>

        {/* Buddy List */}
        <FlatList
          data={buddyData}
          renderItem={renderBuddyItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Connect;
