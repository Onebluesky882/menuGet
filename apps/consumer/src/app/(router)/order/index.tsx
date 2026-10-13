import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { mockOrderTable } from "@/Mock/MockOrderTable";

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
          <View className="mb-4 overflow-hidden rounded-3xl bg-orange-500 p-5">
            <View className="flex-row items-start justify-between">
              <View className="flex-1 pr-3">
                <Text className="text-sm font-medium text-orange-100">
                  ออเดอร์ #{mockOrderTable.orderNumber}
                </Text>

                <Text className="mt-2 text-2xl font-extrabold text-white">
                  {mockOrderTable.status}
                </Text>

                <Text className="mt-2 text-sm leading-5 text-orange-50">
                  อาหารของคุณกำลังถูกปรุง คาดว่าจะพร้อมเสิร์ฟในอีก{" "}
                  {mockOrderTable.estimatedMin}–{mockOrderTable.estimatedMax}{" "}
                  นาที
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

          {/* Order Progress */}
          <View className="mb-4 rounded-3xl border border-gray-100 bg-white p-5">
            <View className="mb-5 flex-row items-center justify-between">
              <Text className="text-lg font-extrabold text-gray-900">
                ความคืบหน้า
              </Text>
              <Text className="text-xs text-gray-500">
                ส่งออเดอร์ {mockOrderTable.submittedAt}
              </Text>
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

          {/* Queue Information */}
          <View className="mb-4 rounded-3xl border border-gray-100 bg-white p-5">
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-lg font-extrabold text-gray-900">
                คิวออเดอร์
              </Text>

              <View className="rounded-full bg-blue-50 px-3 py-1.5">
                <Text className="text-xs font-bold text-blue-700">
                  คิวจำลอง
                </Text>
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

          {/* Ordered Items */}
          <View className="mb-4 rounded-3xl border border-gray-100 bg-white p-5">
            <View className="mb-3 flex-row items-center justify-between">
              <Text className="text-lg font-extrabold text-gray-900">
                รายการอาหาร
              </Text>

              <Text className="text-sm text-gray-500">
                {totalQuantity} ชิ้น
              </Text>
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

                  <Text className="mt-1 text-xs text-gray-500">
                    {item.detail}
                  </Text>

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

          {/* Popular Order Actions */}
          <View className="mb-3">
            <Text className="mb-3 text-lg font-extrabold text-gray-900">
              ทำอะไรต่อดี?
            </Text>

            <View className="flex-row gap-3">
              <Pressable
                onPress={() => router.push("/menu")}
                className="flex-1 items-center rounded-2xl border border-orange-200 bg-white py-4 active:opacity-70"
              >
                <Text className="mb-1 text-xl">🍽️</Text>
                <Text className="font-bold text-orange-600">
                  สั่งอาหารเพิ่ม
                </Text>
                <Text className="mt-1 text-xs text-gray-500">
                  เพิ่มเมนูในโต๊ะนี้
                </Text>
              </Pressable>

              <Pressable
                onPress={() =>
                  Alert.alert("เรียกพนักงาน", "ส่งคำขอเรียกพนักงาน (Mock) แล้ว")
                }
                className="flex-1 items-center rounded-2xl border border-gray-100 bg-white py-4 active:opacity-70"
              >
                <Text className="mb-1 text-xl">🔔</Text>
                <Text className="font-bold text-gray-900">เรียกพนักงาน</Text>
                <Text className="mt-1 text-xs text-gray-500">
                  ขอความช่วยเหลือ
                </Text>
              </Pressable>
            </View>
          </View>

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
