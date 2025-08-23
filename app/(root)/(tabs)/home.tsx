import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Redirect, router } from "expo-router";
import GoogleinputField from "@/components/GoogleinputField";
import { Ionicons } from "@expo/vector-icons";
import RideCard from "@/components/RideCard";
import { useState } from "react";
import Map from "@/components/Map";

const Home = () => {
  // return <Redirect href={"/(auth)/welcome"} />;

  const [isloading, setIsLoading] = useState(false);
  const lat: number = -6.807706;
  const lng: number = 39.258375;

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
          {/*Mock location  */}

          <TouchableOpacity
            className={"mx-auto my-2 bg-gray-50 border-gray p-1"}
            onPress={() => router.push(`/(root)/find-ride-ride`)}
          >
            <View>
              <Text className={"text-lg"}>Dar-es-salaam, Tanzania</Text>
            </View>
          </TouchableOpacity>

          {/*Mock location  End  */}

          <Text className={"text-2xl mx-8 my-4"}>Your Current Location</Text>

          <View className={"w-[345px] h-[300px]  mx-1 rounded-2xl p-3"}>
            <Image
              source={{
                uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${lng},${lat}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
              }}
              style={{ width: 345, height: 300 }}
              className="rounded-md"
            />

            {/*<Map />*/}
          </View>

          <Text className={"text-2xl mx-8 font-JakartaMedium my-4"}>
            Your Recent Sends
          </Text>

          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({ item }) => <RideCard key={item} />}
            keyExtractor={(item) => item.toString()}
          />

          {/*{[1, 2].map((item) => (*/}
          {/*  <RideCard key={item} />*/}
          {/*))}*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
