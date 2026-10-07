import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export const Banner = () => {
  const board = [{ name: 1 }, { name: 2 }, { name: 3 }];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % board.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const item = board[index];

  return (
    <View className="w-full">
      <View className="h-10 w-full border">
        <BannerItem item={item.name} />
      </View>
    </View>
  );
};

export const BannerItem = ({ item }: { item: number }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>banner: {item}</Text>
    </View>
  );
};
