import { CartItem, MenuItem } from "@/type/Cart";
import { Pressable, View, Text } from "react-native";
import * as Haptics from "expo-haptics";

type MenuItemCardProps = {
  menu: MenuItem;
  addCartItem: (item: CartItem) => void;
};

export const MenuItemCard = ({ menu, addCartItem }: MenuItemCardProps) => {
  const handleAddToCart = () => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    addCartItem({
      id: menu.id,
      menuItem: menu,
      quantity: 1,
    });
  };

  return (
    <View
      key={menu.id}
      className="mb-4 flex-row overflow-hidden rounded-3xl bg-white p-3"
    >
      {/* Food Image */}
      <View className="h-28 w-28 items-center justify-center rounded-2xl bg-orange-50">
        <Text className="text-5xl">{menu.image}</Text>
      </View>

      {/* Content */}
      <View className="ml-4 flex-1 justify-between py-1">
        <View>
          <Text
            numberOfLines={1}
            className="text-base font-bold text-slate-900"
          >
            {menu.name}
          </Text>

          <Text
            numberOfLines={2}
            className="mt-1 text-xs leading-5 text-slate-400"
          >
            {menu.description}
          </Text>
        </View>

        <View className="mt-2 flex-row items-center justify-between">
          <Text className="text-lg font-bold text-orange-600">
            ฿{menu.price}
          </Text>

          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#f97316" : "#0f172a",
            })}
            onPress={handleAddToCart}
            className="h-9 w-9 items-center justify-center rounded-full bg-slate-900"
          >
            <Text className="text-xl font-medium text-white">+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
