import { View, Text, Pressable, Alert } from "react-native";
import React from "react";
import { ImperativeRouter } from "expo-router";

const PopularOrder = ({ router }: { router: ImperativeRouter }) => {
  return (
    <View className="mb-3">
      <Text className="mb-3 text-lg font-extrabold text-gray-900">
        ทำอะไรต่อดี?
      </Text>

      <View className="flex-row gap-3">
        <Pressable
          onPress={() => router.push("/menu")}
          className="flex-1 items-center rounded-2xl border border-orange-200 bg-white py-4 active:opacity-70"
        >
          <Text className="mb-1 text-xl">🍽️</Text>
          <Text className="font-bold text-orange-600">สั่งอาหารเพิ่ม</Text>
          <Text className="mt-1 text-xs text-gray-500">เพิ่มเมนูในโต๊ะนี้</Text>
        </Pressable>

        <Pressable
          onPress={() =>
            Alert.alert("เรียกพนักงาน", "ส่งคำขอเรียกพนักงาน (Mock) แล้ว")
          }
          className="flex-1 items-center rounded-2xl border border-gray-100 bg-white py-4 active:opacity-70"
        >
          <Text className="mb-1 text-xl">🔔</Text>
          <Text className="font-bold text-gray-900">เรียกพนักงาน</Text>
          <Text className="mt-1 text-xs text-gray-500">ขอความช่วยเหลือ</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PopularOrder;
