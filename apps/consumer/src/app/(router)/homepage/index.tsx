import { useMemo, useState } from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { PlusSvg, ClockSvg } from "@/components/AppSvg";
import ImageCard from "@/components/ImageCard";
import { Banner } from "@/components/Homepage_Widget/Bannner";
import { SymbolView } from "expo-symbols";
import ScanTable from "@/app/ScanTable/ScanTable";
import { categories, popularMenus } from "@/Mock/MockHomepage";
import { useStoreShop } from "@/store/useStoreShop";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const filteredMenus = useMemo(() => {
    return popularMenus.filter((menu) => {
      const matchSearch = menu.name.toLowerCase();

      const matchCategory =
        selectedCategory === "ทั้งหมด" || menu.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [selectedCategory]);
  const [openScanTable, setOpenScanTable] = useState(false);
  const { shopId, tableId, tableSession, setTableSession } = useStoreShop();
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5    ">
          <View>
            <ImageCard
              contentFit="cover"
              transition={0}
              url={require("@/assets/menuGet_logo.png")}
              style={{ width: 100, height: 50 }}
            />
          </View>
          <View className="">
            <View className=" ">
              <Pressable
                className="flex-1 border border-gray-100 bg-background/90 shadow-2xl rounded-xl p-2"
                onPress={(event) => {
                  event.stopPropagation();
                  setOpenScanTable((prev) => !prev);
                }}
              >
                <SymbolView name={"qrcode"} tintColor="#000000" />
              </Pressable>
              <ScanTable
                shopId={shopId}
                tableId={tableId}
                open={openScanTable}
                setOpen={setOpenScanTable}
                tableSession={tableSession}
                setTableSession={setTableSession}
              />
            </View>
          </View>
        </View>
        {/* Banner */}

        <Banner />

        {/* Promotion Banner */}

        {/* Categories */}
        <View className="mb-7">
          <View className="mb-4 flex-row items-center justify-between px-5">
            <Text className="text-xl font-extrabold text-gray-900">
              หมวดหมู่อาหาร
            </Text>
            <Pressable onPress={() => router.push("/menu")}>
              <Text className="font-semibold text-orange-500">ดูทั้งหมด</Text>
            </Pressable>
          </View>
          <View className="flex-row flex-wrap px-3">
            {categories.map(({ id, name, Svg }) => (
              <Pressable
                key={id}
                onPress={() => {
                  setSelectedCategory(
                    selectedCategory === name ? "ทั้งหมด" : name,
                  );
                }}
                className="w-1/3 items-center px-2 py-2"
              >
                <View
                  className={`h-16 w-16 items-center justify-center rounded-2xl border ${
                    selectedCategory === name
                      ? "border-orange-400 bg-orange-100"
                      : "border-gray-100 bg-white"
                  }`}
                >
                  <Svg size={30} />
                </View>
                <Text
                  className={`mt-2 text-center text-xs font-semibold ${
                    selectedCategory === name
                      ? "text-orange-600"
                      : "text-gray-600"
                  }`}
                >
                  {name}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
        {/* Popular Menus */}
        <View className="px-5">
          <View className="mb-4 flex-row items-center justify-between">
            <View>
              <Text className="text-xl font-extrabold text-gray-900">
                เมนูยอดนิยม
              </Text>
              <Text className="mt-1 text-sm text-gray-500">
                เมนูที่อยากให้คุณลอง
              </Text>
            </View>
            <Pressable onPress={() => router.push("/menu")}>
              <Text className="font-semibold text-orange-500">ดูทั้งหมด</Text>
            </Pressable>
          </View>
          <View className="flex-row flex-wrap justify-between">
            {filteredMenus.map((menu) => (
              <View
                key={menu.id}
                className="mb-4 w-[48%] overflow-hidden rounded-2xl border border-gray-100 bg-white"
              >
                <Image
                  source={{ uri: menu.image }}
                  className="h-32 w-full bg-gray-200"
                  resizeMode="cover"
                />
                <View className="p-3">
                  <Text
                    numberOfLines={1}
                    className="text-base font-bold text-gray-900"
                  >
                    {menu.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    className="mt-1 h-9 text-xs leading-4 text-gray-500"
                  >
                    {menu.description}
                  </Text>
                  <View className="mt-3 flex-row items-center justify-between">
                    <Text className="text-lg font-extrabold text-orange-600">
                      ฿{menu.price}
                    </Text>
                    <Pressable className="h-9 w-9 items-center justify-center rounded-xl bg-orange-500">
                      <PlusSvg size={19} />
                    </Pressable>
                  </View>
                </View>
              </View>
            ))}
          </View>
          {filteredMenus.length === 0 && (
            <View className="items-center py-10">
              <Text className="text-base text-gray-500">ไม่พบเมนูที่ค้นหา</Text>
            </View>
          )}
        </View>
        {/* Footer */}
        <View className="mx-5 mt-2 rounded-2xl bg-gray-100 p-4">
          <View className="flex-row items-center">
            <ClockSvg size={18} />
            <Text className="ml-2 text-sm text-gray-600">
              เลือกเมนูได้ตามใจ พร้อมสั่งได้ทุกเมื่อ
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
