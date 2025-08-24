import RideLayout from "@/components/RideLayout";
import { View, Text } from "react-native";

const bookRide = () => {
  return (
    <RideLayout title={"Book Ride"}>
      <View>
        <Text className={"text-2xl font-bold  text-center text-green-700"}>
          Book Send Mock Text
        </Text>
      </View>
    </RideLayout>
  );
};

export default bookRide();
