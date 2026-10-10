import { hapticMedium } from "@/lib/haptic";
import { CartItem } from "@/type/Cart";
import { useRef } from "react";
import { Pressable, Text, View } from "react-native";
import Swipeable, {
  SwipeableMethods,
} from "react-native-gesture-handler/ReanimatedSwipeable";
type CartItemRowProps = {
  item: CartItem;
  removeMenu: (id: string) => void;
};

export const CartItemRow = ({ item, removeMenu }: CartItemRowProps) => {
  const handleRemove = () => {
    swipeableRef.current?.close();
    hapticMedium();
    setTimeout(() => {
      removeMenu(item.id);
    }, 360);
  };

  const renderRightAction = () => (
    <Pressable
      onPress={handleRemove}
      className="my-2 items-center justify-center rounded-xl bg-red-500 px-5"
    >
      <Text className="font-bold text-white">Remove</Text>
    </Pressable>
  );
  const swipeableRef = useRef<SwipeableMethods>(null);

  return (
    <Swipeable
      ref={swipeableRef}
      renderRightActions={renderRightAction}
      rightThreshold={40}
      overshootRight={true}
    >
      <View className="flex-row items-center justify-between bg-white px-1 py-3">
        <View className="">
          <Text className="font-medium text-xl text-slate-900">
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
    </Swipeable>
  );
};
