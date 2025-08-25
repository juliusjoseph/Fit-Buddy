import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import AppImages from "../../component/images";
import Colors from "../../component/colors";
import GradientButton from "../../component/button";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.8; // Width of each item
const ITEM_MARGIN = -3; // Reduced margin between items
const ITEM_TOTAL_WIDTH = ITEM_WIDTH + ITEM_MARGIN * -7; // Total width including margins

// Create animated version of FlatList
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const DATA = [
  { id: "1", coverImage: AppImages.Cellone },
  { id: "2", coverImage: AppImages.Celltwo },
  { id: "3", coverImage: AppImages.Cellthree },
];

export default function Goal() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({ item, index }) => {
    const inputRange = [
      (index - 1) * ITEM_TOTAL_WIDTH,
      index * ITEM_TOTAL_WIDTH,
      (index + 1) * ITEM_TOTAL_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9], // Slightly reduced scale difference
      extrapolate: "clamp",
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 1, 0.7], // Increased opacity for adjacent items
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={[
          styles.itemContainer,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={item.coverImage} style={styles.image} />
        </View>
      </Animated.View>
    );
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>What is your goal?</Text>
        <Text style={styles.subtitle}>
          It will help us to choose a best program for you
        </Text>
      </View>

      <View style={styles.carouselContainer}>
        <AnimatedFlatList
          ref={flatListRef}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_TOTAL_WIDTH} // Use the total width including margins
          snapToAlignment="center"
          decelerationRate="fast"
          contentContainerStyle={styles.flatListContent}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          scrollEventThrottle={16}
        />
      </View>

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Confirm"
          onPress={() => navigation.navigate("Login")}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bacground,
    alignItems: "center",
    paddingTop: 15,
  },
  header: {
    width: "70%",
    padding: 5,
    marginBottom: 20,
    marginTop: "5%",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 15,
    letterSpacing: 1,
    color: "#1E293B",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.textgray,
    marginTop: 8,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  flatListContent: {
    alignItems: "center",
    paddingHorizontal: (width - ITEM_WIDTH) / 2, // Center the first and last items
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: width * 1.5,
    marginHorizontal: ITEM_MARGIN, // Reduced margin
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonContainer: {
    width: "90%",
    marginBottom: 50,
    marginLeft: "10%",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
