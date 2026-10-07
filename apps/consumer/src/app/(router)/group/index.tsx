import ScanTable from "@/app/ScanTable";
import { useRoomStore } from "@/store/useRoomOrder";
import { useStoreShop } from "@/store/useStoreShop";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ป้องกัน การ scan จากที่ไกล
// ได้ครับ ใช้ Location เป็นชั้นป้องกันเพิ่มได้ และตรงกับ requirement ของคุณมากกว่า เพราะต้องการให้คนที่เอารูป QR ไปให้คนนอกสถานที่ สแกนแล้วเข้าไม่ได้
// แต่ allow deep link share

const index = () => {
  const room = useRoomStore((state) => state.room);
  const { shopId, tableId, tableSession, setTableSession } = useStoreShop();
  const members = useRoomStore((state) => state.members);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <SafeAreaView className="  bg-gray-50">
      {room ? (
        <>
          {/* Header */}
          <View className="px-4 pt-2">
            <View className="h-14 flex-row items-center justify-between">
              <View>
                <Text className="text-xl font-bold text-gray-900">
                  Table Room
                </Text>

                <Text className="text-sm text-gray-500">
                  โต๊ะ {room.tableId}
                </Text>
              </View>

              <View className="rounded-full bg-green-100 px-3 py-1">
                <Text className="text-xs font-semibold text-green-700">
                  Active
                </Text>
              </View>
            </View>
          </View>

          {/* Room Info */}
          <View className="mx-4 mt-4 rounded-2xl bg-white p-4 shadow-sm">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-xs text-gray-400">TABLE SESSION</Text>

                <Text className="mt-1 text-base font-semibold text-gray-800">
                  {room.roomId}
                </Text>
              </View>

              <View className="items-center">
                <Text className="text-2xl font-bold text-gray-900">
                  {members.length}
                </Text>

                <Text className="text-xs text-gray-400">คนในโต๊ะ</Text>
              </View>
            </View>
          </View>

          {/* Members */}
          <View className="mx-4 mt-5">
            <Text className="mb-3 text-lg font-bold text-gray-900">
              คนในโต๊ะ
            </Text>

            <View className="overflow-hidden rounded-2xl bg-white">
              {members.map((member, index) => (
                <View
                  key={member.userId}
                  className={`flex-row items-center px-4 py-4 ${
                    index !== members.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  {/* Avatar */}
                  <View className="mr-3 h-11 w-11 items-center justify-center rounded-full bg-gray-100">
                    <Text className="text-base font-bold text-gray-600">
                      {member.name.charAt(0).toUpperCase()}
                    </Text>
                  </View>

                  {/* User */}
                  <View className="flex-1">
                    <Text className="font-semibold text-gray-900">
                      {member.name}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Menu Button */}
          <View className="mx-4 mt-6">
            <Pressable
              onPress={() => router.push("/(router)/menu")}
              className="rounded-2xl bg-black px-5 py-4"
              accessibilityRole="button"
              accessibilityLabel="เปิดเมนูอาหาร"
            >
              <Text className="text-center text-base font-bold text-white">
                🍜 ดูเมนูอาหาร
              </Text>

              <Text className="mt-1 text-center text-xs text-gray-400">
                เลือกอาหารสำหรับโต๊ะนี้
              </Text>
            </Pressable>
          </View>
        </>
      ) : (
        /* Empty State */
        <View className=" mt-40 items-center justify-center px-6">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Text className="text-3xl">📱</Text>
          </View>

          <Text className="mt-5 text-xl font-bold text-gray-900">
            ยังไม่มีโต๊ะ
          </Text>

          <Text className="mt-2 text-center text-sm leading-5 text-gray-500">
            กรุณาสแกน QR Code ที่โต๊ะอาหาร
            {"\n"}
            เพื่อเข้าร่วมโต๊ะและเริ่มสั่งอาหาร
          </Text>
          <View className="mt-10">
            <ScanTable
              shopId={shopId}
              tableId={tableId}
              open={open}
              setOpen={setOpen}
              tableSession={tableSession}
              setTableSession={setTableSession}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default index;
