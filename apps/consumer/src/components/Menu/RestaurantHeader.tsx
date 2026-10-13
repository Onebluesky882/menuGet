import { SymbolView } from "expo-symbols";
import { View, Text } from "react-native";

type RestaurantHeaderProps = {
  shopId: string | null;
};
export const RestaurantHeader = ({ shopId }: RestaurantHeaderProps) => {
  return (
    <View className="bg-white px-5 pb-5 pt-4">
      <View className="flex-row items-center justify-between">
        <View className="">
          {!shopId ? (
            <Text className="text-2xl font-bold text-slate-900">
              no shop id
            </Text>
          ) : (
            <Text className="text-2xl font-bold text-slate-900">{shopId}</Text>
          )}
          <View className="mt-2 flex-row items-center">
            <SymbolView name="location.fill" size={14} tintColor="red" />

            <Text className="ml-1 text-sm text-slate-500">
              ร้านอาหาร • เปิดอยู่
            </Text>
          </View>
        </View>

        <View className="h-12 w-12 items-center justify-center rounded-full bg-orange-100">
          <Text className="text-2xl">🍜</Text>
        </View>
      </View>
    </View>
  );
};
