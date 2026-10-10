import { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
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
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pb-4 pt-3">
          <View>
            <Text className="text-3xl font-extrabold tracking-tight text-orange-500">
              MenuGET
            </Text>
            <Text className="mt-1 text-sm text-gray-500">
              อร่อยง่าย ๆ ในทุกวัน
            </Text>
          </View>
          <View className="flex-row items-center gap-3">
            <Pressable
              onPress={() => router.push("/order")}
              className="relative h-12 w-12 items-center justify-center rounded-2xl bg-orange-500"
            >
              <CartSvg size={23} />
              {cartQuantity > 0 && (
                <View className="absolute -right-1 -top-1 min-w-5 items-center rounded-full bg-red-500 px-1">
                  <Text className="text-xs font-bold text-white">
                    {cartQuantity}
                  </Text>
                </View>
              )}
            </Pressable>
            <Pressable
              onPress={() => router.push("/profile")}
              className="h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white"
            >
              <UserSvg size={23} />
            </Pressable>
          </View>
        </View>
        {/* Welcome */}
        <View className="px-5 pb-4">
          <Text className="text-2xl font-bold text-gray-900">
            วันนี้อยากกินอะไร?
          </Text>
          <Text className="mt-1 text-gray-500">เลือกเมนูโปรดของคุณได้เลย</Text>
        </View>
        {/* Search */}
        <View className="mx-5 mb-5 flex-row items-center rounded-2xl border border-gray-100 bg-white px-4 py-1">
          <SearchSvg />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="ค้นหาเมนูอาหาร..."
            placeholderTextColor="#9CA3AF"
            className="ml-3 h-12 flex-1 text-base text-gray-900"
            returnKeyType="search"
          />
        </View>
        {/* Promotion Banner */}
        <View className="mx-5 mb-7 overflow-hidden rounded-3xl bg-orange-500">
          <View className="flex-row items-center">
            <View className="flex-1 p-5">
              <View className="self-start rounded-full bg-white/20 px-3 py-1">
                <Text className="text-xs font-bold text-white">
                  MENU OF THE DAY
                </Text>
              </View>
              <Text className="mt-3 text-2xl font-extrabold text-white">
                อร่อยครบ
              </Text>
              <Text className="text-2xl font-extrabold text-white">
                จบในที่เดียว
              </Text>
              <Text className="mt-2 text-sm text-white/90">
                ค้นหาเมนูโปรด แล้วสั่งได้เลย
              </Text>
              <Pressable
                onPress={() => router.push("/menu")}
                className="mt-4 flex-row items-center self-start rounded-xl bg-white px-4 py-3"
              >
                <Text className="mr-2 font-bold text-orange-600">
                  ดูเมนูทั้งหมด
                </Text>
                <ArrowRightSvg size={16} color="#EA580C" />
              </Pressable>
            </View>
            <View className="w-24 items-center justify-center pr-4">
              <Text className="text-7xl">🍜</Text>
            </View>
          </View>
        </View>
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
