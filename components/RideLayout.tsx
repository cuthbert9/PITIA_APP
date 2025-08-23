import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useRef } from "react";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

const RideLayout = ({ children }) => {
  const lat: number = -6.807706;
  const lng: number = 39.258375;

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1">
        <ImageBackground
          source={{
            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=800&center=lonlat:${lng},${lat}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
          }}
          className="flex-1 w-full h-full "
        >
          <View className={"flex flex-row "}>
            <TouchableOpacity
              className={
                "bg-gray-50 p-1 rounded-2xl mx-2 my-2 font-extrabold text-black"
              }
            >
              <MaterialIcons name={"arrow-back"} size={28} />
            </TouchableOpacity>
            <Text className={"text-2xl font-extrabold text-black mx-2 my-2"}>
              Book Ride
            </Text>
          </View>
          {children}
        </ImageBackground>
      </View>
      {/*  Render the bottom sheet View To be */}
    </GestureHandlerRootView>
  );
};

export default RideLayout;
