import { TouchableOpacity, Text, View } from "react-native";

import { ButtonProps } from "@/types/type";

const CustomButtom = ({
  onPress,
  title,
  Icon,
  className,
  ...props
}: ButtonProps) => {
  return (
    <>
      <TouchableOpacity
        className={"   bg-blue-500 rounded-lg mx-8 my-2 p-3 "}
        onPress={onPress}
      >
        <View>
          <Text className="text-xl mx-auto rounded-full font-bold text-gray-700 ">
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CustomButtom;
