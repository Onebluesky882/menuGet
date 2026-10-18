import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { mockOrderTable } from "@/Mock/MockOrderTable";
import OrderProgressCard from "@/components/Order/OrderProgressCard";
import OrderStatusCard from "@/components/Order/OrderStatusCard";
import QueueInformationCard from "@/components/Order/ QueueInformationCard";
import OrderedItemsCard from "@/components/Order/ OrderedItemsCard";
import PopularOrder from "@/components/Order/PopularOrder";
import { useRouter } from "expo-router";

const orderSteps = [
  {
    title: "รับออเดอร์แล้ว",
    description: "ร้านได้รับรายการอาหารของคุณแล้ว",
  },
  {
    title: "กำลังปรุงอาหาร",
    description: "เชฟกำลังเตรียมอาหารให้คุณ",
  },
  {
    title: "อาหารพร้อมเสิร์ฟ",
    description: "พนักงานจะนำอาหารมาให้ที่โต๊ะ",
  },
];

const OrderScreen = () => {
  const router = useRouter();

  // Mock: กำลังอยู่ในขั้นตอนปรุงอาหาร
  const activeStep = 1;

  const totalPrice = mockOrderTable.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalQuantity = mockOrderTable.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

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
        <View className="px-5  ">
          {/* Header */}
          <View className="mb-6"></View>

          {/* Order Status */}
          <OrderStatusCard
            orderNumber={""}
            status={""}
            estimatedMin={0}
            estimatedMax={0}
          />
          {/* Order Progress */}
          <OrderProgressCard />

          {/* Queue Information */}
          <QueueInformationCard />

          {/* Ordered Items */}
          <OrderedItemsCard />

          {/* Popular Order Actions */}
          <PopularOrder router={router} />

          <Pressable
            onPress={() =>
              Alert.alert("ขอเช็กบิล", "ส่งคำขอเช็กบิล (Mock) แล้ว", [
                { text: "ยกเลิก", style: "cancel" },
                {
                  text: "ตกลง",
                  onPress: () =>
                    Alert.alert(
                      "ส่งคำขอแล้ว",
                      "พนักงานจะเข้ามาตรวจสอบบิลของคุณ",
                    ),
                },
              ])
            }
            className="mt-2 items-center rounded-2xl bg-gray-900 py-4 active:opacity-70"
          >
            <Text className="font-bold text-white">ขอเช็กบิล</Text>
          </Pressable>

          <Text className="mt-4 text-center text-xs leading-5 text-gray-400">
            สถานะ เวลา และคิวในหน้านี้เป็นข้อมูลจำลอง
            ยังไม่ได้เชื่อมต่อกับระบบร้านจริง
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default OrderScreen;
