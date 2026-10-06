import { View, Text } from "react-native";

export const Menu = ({ item }: { item: number }) => {
  return (
    <View className="  w-1/3 ">
      <View className="border rounded border-gray-300 shadow m-1 p-2 flex-row justify-center ">
        <Text className=" ">menu {item}</Text>
      </View>
    </View>
  );
};
