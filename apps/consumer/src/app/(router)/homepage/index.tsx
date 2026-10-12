import { useMemo, useState } from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  SearchSvg,
  CartSvg,
  UserSvg,
  PlusSvg,
  ArrowRightSvg,
  FoodSvg,
  NoodleSvg,
  DrinkSvg,
  DessertSvg,
  SnackSvg,
  StarSvg,
  ClockSvg,
} from "@/components/AppSvg";
import { useCart } from "@/store/useCart";
import ImageCard from "@/components/ImageCard";
import { Banner } from "@/components/Homepage_Widget/Bannner";
import { SymbolView } from "expo-symbols";
const categories = [
  { id: "1", name: "อาหารจานเดียว", Svg: FoodSvg },
  { id: "2", name: "ก๋วยเตี๋ยว", Svg: NoodleSvg },
  { id: "3", name: "เครื่องดื่ม", Svg: DrinkSvg },
  { id: "4", name: "ของหวาน", Svg: DessertSvg },
  { id: "5", name: "ของทานเล่น", Svg: SnackSvg },
  { id: "6", name: "เมนูแนะนำ", Svg: StarSvg },
];
const popularMenus = [
  {
    id: "1",
    name: "ข้าวกะเพราหมู",
    description: "กะเพราหอม ๆ รสจัดจ้าน",
    price: 60,
    category: "อาหารจานเดียว",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
  },
  {
    id: "2",
    name: "ก๋วยเตี๋ยวหมู",
    description: "น้ำซุปเข้มข้น เส้นเหนียวนุ่ม",
    price: 55,
    category: "ก๋วยเตี๋ยว",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
  },
  {
    id: "3",
    name: "ชาเย็น",
    description: "ชาไทยหอมมัน หวานกำลังดี",
    price: 35,
    category: "เครื่องดื่ม",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600",
  },
  {
    id: "4",
    name: "เฟรนช์ฟรายส์",
    description: "กรอบนอกนุ่มใน",
    price: 49,
    category: "ของทานเล่น",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",
  },
];
const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const { items, addCartItem } = useCart();
  const cartQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const filteredMenus = useMemo(() => {
    return popularMenus.filter((menu) => {
      const matchSearch = menu.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategory =
        selectedCategory === "ทั้งหมด" || menu.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  const handleAddToCart = (menu: (typeof popularMenus)[number]) => {
    // ปรับโครงสร้างข้อมูลให้ตรงกับ CartItem ของโปรเจกต์
    addCartItem({
      id: menu.id,
      menuItem: {
        id: menu.id,
        name: menu.name,
        price: menu.price,
        category: menu.category,
        description: menu.description,
        image: menu.image,
        status: "available",
      },
      quantity: 1,
    });
  };
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5  ">
          <View>
            <ImageCard
              contentFit="cover"
              transition={0}
              url={require("@/assets/menuGet_logo.png")}
              style={{ width: 100, height: 50 }}
            />
          </View>
          <View className="flex-row items-center gap-3">
            <Pressable
              onPress={() => router.push("/order")}
              className="relative h-12 w-12 items-center justify-center rounded-2xl  border border-gray-100 shadow bg-white/90"
            >
              <SymbolView name={"qrcode"} tintColor="#000000" />
            </Pressable>
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
                    <Pressable
                      onPress={() => handleAddToCart(menu)}
                      className="h-9 w-9 items-center justify-center rounded-xl bg-orange-500"
                    >
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
