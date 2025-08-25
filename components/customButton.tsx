import { TouchableOpacity, Text, View } from "react-native";

import { ButtonProps } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";

const CustomButton = ({
  onPress,
  title,
  Icon,
  className,
  ...props
}: ButtonProps) => {
  return (
    <>
      <TouchableOpacity
        className={"   bg-blue-500 rounded-3xl mx-8 my-2 p-3 "}
        onPress={onPress}
      >
        <View className={"flex-row  mx-auto"}>
          <Ionicons name={Icon} size={24} color="black" />
          <Text className="text-xl mx-2 rounded-full font-bold text-gray-700 ">
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;
