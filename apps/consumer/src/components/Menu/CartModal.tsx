import { CartItem } from "@/type/Cart";
import { SymbolView } from "expo-symbols";
import { Dispatch, SetStateAction } from "react";
import { Modal, Pressable, View, Text } from "react-native";

type CartModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  items: CartItem[];
};

export const CartModal = ({ open, setOpen, items }: CartModalProps) => {
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
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xl font-bold text-slate-900">
              ตะกร้าสินค้า
            </Text>

            {/* ปุ่มปิด */}
            <Pressable
              onPress={() => setOpen(false)}
              accessibilityRole="button"
              accessibilityLabel="ปิดตะกร้า"
              className="p-1"
            >
              <SymbolView name="x.circle.fill" size={24} tintColor="black" />
            </Pressable>
          </View>

          {/* จำนวนสินค้า */}
          <Text className="mt-2 text-slate-500">
            จำนวน {items.reduce((total, item) => total + item.quantity, 0)} ชิ้น
          </Text>

          {/* รายการสินค้า */}
          {items.map((item) => (
            <View
              key={item.id}
              className="mt-4 flex-row items-center justify-between"
            >
              <View className="flex-1">
                <Text className="font-medium text-slate-900">
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
          ))}

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
            onPress={() => setOpen(false)}
            className="mt-5 items-center rounded-xl bg-slate-900 p-4"
          >
            <Text className="font-bold text-white">สั่งอาหาร</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};
