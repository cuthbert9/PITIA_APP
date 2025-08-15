import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import truck from "../../assets/images/pitia-truck1.jpg";

import { router } from "expo-router";
import { useState, useRef } from "react";
import data from "@/constants/data";
import CustomButton from "@/components/customButton";

export const Home = () => {
  const SwiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === data.swiperData.length - 1;

  return (
    <SafeAreaView className={"bg-white flex-1"}>
      <View className={"flex-row justify-end  mx-6  "}>
        <TouchableOpacity onPress={() => router.replace("/(auth)/sign-In")}>
          <Text
            className={
              "flex mx-6 my-8 text-xl justify-end font-bold font-[cursive]"
            }
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      <Swiper
        ref={SwiperRef}
        loop={false}
        onIndexChanged={(index) => setActiveIndex(index)}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
      >
        {data.swiperData.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-3">
            <Image
              source={truck}
              className="w-full h-[400px] rounded-2xl mx-2"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={!isLastSlide ? "Next " : "Get started"}
        onpress={
          isLastSlide
            ? router.replace("/(auth)/sign-In)")
            : SwiperRef.current?.scrollBy(1)
        }
      />
    </SafeAreaView>
  );
};

export default Home;
