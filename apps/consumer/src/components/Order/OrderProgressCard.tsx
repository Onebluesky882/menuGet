import { View, Text } from "react-native";

type OrderStep = {
  title: string;
  description: string;
};

const orderSteps: OrderStep[] = [
  {
    title: "รับออเดอร์แล้ว",
    description: "ร้านได้รับออเดอร์ของคุณเรียบร้อยแล้ว",
  },
  {
    title: "กำลังเตรียมอาหาร",
    description: "เชฟกำลังปรุงอาหารให้คุณ",
  },
  {
    title: "อาหารพร้อมเสิร์ฟ",
    description: "อาหารของคุณพร้อมเสิร์ฟแล้ว",
  },
  {
    title: "เสิร์ฟอาหารแล้ว",
    description: "ขอให้อร่อยกับมื้ออาหารของคุณ",
  },
];

// Mock active step: 0 = รับออเดอร์แล้ว
// 1 = กำลังเตรียมอาหาร
// 2 = อาหารพร้อมเสิร์ฟ
// 3 = เสิร์ฟอาหารแล้ว
const activeStep = 1;

const OrderProgressCard = () => {
  return (
    <View className="mb-4 rounded-3xl border border-gray-100 bg-white p-5">
      <View className="mb-5 flex-row items-center justify-between">
        <Text className="text-lg font-extrabold text-gray-900">
          ความคืบหน้า
        </Text>

        <Text className="text-xs text-gray-500">ออเดอร์ #1024</Text>
      </View>

      {orderSteps.map((step, index) => {
        const completed = index < activeStep;
        const current = index === activeStep;

        return (
          <View key={step.title} className="flex-row">
            <View className="mr-3 items-center">
              <View
                className={`h-9 w-9 items-center justify-center rounded-full ${
                  completed
                    ? "bg-green-500"
                    : current
                      ? "bg-orange-500"
                      : "bg-gray-100"
                }`}
              >
                <Text
                  className={`font-bold ${
                    completed || current ? "text-white" : "text-gray-400"
                  }`}
                >
                  {completed ? "✓" : index + 1}
                </Text>
              </View>

              {index < orderSteps.length - 1 && (
                <View
                  className={`my-1 h-8 w-0.5 ${
                    completed ? "bg-green-400" : "bg-gray-200"
                  }`}
                />
              )}
            </View>

            <View className="flex-1 pb-5">
              <Text
                className={`font-bold ${
                  current
                    ? "text-orange-600"
                    : completed
                      ? "text-gray-900"
                      : "text-gray-400"
                }`}
              >
                {step.title}
              </Text>

              <Text className="mt-1 text-sm text-gray-500">
                {step.description}
              </Text>
            </View>

            {current && (
              <View className="h-6 rounded-full bg-orange-50 px-2">
                <Text className="text-xs font-bold leading-6 text-orange-600">
                  กำลังดำเนินการ
                </Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default OrderProgressCard;
 