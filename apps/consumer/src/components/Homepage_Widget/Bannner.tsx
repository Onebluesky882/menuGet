import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ImageCard from "../ImageCard";

export const Banner = () => {
  const board = [
    {
      image: require("@/assets/homepage/promo01-1536-1024.png"),
    },
    {
      image: require("@/assets/homepage/promo02-1536-1024.png"),
    },
    {
      image: require("@/assets/homepage/promo03-1536-1024.png"),
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % board.length);
    }, 3800);

    return () => clearInterval(timer);
  });

  const item = board[index];

  return (
    <View className="   p-2 px-5 ">
      <ImageCard
        url={item.image}
        contentFit={"cover"}
        transition={0}
        style={{
          width: "100%",
          height: 230,
          borderRadius: 16,
        }}
      />
    </View>
  );
};
