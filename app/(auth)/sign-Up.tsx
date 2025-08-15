import { View, Image, ScrollView, Text } from "react-native";
import truck from "../../assets/images/pitia-truck1.jpg";
import InputField from "@/components/InputField";
import CustomButton from "@/components/customButton";
import { useState } from "react";
import { Link } from "expo-router";

export const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const Oauth = () => (
    <View className={"flex-row justify-center items-center mx-4  py-4"}>
      <View className={"border w-5/12 bg-gray-300 "} />
      <Text className={"text-xl text-center text-black mx-2"}>or</Text>
      <View className={"border w-5/12 bg-gray-300"} />
    </View>
  );

  const handlesignIn = () => {};

  return (
    <ScrollView>
      <View className={"flex"}>
        <Image source={truck} className={"object-contain rounded-b-lg "} />
        <Text className="text-2xl text-white  absolute bottom-5 left-5">
          Create Account
        </Text>
      </View>
      <View className="p-5 mx-4 ">
        <InputField
          label="Name "
          icon="person"
          placeholder={"Enter  name "}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />

        <InputField
          label="Email"
          icon="mail"
          placeholder={"Enter email"}
          secureTextEntry={true}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
      </View>

      <CustomButton title="Sign Up" onpress={() => handleSignIn()} />

      <Oauth />

      <CustomButton title="Login with Google " Icon={"logo-google"} />

      <Link
        href="/(root)/(tabs)/home"
        className="text-lg text-center text-gray-600 mt-10"
      >
        Already have an account? <Text className="text-blue-500">Log In</Text>
      </Link>
    </ScrollView>
  );
};

export default Home;
