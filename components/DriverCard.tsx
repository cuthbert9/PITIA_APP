import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { formatTime } from "@/lib/utils";
import { DriverCardProps } from "@/types/type";
import { images } from "@/constants/data";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const DriverCard = () => {
  return (
    <TouchableOpacity
      className={`flex flex-row items-center justify-between py-5 px-3 rounded-xl`}
    >
      <Image
        source={images.driver}
        className="w-14 h-14 rounded-full"
        style={{ width: "50px ", height: "50px" }}
      />

      <View className="flex-1 flex flex-col items-start justify-center mx-3">
        <View className="flex flex-row items-center justify-start mb-1">
          <Text className="text-lg font-JakartaRegular">Careal.Dev</Text>

          <View className="flex flex-row items-center space-x-1 ml-2">
            <Ionicons
              name={"star"}
              size={14}
              color={"gold"}
              className="w-3.5 h-3.5"
            />
            <Text className="text-sm font-JakartaRegular">4</Text>
          </View>
        </View>

        <View className="flex flex-row items-center justify-start">
          <View className="flex flex-row items-center">
            <Ionicons
              name={"cash-outline"}
              size={14}
              color={"blue"}
              className="w-3.5 h-3.5"
            />
            <Text className="text-sm font-JakartaRegular ml-1">100$</Text>
          </View>

          <Text className="text-sm font-JakartaRegular text-general-800 mx-1">
            |
          </Text>

          <Text className="text-sm font-JakartaRegular text-general-800">
            {formatTime(Date.now())}
          </Text>

          <Text className="text-sm font-JakartaRegular text-general-800 mx-1">
            |
          </Text>

          <Text className="text-sm font-JakartaRegular text-general-800">
            10 m3 space
          </Text>
        </View>
      </View>

      {/*<Image*/}
      {/*  source={{ uri: item.car_image_url }}*/}
      {/*  className="h-14 w-14"*/}
      {/*  resizeMode="contain"*/}
      {/*/>*/}
    </TouchableOpacity>
  );
};

export default DriverCard;
