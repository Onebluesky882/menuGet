import { Pressable, View, Text } from "react-native";
type MenuItemProps = {
  icon: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
  right?: React.ReactNode;
  last?: boolean;
};
const HistoryOrder = ({
  icon,
  title,
  subtitle,
  onPress,
  right,
  last = false,
}: MenuItemProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      className={`flex-row items-center px-4 py-4 active:bg-gray-50 ${
        !last ? "border-b border-gray-100" : ""
      }`}
      accessibilityRole={onPress ? "button" : undefined}
    >
      <View className="mr-3 h-11 w-11 items-center justify-center rounded-2xl bg-gray-50">
        <Text className="text-xl">{icon}</Text>
      </View>

      <View className="flex-1">
        <Text className="font-semibold text-gray-900">{title}</Text>
        <Text className="mt-1 text-xs text-gray-500">{subtitle}</Text>
      </View>

      {right ?? <Text className="text-2xl text-gray-300">›</Text>}
    </Pressable>
  );
};
export default HistoryOrder;
