import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Cart } from "@/type/Cart";
import { useCart } from "@/store/useCart";

type Drawer = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export const ModelCart = ({
  shopId,
  tableId,
  tableSession,
  items,
  orderType,
  userId,
  setOpen,
}: Cart & Drawer) => {
  const router = useRouter();

  const {} = useCart();
  return (
    <View className="mt-5 rounded-2xl bg-slate-100 p-5">
      <Pressable
        className="mt-5 rounded-2xl bg-black p-4"
        onPress={() => {
          router.push("/(router)/menu");
          setOpen(false);
        }}
      >
        <Text className="text-center font-semibold text-white">ไปที่เมนู</Text>
      </Pressable>
      <Pressable
        className="mt-5 rounded-2xl bg-black p-4"
        onPress={() => {
          router.push("/pre-order");
          setOpen(false);
        }}
      >
        <Text className="text-center font-semibold text-white">
          Order ของฉัน
        </Text>
      </Pressable>
    </View>
  );
};
