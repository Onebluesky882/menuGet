import { View, Text } from "react-native";

export const Board = ({ item }: { item: number }) => {
  return (
    <View className=" w-full ">
      <View className="  rounded     p-2 flex-row justify-center ">
        <Text className=" ">banner {item}</Text>
      </View>
    </View>
  );
};
