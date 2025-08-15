import { View, Text, SafeAreaView } from "react-native";

export const Home = () => {
  return (
    <SafeAreaView className={"bg-white flex-1"}>
      <View>
        <Text className={"text-2xl text-green-700 text-center"}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
