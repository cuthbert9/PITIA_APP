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
  SafeAreaView,
  Pressable,
  Image,
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
import { router } from "expo-router";
import { images } from "@/constants/data";
import customButton from "@/components/customButton";
import CustomButton from "@/components/customButton";

const RideLayout = ({ title, children }) => {
  const lat: number = -6.807706;
  const lng: number = 39.258375;

  const bottomSheetRef = useRef<BottomSheet>(null);

  const [modalVisible, setModalVisible] = useState(true);
  const [successModal, setSuccessModal] = useState(false);

  const openSuccessmodal = () => {
    setModalVisible(!modalVisible);
    setSuccessModal(!successModal);
  };

  // const closeSuccessModal=()=>{
  //   setSuccessModal(false);
  //    setModalVisible(true);
  // }

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1">
        <ImageBackground
          source={{
            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=800&center=lonlat:${lng},${lat}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
          }}
          className="flex-1 w-full h-full "
        >
          <View className={"flex flex-row  mt-4"}>
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

      {/*Success Booking Modal  */}

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={successModal}
          className={"mx-4"}
        >
          {/* Modal Backdrop */}
          <Pressable
            className="flex-1 bg-black/50 justify-center items-center"
            onPress={() => setModalVisible(false)}
          >
            {/* Modal Content */}
            <Pressable
              className="bg-white rounded-xl p-6 mx-4 w-full max-w-sm shadow-lg"
              onPress={() => {}} // Prevents closing when touching modal content
            >
              {/* Your existing view content goes here */}

              <Ionicons
                name={"checkmark-circle"}
                size={60}
                color={"blue"}
                className={"text-center"}
              />

              <Text className="text-gray-600 text-2xl font-bold text-center">
                Booking Placed Successfully
              </Text>

              <CustomButton title={"Track Driver"} />
              <CustomButton title={"Go Home"} />

              <TouchableOpacity
                className="bg-gray-500 p-3 rounded-xl"
                onPress={openSuccessmodal}
              >
                <Text className="text-white text-center font-semibold">
                  Close
                </Text>
              </TouchableOpacity>
            </Pressable>
          </Pressable>
        </Modal>
      </View>

      {/*Modal instead of BottomSheet*/}

      <Modal visible={modalVisible} transparent animationType="slide">
        {/* Full screen overlay */}
        <View className="flex-1 justify-end bg-black/30">
          {/* Bottom sheet modal */}
          <View
            className={`bg-white p-4 rounded-t-xl shadow-lg  ${title === "Book Ride" ? "h-2.5/4" : "h-2/4"} `}
          >
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
            ) : title === "Choose Rider" ? (
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
            ) : title === "Book Ride" ? (
              <View className="bg-white rounded-2xl p-4 shadow">
                {/* Header */}
                <Text className="text-lg font-semibold mb-4 text-center">
                  Send Information
                </Text>

                {/* Profile */}
                <View className="items-center">
                  <Image
                    source={images.driver}
                    style={{ width: "50px", height: "50px" }}
                    className=" rounded-full"
                  />
                  <Text className="mt-2 text-base font-bold">Careal .Dev</Text>
                  <View className="flex-row items-center mt-1">
                    <Ionicons name="star" size={14} color="orange" />
                    <Text className="ml-1 text-sm font-medium">4.9</Text>
                  </View>
                </View>

                {/* Ride Details */}
                <View className="bg-blue-50 rounded-xl p-3 mt-4 space-y-2">
                  <View className="flex-row justify-between">
                    <Text className="text-gray-600">Pitia Price</Text>
                    <Text className="text-green-600 font-semibold">$60</Text>
                  </View>
                  <View className="flex-row justify-between">
                    <Text className="text-gray-600">Pickup time</Text>
                    <Text className="font-semibold">10 Min</Text>
                  </View>
                  <View className="flex-row justify-between">
                    <Text className="text-gray-600">Truck space</Text>
                    <Text className="font-semibold">10 M3</Text>
                  </View>
                </View>

                {/* Addresses */}
                <View className="mt-4 space-y-3">
                  <View className="flex-row items-center">
                    <Ionicons name="location-outline" size={18} color="black" />
                    <Text className="ml-2 text-gray-700">Iringa</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="location-outline" size={18} color="black" />
                    <Text className="ml-2 text-gray-700">Dar es salaam</Text>
                  </View>
                </View>
              </View>
            ) : null}

            {/* Button */}

            {title === "Ride" ? (
              <TouchableOpacity
                onPress={() => router.push("/(root)/confirm-ride")}
                className="bg-blue-500 py-3 rounded-lg items-center"
              >
                <Text className="text-white font-semibold text-lg">
                  Find Now
                </Text>
              </TouchableOpacity>
            ) : title === "Choose Rider" ? (
              <TouchableOpacity
                onPress={() => router.push("/(root)/book-ride")}
                className="bg-blue-500 py-3 rounded-lg items-center"
              >
                <Text className="text-white font-semibold text-lg">
                  Select Truck
                </Text>
              </TouchableOpacity>
            ) : title === "Book Ride" ? (
              <TouchableOpacity
                onPress={openSuccessmodal}
                className="bg-blue-500 py-3 rounded-lg items-center my-3"
              >
                <Text className="text-white font-semibold text-lg">
                  Confirm Send
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </Modal>

      {/*  Render the bottom sheet View To be  */}
      {/*To work after Successfull build with Mac or  Eas*/}

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
