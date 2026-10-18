import { View, Text } from "react-native";
import React from "react";

const OrderedItemsCard = () => {
  return (
    <View className="mb-4 rounded-3xl border border-gray-100 bg-white p-5">
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="text-lg font-extrabold text-gray-900">
          รายการอาหาร
        </Text>

        <Text className="text-sm text-gray-500">{totalQuantity} ชิ้น</Text>
      </View>

      {mockOrderTable.items.map((item, index) => (
        <View
          key={item.id}
          className={`flex-row items-center py-4 ${
            index < mockOrderTable.items.length - 1
              ? "border-b border-gray-100"
              : ""
          }`}
        >
          <View className="mr-3 h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
            <Text className="text-2xl">{item.emoji}</Text>
          </View>

          <View className="flex-1 pr-2">
            <Text className="font-bold text-gray-900">{item.name}</Text>

            <Text className="mt-1 text-xs text-gray-500">{item.detail}</Text>

            <Text className="mt-1 text-xs text-gray-500">
              จำนวน x{item.quantity}
            </Text>
          </View>

          <Text className="font-bold text-gray-900">
            ฿{item.price * item.quantity}
          </Text>
        </View>
      ))}

      <View className="mt-3 flex-row items-center justify-between border-t border-dashed border-gray-200 pt-4">
        <Text className="font-bold text-gray-700">ยอดรวม</Text>
        <Text className="text-xl font-extrabold text-orange-600">
          ฿{totalPrice}
        </Text>
      </View>
    </View>
  );
};

export default OrderedItemsCard;
