import { View, Text, Pressable } from "react-native";
import React from "react";
import { ProfileProps } from "./ProfileCard";

const RewardsCard = ({ name, userId }: ProfileProps) => {
  return (
    <View className="mx-4 mt-5 rounded-3xl bg-orange-500 p-5">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-sm font-medium text-orange-50">
            MenuGET Rewards
          </Text>

          <Text className="mt-2 text-3xl font-bold text-white">
            name : {name}
          </Text>

          <Text className="mt-2 text-xs text-orange-50">
            สะสมคะแนนเพื่อรับสิทธิพิเศษ
          </Text>
        </View>

        <View className="h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
          <Text className="text-4xl">🎁</Text>
        </View>
      </View>

      <Pressable
        className="mt-5 self-start rounded-xl bg-white px-4 py-2"
        accessibilityRole="button"
      >
        <Text className="font-semibold text-orange-600">ดูสิทธิพิเศษ →</Text>
      </Pressable>
    </View>
  );
};

export default RewardsCard;
