import { View, Text } from "react-native";
import React from "react";
import { mockOrderTable } from "@/Mock/MockOrderTable";

type OrderTableProps = {
  orderNumber: string;
  status: string;
  estimatedMin: number;
  estimatedMax: number;
};
const OrderStatusCard = ({ orderNumber, status }: OrderTableProps) => {
  return (
    <View className="mb-4 overflow-hidden rounded-3xl bg-orange-500 p-5">
      <View className="flex-row items-start justify-between">
        <View className="flex-1 pr-3">
          <Text className="text-sm font-medium text-orange-100">
            ออเดอร์ #{orderNumber}
          </Text>

          <Text className="mt-2 text-2xl font-extrabold text-white">
            {status}
          </Text>

          <Text className="mt-2 text-sm leading-5 text-orange-50">
            อาหารของคุณกำลังถูกปรุง คาดว่าจะพร้อมเสิร์ฟในอีก{" "}
            {mockOrderTable.estimatedMin}–{mockOrderTable.estimatedMax} นาที
          </Text>
        </View>

        <View className="h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
          <Text className="text-3xl">🍳</Text>
        </View>
      </View>

      <View className="mt-5 flex-row gap-3">
        <View className="flex-1 rounded-2xl bg-white/15 p-3">
          <Text className="text-xs text-orange-100">เวลารอโดยประมาณ</Text>
          <Text className="mt-2 text-xl font-extrabold text-white">
            12–18 นาที
          </Text>
        </View>

        <View className="flex-1 rounded-2xl bg-white/15 p-3">
          <Text className="text-xs text-orange-100">หมายเลขคิว</Text>
          <Text className="mt-2 text-xl font-extrabold text-white">
            {mockOrderTable.orderNumber}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderStatusCard;
