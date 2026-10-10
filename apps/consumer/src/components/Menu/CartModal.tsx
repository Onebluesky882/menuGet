import { CartItem } from "@/type/Cart";
import { SymbolView } from "expo-symbols";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Modal, Pressable, View, Text } from "react-native";
import { CartItemRow } from "./CartItemRow";
import { ScrollView } from "react-native-gesture-handler";
import { hapticLight, hapticMedium } from "@/lib/haptic";
import { useRouter } from "expo-router";
type CartModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  items: CartItem[];
  removeMenu: (id: string) => void;
  orderType: string;
  setOrderType: (type: "dining" | "takeOut") => void;
};

export const CartModal = ({
  open,
  setOpen,
  items,
  removeMenu,
  setOrderType,
  orderType,
}: CartModalProps) => {
  useEffect(() => {
    if (open && items.length === 0) {
      setOpen(false);
    }
  }, [open, items.length, setOpen]);

  const router = useRouter();

  // ฟังก์ชันยืนยันสั่งกลับบ้าน

  return (
    <Modal
      visible={open}
      animationType="slide"
      transparent
      onRequestClose={() => setOpen(false)}
    >
      {/* พื้นที่ด้านนอก: กดเพื่อปิด Modal */}
      <Pressable
        className="flex-1 justify-end bg-black/40"
        onPress={() => setOpen(false)}
      >
        {/* เนื้อหา Modal: กดด้านในแล้วไม่ปิด */}
        <Pressable
          className="rounded-t-3xl bg-white p-6"
          onPress={(event) => event.stopPropagation()}
        >
          {/* Header */}
          <View className="mb-2 flex-row items-center justify-between">
            <Text className="text-xl font-bold text-slate-900">
              ตะกร้าสินค้า
            </Text>

            {/* ปุ่มปิด */}
            <Pressable
              onPress={() => {
                hapticLight();
                setOpen(false);
              }}
              accessibilityRole="button"
              accessibilityLabel="ปิดตะกร้า"
              className="p-1"
            >
              <SymbolView name="x.circle.fill" size={24} tintColor="black" />
            </Pressable>
          </View>

          {/* จำนวนสินค้า */}
          <Text className="mb-2 text-slate-500">
            จำนวน {items.reduce((total, item) => total + item.quantity, 0)} ชิ้น
          </Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: 320 }}
            contentContainerStyle={{ paddingTop: 10 }}
          >
            {items.map((item) => (
              <View key={item.id} className="border-gray-200 border-b">
                <CartItemRow item={item} removeMenu={removeMenu} />
              </View>
            ))}
          </ScrollView>

          {/* ราคารวม */}
          <View className="mt-5 flex-row items-center justify-between border-t border-slate-200 pt-4">
            <Text className="text-base font-bold text-slate-900">ราคารวม</Text>

            <Text className="text-xl font-bold text-orange-600">
              ฿
              {items.reduce(
                (total, item) => total + item.menuItem.price * item.quantity,
                0,
              )}
            </Text>
          </View>

          {/* ปุ่มสั่งอาหาร */}
          <Pressable
            onPress={() => {
              hapticMedium();
              router.push("/pre-order");
              setOpen(false);
            }}
            className="mt-5 items-center rounded-xl bg-slate-900 p-4"
          >
            <Text className="font-bold text-white">สั่งอาหาร</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};
