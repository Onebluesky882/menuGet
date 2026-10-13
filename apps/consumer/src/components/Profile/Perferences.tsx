import { View, Text, Pressable } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import HistoryOrder from "./HistoryOrder";

type PerferencesProps = {
  notificationsEnabled: boolean;
  setNotificationsEnabled: Dispatch<SetStateAction<boolean>>;
};
const Perferences = ({
  notificationsEnabled,
  setNotificationsEnabled,
}: PerferencesProps) => {
  return (
    <View className="mx-4 mt-6">
      <Text className="mb-3 text-lg font-bold text-gray-900">การตั้งค่า</Text>

      <View className="overflow-hidden rounded-3xl bg-white">
        <HistoryOrder
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

        <HistoryOrder icon="🌐" title="ภาษา" subtitle="ภาษาไทย" />

        <HistoryOrder
          icon="❓"
          title="ช่วยเหลือ"
          subtitle="คำถามที่พบบ่อยและติดต่อเรา"
          last
        />
      </View>
    </View>
  );
};

export default Perferences;
