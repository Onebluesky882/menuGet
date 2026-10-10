import { useCart } from "@/store/useCart";
import { useState } from "react";
import { View, Text, Pressable, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SymbolView } from "expo-symbols";

const Order = () => {
  const { items, setOrderType, orderType } = useCart();
  const [showItems, setShowItems] = useState(true);

  const isDining = orderType === "dining";

  // ราคารวมทั้งหมด
  const totalPrice = items.reduce(
    (total, item) => total + item.menuItem.price * item.quantity,
    0,
  );

  // จำนวนสินค้าทั้งหมด
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  // ยืนยันเปลี่ยนประเภทการสั่งอาหาร
  const confirmOrderType = (type: "dining" | "takeOut") => {
    if (type === orderType) return;

    const title = type === "dining" ? "รับประทานที่ร้าน" : "สั่งกลับบ้าน";

    Alert.alert(
      "ยืนยันประเภทการสั่งอาหาร",
      `คุณต้องการเปลี่ยนเป็น "${title}" ใช่หรือไม่?`,
      [
        {
          text: "ยกเลิก",
          style: "cancel",
        },
        {
          text: "ยืนยัน",
          onPress: () => setOrderType(type),
        },
      ],
    );
  };

  // ยืนยันคำสั่งซื้อ
  const confirmPurchase = () => {
    if (items.length === 0) {
      Alert.alert("ตะกร้าว่าง", "กรุณาเลือกอาหารก่อนสั่งซื้อ");
      return;
    }

    Alert.alert(
      "ยืนยันคำสั่งซื้อ",
      `ประเภท: ${isDining ? "รับประทานที่ร้าน" : "สั่งกลับบ้าน"}\nจำนวน: ${totalQuantity} ชิ้น\nราคารวม: ฿${totalPrice}`,
      [
        {
          text: "ตรวจสอบอีกครั้ง",
          style: "cancel",
        },
        {
          text: "ยืนยันสั่งอาหาร",
          onPress: () => {
            // TODO: ส่งคำสั่งซื้อไปยัง Backend
            Alert.alert(
              "ยืนยันเรียบร้อย",
              "ขั้นตอนถัดไปสามารถเชื่อมต่อระบบสร้างคำสั่งซื้อได้",
            );
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingBottom: 0, backgroundColor: "#F3F4F6" }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
      >
        {/* Header */}

        {/* ประเภทการสั่งอาหาร */}
        <View className="mx-4 rounded-2xl bg-white p-4">
          <Text className="mb-3 text-lg font-bold text-slate-900">
            ประเภทการสั่งอาหาร
          </Text>

          <View className="flex-row gap-3">
            {/* ทานที่ร้าน */}
            <Pressable
              onPress={() => confirmOrderType("dining")}
              className={`flex-1 items-center rounded-xl border p-4 ${
                isDining
                  ? "border-orange-500 bg-orange-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <SymbolView
                name="fork.knife"
                size={26}
                tintColor={isDining ? "#f97316" : "#64748b"}
              />

              <Text
                className={`mt-2 font-bold ${
                  isDining ? "text-orange-600" : "text-slate-600"
                }`}
              >
                ทานที่ร้าน
              </Text>

              {isDining && (
                <Text className="mt-1 text-xs text-orange-500">
                  ✓ เลือกแล้ว
                </Text>
              )}
            </Pressable>

            {/* สั่งกลับบ้าน */}
            <Pressable
              onPress={() => confirmOrderType("takeOut")}
              className={`flex-1 items-center rounded-xl border p-4 ${
                !isDining
                  ? "border-green-500 bg-green-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <SymbolView
                name="takeoutbag.and.cup.and.straw"
                size={26}
                tintColor={!isDining ? "#16a34a" : "#64748b"}
              />

              <Text
                className={`mt-2 font-bold ${
                  !isDining ? "text-green-700" : "text-slate-600"
                }`}
              >
                สั่งกลับบ้าน
              </Text>

              {!isDining && (
                <Text className="mt-1 text-xs text-green-600">✓ เลือกแล้ว</Text>
              )}
            </Pressable>
          </View>
        </View>

        {/* รายการอาหาร */}
        <View className="mx-4 mt-4 rounded-2xl bg-white p-4">
          <Pressable
            onPress={() => setShowItems(!showItems)}
            className="flex-row items-center justify-between"
          >
            <View>
              <Text className="text-lg font-bold text-slate-900">
                รายการอาหาร
              </Text>
              <Text className="mt-1 text-sm text-slate-500">
                ทั้งหมด {totalQuantity} ชิ้น
              </Text>
            </View>

            <SymbolView
              name={showItems ? "chevron.up" : "chevron.down"}
              size={18}
              tintColor="#64748b"
            />
          </Pressable>

          {showItems && (
            <View className="mt-3">
              {items.length === 0 ? (
                <Text className="py-5 text-center text-slate-400">
                  ยังไม่มีรายการอาหาร
                </Text>
              ) : (
                items.map((item) => (
                  <View
                    key={item.id}
                    className="flex-row items-center justify-between border-b border-slate-100 py-3"
                  >
                    <View className="flex-1 pr-3">
                      <Text className="font-semibold text-slate-800">
                        {item.menuItem.name}
                      </Text>
                      <Text className="mt-1 text-sm text-slate-500">
                        ฿{item.menuItem.price} × {item.quantity}
                      </Text>
                    </View>

                    <Text className="font-bold text-slate-900">
                      ฿{item.menuItem.price * item.quantity}
                    </Text>
                  </View>
                ))
              )}
            </View>
          )}
        </View>

        {/* สรุปราคา */}
        <View className="mx-4 mt-4 rounded-2xl bg-white p-4">
          <Text className="text-lg font-bold text-slate-900">สรุปราคา</Text>

          <View className="mt-4 flex-row justify-between">
            <Text className="text-slate-500">จำนวนสินค้า</Text>
            <Text className="text-slate-700">{totalQuantity} ชิ้น</Text>
          </View>

          <View className="mt-3 flex-row justify-between border-t border-slate-100 pt-3">
            <Text className="text-base font-bold text-slate-900">
              ยอดรวมสุทธิ
            </Text>
            <Text className="text-2xl font-extrabold text-orange-600">
              ฿{totalPrice.toLocaleString("th-TH")}
            </Text>
          </View>
        </View>

        {/* ปุ่มยืนยันคำสั่งซื้อ */}
        <View className="mx-4 mt-5">
          <Pressable
            onPress={confirmPurchase}
            className={`items-center rounded-2xl p-4 ${
              items.length > 0 ? "bg-green-400" : "bg-slate-300"
            }`}
          >
            <Text className="text-lg font-extrabold text-foreground">
              ยืนยันคำสั่งซื้อ · ฿{totalPrice.toLocaleString("th-TH")}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Order;
