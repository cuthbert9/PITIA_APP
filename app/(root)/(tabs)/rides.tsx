import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import RideCard from "@/components/RideCard";

export const Rides = () => {
  return (
    <SafeAreaView className={"bg-white flex-1"}>
      <ScrollView>
        <View>
          <Text className={"text-2xl m-2 text-center"}>Your Sends History</Text>
        </View>

        <View>
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({ item }) => <RideCard key={item} />}
            keyExtractor={(item) => item.toString()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rides;
