import { View, Text } from "react-native";
import React from "react";
import { ProfileProps } from "./ProfileCard";
import HistoryOrder from "./HistoryOrder";

const AccountCard = ({ userId, name }: ProfileProps) => {
  return (
    <View className="mx-4 mt-6">
      <Text className="mb-3 text-lg font-bold text-gray-900">บัญชีของฉัน</Text>

      <View className="overflow-hidden rounded-3xl bg-white">
        <HistoryOrder
          icon="🧾"
          title="ประวัติการสั่งอาหาร"
          subtitle="ดูรายการสั่งซื้อที่ผ่านมา"
        />

        <HistoryOrder
          icon="🎟️"
          title="คูปองของฉัน"
          subtitle="ส่วนลดและโปรโมชั่น"
        />

        <HistoryOrder
          icon="⭐"
          title="ร้านโปรด"
          subtitle="ร้านอาหารที่คุณชื่นชอบ"
        />

        <HistoryOrder
          icon="📍"
          title="ที่อยู่ของฉัน"
          subtitle="จัดการที่อยู่สำหรับการจัดส่ง"
          last
        />
      </View>
    </View>
  );
};

export default AccountCard;
