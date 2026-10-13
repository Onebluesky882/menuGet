import { usePulse } from "@/hooks/animation/useAnimation";
import { SymbolView } from "expo-symbols";
import { Pressable, View, Text } from "react-native";
import Animated from "react-native-reanimated";

type GetScanMenuProp = {
  setOpen: (value: boolean) => void;
};

export const GetScanMenu = ({ setOpen }: GetScanMenuProp) => {
  const pulseStyle = usePulse();
  return (
    <Pressable onPress={() => setOpen(true)}>
      <Animated.View style={pulseStyle}>
        <Text className="text-center text-[8px] pb-1">Get Menu</Text>
      </Animated.View>
      <View className="border shadow border-gray-300 p-2  rounded-full">
        <SymbolView name="qrcode" tintColor={"blue"} size={28} />
      </View>
    </Pressable>
  );
};
