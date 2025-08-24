import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Modal,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import DriverCard from "@/components/DriverCard";

const RideLayout = ({ title, children }) => {
  const lat: number = -6.807706;
  const lng: number = 39.258375;

  const bottomSheetRef = useRef<BottomSheet>(null);

  const [modalVisible, setModalVisible] = useState(true);

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
              {title}
            </Text>
          </View>
          {children}
        </ImageBackground>
      </View>

      {/*Modal instead of BottomSheet*/}

      <Modal visible={modalVisible} transparent animationType="slide">
        {/* Full screen overlay */}
        <View className="flex-1 justify-end bg-black/30">
          {/* Bottom sheet modal */}
          <View className="bg-white p-4 rounded-t-xl shadow-lg h-2/4">
            {/* From */}

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text
                className={
                  "text-xl flex justify-end m-1 mx-3 text-red-700 font-extrabold"
                }
              >
                X
              </Text>
            </TouchableOpacity>

            {title === "Ride" ? (
              <View>
                <Text className={"text-xl mx-3 my-1"}>From</Text>
                <View className="flex-row items-center border border-gray-200 rounded-lg px-3 py-2 mb-4">
                  <Ionicons name="location-outline" size={20} color="gray" />
                  <TextInput
                    placeholder="From location"
                    className="flex-1 ml-2 text-gray-700"
                  />
                  <TouchableOpacity>
                    <Ionicons name="navigate-outline" size={20} color="gray" />
                  </TouchableOpacity>
                </View>

                {/* To */}
                <Text className={"text-xl mx-3 my-1"}>To</Text>
                <View className="flex-row items-center border border-gray-200 rounded-lg px-3 py-2 mb-4">
                  <Ionicons name="location-outline" size={20} color="gray" />
                  <TextInput
                    placeholder="To location"
                    className="flex-1 ml-2 text-gray-700"
                  />
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name="map-outline"
                      size={20}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <ScrollView>
                <Text className={"text-xl mx-3 my-1 text-center"}>
                  Available Drivers
                </Text>
                <View>
                  <FlatList
                    data={[1, 2, 3, 4, 4]}
                    renderItem={({ item, index }) => (
                      <DriverCard item={item} key={index} />
                    )}
                  />
                </View>
              </ScrollView>
            )}

            {/* Button */}
            <TouchableOpacity className="bg-blue-500 py-3 rounded-lg items-center">
              <Text className="text-white font-semibold text-lg">Find Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/*  Render the bottom sheet View To be */}

      <BottomSheet ref={bottomSheetRef} snapPoints={["40%", "80%"]} index={-1}>
        <Button
          title={"openSheet"}
          onPress={() => bottomSheetRef.current?.expand()}
        />
        <Text className={"text-2xl"}>Showing the Bottom sheet Content</Text>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
