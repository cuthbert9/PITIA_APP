import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import InputField from "@/components/InputField";
import { images } from "@/constants/data";

export const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="px-5"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text className="text-2xl text-center font-JakartaBold my-5">
          My profile
        </Text>

        <View className="flex items-center justify-center my-5">
          <Image
            source={images.driver}
            style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
            className=" rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
          />
        </View>

        <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
          <View className="flex flex-col items-start justify-start w-full">
            <InputField
              label="First name"
              placeholder={"Careal"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              value={"Careal"}
              editable={false}
            />

            <InputField
              label="Last name"
              placeholder={"Johnson"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
              value={"Johnson"}
            />

            <InputField
              label="Email"
              placeholder={"CarelDriver@gmail.com"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
              value={"CarelDriver@gmail.com"}
            />

            <InputField
              label="Phone"
              placeholder={"0620218477"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
              value={"0620218477"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
