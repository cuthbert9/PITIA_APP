import RideLayout from "@/components/RideLayout";
import { View, Text } from "react-native";

const confirmRide = () => {
  return (
    <RideLayout title={"Choose Rider"}>
      <View>
        <Text className={"text-2xl font-bold  text-center text-green-700"}>
          Confirm Send Mock Text
        </Text>
      </View>
    </RideLayout>
  );
};

export default confirmRide;
