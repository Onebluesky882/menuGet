import { View, Text } from "react-native";
import { mockOrderTable } from "@/Mock/MockOrderTable";

const QueueInformationCard = () => {
  return (
    <View className="mb-4 rounded-3xl border border-gray-100 bg-white p-5">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-lg font-extrabold text-gray-900">คิวออเดอร์</Text>

        <View className="rounded-full bg-blue-50 px-3 py-1.5">
          <Text className="text-xs font-bold text-blue-700">คิวจำลอง</Text>
        </View>
      </View>

      <View className="flex-row items-center">
        <View className="mr-4 h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
          <Text className="text-2xl font-extrabold text-blue-600">
            {mockOrderTable.peopleAhead + 1}
          </Text>
        </View>

        <View className="flex-1">
          <Text className="font-bold text-gray-900">
            อีก {mockOrderTable.peopleAhead} คิวก่อนถึงคุณ
          </Text>
          <Text className="mt-1 text-sm leading-5 text-gray-500">
            จำนวนคิวเป็นข้อมูลจำลอง เวลาจริงอาจเปลี่ยนแปลงตามการปรุงอาหาร
          </Text>
        </View>
      </View>

      <View className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
        <View className="h-full w-2/3 rounded-full bg-blue-500" />
      </View>
    </View>
  );
};

export default QueueInformationCard;
