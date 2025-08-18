import { Image, Text, View } from "react-native";
import { formatDate, formatTime } from "@/lib/utils";
import { Ride } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/data";

const RideCard = ({ ride }: { ride: Ride }) => {
  const lat: number = -6.807706;
  const lng: number = 39.258375;

  return (
    <View className="bg-[#F4F6F8] rounded-2xl px-3 py-4 mx-3 mb-3 shadow-2xl">
      {/* Top section: route */}
      <View className="flex flex-row items-start">
        <Image
          source={{
            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${lng},${lat}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
          }}
          style={{ width: 70, height: 70 }}
          className="rounded-md"
        />

        <View className="ml-4 flex">
          <View className="flex flex-row items-center mb-1">
            <Ionicons name="play-outline" size={20} color="#505050" />
            <Text className="ml-2 font-JakartaMedium text-gray-700">
              Dar es salaam
            </Text>
          </View>

          <View className="flex flex-row items-center">
            <Ionicons name="location-outline" size={20} color="#505050" />
            <Text className="ml-2 font-JakartaMedium text-gray-700">Mbeya</Text>
          </View>
        </View>
      </View>

      {/* Details Box */}
      <View className="bg-white rounded-xl mt-4 p-4">
        <Row label="Date & Time" value={formatDate(Date.now())} />
        <Row label="Driver" value={"Careal Johnson"} bold />
        <Row label="Truck Capacity" value={"10 m2"} bold />
        <Row
          label="Payment Status"
          value={"Paid"}
          valueColor="text-green-500"
          bold
        />
        <Row
          label="Journey Status"
          value={"Received"}
          valueColor="text-green-500"
          bold
        />
      </View>
    </View>
  );
};

const Row = ({ label, value, bold = false, valueColor = "text-gray-800" }) => (
  <View className="flex flex-row justify-between items-center mb-3">
    <Text className="text-gray-500 font-JakartaMedium">{label}</Text>
    <Text className={`${valueColor} ${bold ? "font-JakartaBold" : ""}`}>
      {value}
    </Text>
  </View>
);

export default RideCard;
