import { View, Image } from "react-native";
import truck from "../assets/images/pitia-truck1.jpg";

const RideLayout = ({ children }) => {
  return (
    <>
      <View>
        <Image source={truck} className={"object-contain"} />

        {children}
      </View>
    </>
  );
};

export default RideLayout;
