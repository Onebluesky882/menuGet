import ScanTable from "@/app/scanTable";
import TableQRCode from "@/lib/qrCodeGenerator";
import { useRoomStore } from "@/store/useRoomEvent";
import { useStoreShop } from "@/store/useStoreShop";
import { FlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const room = useRoomStore((state) => state.room);
  const { shopId, tableId, tableSession, setTableSession } = useStoreShop();
  const members = useRoomStore((state) => state.members);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: "#FBFBFB",
        marginTop: -48,
        marginBottom: -85,
      }}
    >
      <SafeAreaView>
        {/* QR Code */}
        <View className="mx-4 mt-3 overflow-hidden rounded-3xl border border-gray-100 bg-white p-4">
          <View className="mb-3">
            <Text className="text-base font-bold text-gray-900">
              QR Code สำหรับโต๊ะ
            </Text>
            <Text className="mt-1 text-sm text-gray-500">
              สแกนเพื่อเข้าร่วมโต๊ะและสั่งอาหาร
            </Text>
          </View>

          <View className="items-center">
            <TableQRCode />
          </View>
        </View>

        {room ? (
          <>
            {/* Header */}
            <View className="px-4 pt-6">
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-2xl font-bold text-gray-900">
                    Table Room
                  </Text>
                  <Text className="mt-1 text-sm text-gray-500">
                    พื้นที่สั่งอาหารร่วมกัน
                  </Text>
                </View>

                <View className="flex-row items-center rounded-full bg-green-100 px-3 py-2">
                  <View className="mr-2 h-2 w-2 rounded-full bg-green-500" />
                  <Text className="text-xs font-semibold text-green-700">
                    Active
                  </Text>
                </View>
              </View>
            </View>

            {/* Room Info */}
            <View className="mx-4 mt-5 rounded-3xl bg-white p-5 shadow-sm">
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-xs font-medium tracking-widest text-gray-400">
                    TABLE SESSION
                  </Text>

                  <Text className="mt-2 text-lg font-bold text-gray-900">
                    โต๊ะ {room.tableId}
                  </Text>

                  <Text className="mt-1 text-xs text-gray-400">
                    Session ID: {room.roomId}
                  </Text>
                </View>

                <View className="ml-4 h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
                  <Text className="text-3xl">🍽️</Text>
                </View>
              </View>

              <View className="my-4 h-px bg-gray-100" />

              <View className="flex-row items-center">
                <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <Text className="text-lg">👥</Text>
                </View>

                <View className="flex-1">
                  <Text className="text-sm font-semibold text-gray-900">
                    สมาชิกในโต๊ะ
                  </Text>
                  <Text className="mt-1 text-xs text-gray-500">
                    ผู้ร่วมโต๊ะทั้งหมด
                  </Text>
                </View>

                <View className="rounded-xl bg-gray-100 px-4 py-2">
                  <Text className="text-lg font-bold text-gray-900">
                    {members.length}
                  </Text>
                </View>
              </View>
            </View>

            {/* Members */}
            <View className="mx-4 mt-6">
              <View className="mb-3 flex-row items-center justify-between">
                <Text className="text-lg font-bold text-gray-900">
                  คนในโต๊ะ
                </Text>

                <Text className="text-sm text-gray-400">
                  {members.length} คน
                </Text>
              </View>

              <View className="overflow-hidden rounded-3xl bg-white">
                {members.length > 0 ? (
                  <FlashList
                    data={members}
                    keyExtractor={(member) => String(member.userId)}
                    scrollEnabled={false}
                    renderItem={({ item: member, index }) => (
                      <View
                        className={`flex-row items-center px-4 py-4 ${
                          index !== members.length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }`}
                      >
                        {/* Avatar */}
                        <View className="mr-3 h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                          <Text className="text-lg font-bold text-orange-700">
                            {member.name.charAt(0).toUpperCase()}
                          </Text>
                        </View>

                        {/* User */}
                        <View className="flex-1">
                          <Text className="text-base font-semibold text-gray-900">
                            {member.name}
                          </Text>
                          <Text className="mt-1 text-xs text-gray-400">
                            สมาชิกในโต๊ะ
                          </Text>
                        </View>

                        <View className="rounded-full bg-green-50 px-3 py-1">
                          <Text className="text-xs font-medium text-green-700">
                            เข้าร่วมแล้ว
                          </Text>
                        </View>
                      </View>
                    )}
                  />
                ) : (
                  <View className="items-center px-4 py-8">
                    <Text className="text-sm text-gray-400">
                      ยังไม่มีสมาชิกคนอื่นในโต๊ะ
                    </Text>
                  </View>
                )}
              </View>
            </View>

            {/* Menu Button */}
            <View className="mx-4 mt-6">
              <Pressable
                onPress={() => router.push("/(router)/menu")}
                className="rounded-3xl bg-gray-900 px-5 py-5 active:bg-gray-800"
                accessibilityRole="button"
                accessibilityLabel="เปิดเมนูอาหาร"
              >
                <View className="flex-row items-center">
                  <View className="mr-4 h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <Text className="text-3xl">🍜</Text>
                  </View>

                  <View className="flex-1">
                    <Text className="text-lg font-bold text-white">
                      ดูเมนูอาหาร
                    </Text>
                    <Text className="mt-1 text-sm text-gray-400">
                      เลือกอาหารสำหรับโต๊ะนี้
                    </Text>
                  </View>

                  <Text className="text-2xl text-white">›</Text>
                </View>
              </Pressable>
            </View>

            {/* Footer Info */}
            <View className="mx-4 mt-4 rounded-2xl bg-orange-50 p-4">
              <Text className="text-sm font-semibold text-orange-900">
                💡 สั่งอาหารร่วมกันได้
              </Text>
              <Text className="mt-1 text-xs leading-5 text-orange-800">
                สมาชิกทุกคนสามารถเลือกอาหารสำหรับโต๊ะนี้ได้
                ตรวจสอบรายการอาหารก่อนยืนยันการสั่งซื้อ
              </Text>
            </View>
          </>
        ) : (
          /* Empty State */
          <View className="items-center px-6 pb-10 pt-12">
            <View className="h-24 w-24 items-center justify-center rounded-3xl bg-orange-100">
              <Text className="text-5xl">📱</Text>
            </View>

            <Text className="mt-6 text-2xl font-bold text-gray-900">
              ยังไม่มีโต๊ะ
            </Text>

            <Text className="mt-2 text-center text-sm leading-6 text-gray-500">
              กรุณาสแกน QR Code ที่โต๊ะอาหาร
              {"\n"}
              เพื่อเข้าร่วมโต๊ะและเริ่มสั่งอาหาร
            </Text>

            <View className="mt-8 w-full">
              <ScanTable
                shopId={shopId}
                tableId={tableId}
                open={open}
                setOpen={setOpen}
                tableSession={tableSession}
                setTableSession={setTableSession}
              />
            </View>

            <View className="mt-6 w-full rounded-2xl bg-white p-4">
              <Text className="text-sm font-semibold text-gray-800">
                วิธีใช้งาน
              </Text>

              <View className="mt-4 flex-row items-center">
                <View className="mr-3 h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                  <Text className="font-bold text-orange-700">1</Text>
                </View>
                <Text className="flex-1 text-sm text-gray-600">
                  สแกน QR Code ของโต๊ะอาหาร
                </Text>
              </View>

              <View className="mt-3 flex-row items-center">
                <View className="mr-3 h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                  <Text className="font-bold text-orange-700">2</Text>
                </View>
                <Text className="flex-1 text-sm text-gray-600">
                  เข้าร่วม Table Room
                </Text>
              </View>

              <View className="mt-3 flex-row items-center">
                <View className="mr-3 h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                  <Text className="font-bold text-orange-700">3</Text>
                </View>
                <Text className="flex-1 text-sm text-gray-600">
                  เลือกเมนูและสั่งอาหาร
                </Text>
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default index;
