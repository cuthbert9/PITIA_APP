import RideLayout from "@/components/RideLayout";
import { View, Text } from "react-native";

const findRide = () => {
  return (
    <RideLayout title={"Ride"}>
      <View>
        <Text className={"text-2xl text-blue-600 mx-auto"}>
          Find PITIA Mock Text
        </Text>
      </View>
    </RideLayout>
  );
};

export default findRide;
