import RideLayout from "@/components/RideLayout";
import { View, Text } from "react-native";

const findRide = () => {
  return (
    <RideLayout>
      <View>
        <Text className={"text-2xl text-blue-600 mx-auto"}>
          From dar to mbeya
        </Text>
      </View>
    </RideLayout>
  );
};

export default findRide;
