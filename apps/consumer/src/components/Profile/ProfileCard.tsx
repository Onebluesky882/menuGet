import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const hasUser = false;
const router = useRouter();

export type ProfileProps = {
  userId: string;
  name: string;
};
const ProfileCard = ({ userId, name }: ProfileProps) => {
  return (
    <View className="mx-4 rounded-3xl bg-white p-5">
      <View className="flex-row items-center">
        <View className="mr-4 h-20 w-20 items-center justify-center rounded-full bg-orange-100">
          <Text className="text-4xl">👤</Text>
        </View>

        <View className="flex-1">
          <Text className="text-xl font-bold text-gray-900">name : {name}</Text>

          <Text className="mt-1 text-sm text-gray-500"> id : {userId}</Text>

          <View className="mt-2 self-start rounded-full bg-orange-50 px-3 py-1">
            <Text className="text-xs font-semibold text-orange-700">
              Guest Account
            </Text>
          </View>
        </View>
      </View>

      {!hasUser ? (
        <Pressable
          onPress={() => router.push("/auth/signIn")}
          className="mt-5 items-center rounded-2xl bg-gray-900 py-4"
          accessibilityRole="button"
        >
          <Text className="font-semibold text-white">
            เข้าสู่ระบบ / สมัครสมาชิก
          </Text>
        </Pressable>
      ) : (
        <Text>user : got user</Text>
      )}
    </View>
  );
};

export default ProfileCard;
