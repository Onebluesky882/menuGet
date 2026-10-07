import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

type Props = {
  shopId: string;
  tableId: string;
  tableSession: string;
  pathName: string;
  setOpen: (toggle: boolean) => void;
};

export const TableReservedCard = ({
  shopId,
  tableId,
  tableSession,
  pathName,
  setOpen,
}: Props) => {
  const router = useRouter();
  return (
    <View className="mt-5 rounded-2xl bg-slate-100 p-5">
      <Text className="text-lg font-bold">Scan สำเร็จ ✓</Text>

      <Text className="mt-3 text-slate-500">ร้าน</Text>

      <Text className="text-lg font-semibold">{shopId}</Text>

      <Text className="mt-3 text-slate-500">โต๊ะ</Text>

      <Text className="text-lg font-semibold">{tableId}</Text>

      <Text className="mt-3 text-slate-500">Session</Text>

      <Text className="text-lg font-semibold">{tableSession}</Text>

      <Text className="mt-4 text-slate-500">Link</Text>

      <Text className="text-blue-600">
        /menu?shopId={shopId}&tableId={tableId}
      </Text>

      <Pressable
        className="mt-5 rounded-2xl bg-black p-4"
        onPress={() => {
          router.push("/(router)/menu");
          setOpen(false);
        }}
      >
        <Text className="text-center font-semibold text-white">ไปที่เมนู</Text>
      </Pressable>
    </View>
  );
};
