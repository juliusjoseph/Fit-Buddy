import React, { useRef, useState } from "react";
import { FlatList, Image, Text, View, useWindowDimensions } from "react-native";
import { Screen, Button } from "../components/ui";
import { useTheme } from "../theme";
import { useStore } from "../store";
import AppImages from "../images";

const PAGES = [
  { image: AppImages.welcome, title: "Fit-Buddy", text: "Everybody can train. Bodyweight plans you can follow anywhere, with no gear." },
  { image: AppImages.intro, title: "Track your goal", text: "Not sure what your goal is yet? Pick one, and we keep track of how you are doing." },
  { image: AppImages.introtwo, title: "Keep burning", text: "A timer leads every session, so all you do is keep moving. It hurts for a while, the results stay." },
  { image: AppImages.introthree, title: "Eat well", text: "A healthy lifestyle is built on small habits. Eating well can be fun." },
];

export default function Onboarding() {
  const { c } = useTheme();
  const { finishOnboarding } = useStore();
  const { width, height } = useWindowDimensions();
  const ref = useRef<FlatList>(null);
  const [i, setI] = useState(0);
  const last = i === PAGES.length - 1;

  return (
    <Screen pad={false}>
      <View style={{ alignItems: "flex-end", paddingHorizontal: 20, height: 48 }}>
        {!last && <Button variant="ghost" title="Skip" onPress={finishOnboarding} />}
      </View>
      <FlatList
        ref={ref} data={PAGES} horizontal pagingEnabled showsHorizontalScrollIndicator={false}
        keyExtractor={(p) => p.title}
        onMomentumScrollEnd={(e) => setI(Math.round(e.nativeEvent.contentOffset.x / width))}
        renderItem={({ item }) => (
          <View style={{ width, alignItems: "center" }}>
            <Image source={item.image} resizeMode="contain" style={{ width, height: height * 0.42 }} />
            <View style={{ paddingHorizontal: 32, marginTop: 24 }}>
              <Text style={{ color: c.text, fontSize: 28, fontWeight: "800", textAlign: "center" }}>{item.title}</Text>
              <Text style={{ color: c.sub, fontSize: 16, lineHeight: 24, textAlign: "center", marginTop: 12 }}>{item.text}</Text>
            </View>
          </View>
        )}
      />
      <View style={{ paddingHorizontal: 20, paddingBottom: 12 }}>
        <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 20 }}>
          {PAGES.map((_, n) => (
            <View key={n} style={{ height: 8, width: n === i ? 24 : 8, borderRadius: 4, marginHorizontal: 4, backgroundColor: n === i ? c.primary : c.line }} />
          ))}
        </View>
        <Button title={last ? "Get started" : "Next"} onPress={() => (last ? finishOnboarding() : ref.current?.scrollToIndex({ index: i + 1 }))} />
      </View>
    </Screen>
  );
}
