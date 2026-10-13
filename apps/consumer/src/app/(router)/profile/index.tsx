import { useState } from "react";
import { View, Text, Pressable, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const profile = {
  name: "Guest User",
  email: "guest@example.com",
  points: 120,
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
        <View className="mx-4 rounded-3xl bg-white p-5">
          <View className="flex-row items-center">
            <View className="mr-4 h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <Text className="text-4xl">👤</Text>
            </View>

            <View className="flex-1">
              <Text className="text-xl font-bold text-gray-900">
                {profile.name}
              </Text>

              <Text className="mt-1 text-sm text-gray-500">
                {profile.email}
              </Text>

              <View className="mt-2 self-start rounded-full bg-orange-50 px-3 py-1">
                <Text className="text-xs font-semibold text-orange-700">
                  Guest Account
                </Text>
              </View>
            </View>
          </View>

          <Pressable
            onPress={() => showComingSoon("เข้าสู่ระบบ / สมัครสมาชิก")}
            className="mt-5 items-center rounded-2xl bg-gray-900 py-4"
            accessibilityRole="button"
          >
            <Text className="font-semibold text-white">
              เข้าสู่ระบบ / สมัครสมาชิก
            </Text>
          </Pressable>
        </View>

        {/* Rewards */}
        <View className="mx-4 mt-5 rounded-3xl bg-orange-500 p-5">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-sm font-medium text-orange-50">
                MenuGET Rewards
              </Text>

              <Text className="mt-2 text-3xl font-bold text-white">
                {profile.points} คะแนน
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
            onPress={() => showComingSoon("Rewards")}
            className="mt-5 self-start rounded-xl bg-white px-4 py-2"
            accessibilityRole="button"
          >
            <Text className="font-semibold text-orange-600">
              ดูสิทธิพิเศษ →
            </Text>
          </Pressable>
        </View>

        {/* My Account */}
        <View className="mx-4 mt-6">
          <Text className="mb-3 text-lg font-bold text-gray-900">
            บัญชีของฉัน
          </Text>

          <View className="overflow-hidden rounded-3xl bg-white">
            <MenuItem
              icon="🧾"
              title="ประวัติการสั่งอาหาร"
              subtitle="ดูรายการสั่งซื้อที่ผ่านมา"
              onPress={() => showComingSoon("ประวัติการสั่งอาหาร")}
            />

            <MenuItem
              icon="🎟️"
              title="คูปองของฉัน"
              subtitle="ส่วนลดและโปรโมชั่น"
              onPress={() => showComingSoon("คูปองของฉัน")}
            />

            <MenuItem
              icon="⭐"
              title="ร้านโปรด"
              subtitle="ร้านอาหารที่คุณชื่นชอบ"
              onPress={() => showComingSoon("ร้านโปรด")}
            />

            <MenuItem
              icon="📍"
              title="ที่อยู่ของฉัน"
              subtitle="จัดการที่อยู่สำหรับการจัดส่ง"
              onPress={() => showComingSoon("ที่อยู่ของฉัน")}
              last
            />
          </View>
        </View>

        {/* Preferences */}
        <View className="mx-4 mt-6">
          <Text className="mb-3 text-lg font-bold text-gray-900">
            การตั้งค่า
          </Text>

          <View className="overflow-hidden rounded-3xl bg-white">
            <MenuItem
              icon="🔔"
              title="การแจ้งเตือน"
              subtitle="รับข่าวสารและสถานะคำสั่งซื้อ"
              right={
                <Pressable
                  onPress={() => setNotificationsEnabled((enabled) => !enabled)}
                  className={`h-7 w-12 justify-center rounded-full px-1 ${
                    notificationsEnabled ? "bg-green-500" : "bg-gray-300"
                  }`}
                  accessibilityRole="switch"
                  accessibilityState={{ checked: notificationsEnabled }}
                  accessibilityLabel="เปิดหรือปิดการแจ้งเตือน"
                >
                  <View
                    className={`h-5 w-5 rounded-full bg-white ${
                      notificationsEnabled ? "self-end" : "self-start"
                    }`}
                  />
                </Pressable>
              }
            />

            <MenuItem
              icon="🌐"
              title="ภาษา"
              subtitle="ภาษาไทย"
              onPress={() => showComingSoon("ตั้งค่าภาษา")}
            />

            <MenuItem
              icon="❓"
              title="ช่วยเหลือ"
              subtitle="คำถามที่พบบ่อยและติดต่อเรา"
              onPress={() => showComingSoon("ช่วยเหลือ")}
              last
            />
          </View>
        </View>

        {/* Logout */}
        <Pressable
          onPress={() => Alert.alert("MenuGET", "คุณยังไม่ได้เข้าสู่ระบบ")}
          className="mx-4 mt-6 items-center rounded-2xl border border-red-100 bg-white py-4"
          accessibilityRole="button"
        >
          <Text className="font-semibold text-red-500">ออกจากระบบ</Text>
        </Pressable>

        {/* Footer */}
        <Text className="mt-6 text-center text-xs text-gray-400">
          MenuGET · Order Together, Enjoy Together
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

type MenuItemProps = {
  icon: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
  right?: React.ReactNode;
  last?: boolean;
};

const MenuItem = ({
  icon,
  title,
  subtitle,
  onPress,
  right,
  last = false,
}: MenuItemProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      className={`flex-row items-center px-4 py-4 active:bg-gray-50 ${
        !last ? "border-b border-gray-100" : ""
      }`}
      accessibilityRole={onPress ? "button" : undefined}
    >
      <View className="mr-3 h-11 w-11 items-center justify-center rounded-2xl bg-gray-50">
        <Text className="text-xl">{icon}</Text>
      </View>

      <View className="flex-1">
        <Text className="font-semibold text-gray-900">{title}</Text>
        <Text className="mt-1 text-xs text-gray-500">{subtitle}</Text>
      </View>

      {right ?? <Text className="text-2xl text-gray-300">›</Text>}
    </Pressable>
  );
};

export default ProfileScreen;
