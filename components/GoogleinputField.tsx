import { View, TextInput } from "react-native";

import { GoogleInputProps } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 rounded-xl `}
    >
      <View className="flex flex-row items-center border w-10/12 h-12 border-gray-300 rounded-2xl  px-2">
        <Ionicons name="search" size={24} color="black" />
        <TextInput
          placeholder="Where you wanna to send  ?"
          className="flex-1 ml-2 text-gray-500"
        />
      </View>
    </View>
  );
};

export default GoogleTextInput;
