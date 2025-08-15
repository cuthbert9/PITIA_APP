import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import { Redirect } from "expo-router";
import GoogleinputField from "@/components/GoogleinputField";
import { Ionicons } from "@expo/vector-icons";
import RideCard from "@/components/RideCard";

export const Home = () => {
  // return <Redirect href={"/(auth)/welcome"} />;

  return (
    <SafeAreaView className={"bg-white flex-1"}>
      <ScrollView>
        <View>
          <View className={"flex-row mx-8 my-8 justify-between"}>
            <View className={"flex-row "}>
              <Text className={"text-3xl "}>Welcome </Text>
              <Text className={"text-3xl font-[cursive] "}>John </Text>
            </View>
            <View className={"bg-gray-300 p-2 rounded-full"}>
              <Ionicons name="exit-outline" size={24} color="black" />
            </View>
          </View>

          <GoogleinputField />
          <Text className={"text-2xl mx-8 my-4"}>Your Current Location</Text>

          <View
            className={
              "w-[370px] h-[300px] bg-gray-300 mx-4 animate-pulse rounded-2xl"
            }
          />

          <Text className={"text-2xl mx-8 font-JakartaMedium my-4"}>
            Your Recent Sends
          </Text>

          {[1, 2].map((item) => (
            <RideCard key={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
