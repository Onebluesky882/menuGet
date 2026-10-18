import { useState } from "react";
import { View, Text, Pressable, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import ProfileCard from "@/components/Profile/ProfileCard";
import RewardsCard from "@/components/Profile/RewardsCard";
import AccountCard from "@/components/Profile/Account";
import Perferences from "@/components/Profile/Perferences";

const profile = {
  id: "Guest User",
  name: "john",
};

const ProfileScreen = () => {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const showComingSoon = (feature: string) => {
    Alert.alert("MenuGET", `${feature} จะเปิดให้ใช้งานเร็ว ๆ นี้`);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: "#FBFBFB",
        marginTop: -48,
        marginBottom: -85,
      }}
    >
      <SafeAreaView>
        {/* Header */}
        <View className="px-5 pb-5 pt-4">
          <Text className="text-2xl font-bold text-gray-900">โปรไฟล์</Text>
          <Text className="mt-1 text-sm text-gray-500">
            จัดการบัญชีและสิทธิพิเศษของคุณ
          </Text>
        </View>

        {/* Profile Card */}
        <ProfileCard userId={profile.id} name={profile.name} />

        {/* Rewards */}
        <RewardsCard userId={profile.id} name={profile.name} />

        {/* My Account */}
        <AccountCard userId={""} name={""} />

        {/* Preferences */}
        <Perferences
          setNotificationsEnabled={setNotificationsEnabled}
          notificationsEnabled={notificationsEnabled}
        />

        {/* Logout */}
        <Pressable
          onPress={() => Alert.alert("MenuGET", "คุณยังไม่ได้เข้าสู่ระบบ")}
          className="mx-4 mt-6 items-center rounded-2xl border border-red-100 bg-white py-4"
          accessibilityRole="button"
        >
          <Text className="font-semibold text-red-500">ออกจากระบบ</Text>
        </Pressable>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;
