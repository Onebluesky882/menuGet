import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { Pressable, ScrollView, TextInput, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStoreShop } from "@/store/useStoreShop";

const categories = [
  "ทั้งหมด",
  "อาหารจานเดียว",
  "ก๋วยเตี๋ยว",
  "ของทานเล่น",
  "เครื่องดื่ม",
];

const menus = [
  {
    id: "1",
    name: "กะเพราหมูกรอบ",
    description: "หมูกรอบผัดกะเพรา เสิร์ฟพร้อมข้าวสวย",
    price: 65,
    category: "อาหารจานเดียว",
    image: "🍳",
  },
  {
    id: "2",
    name: "ข้าวกะเพราไก่",
    description: "ไก่สับผัดกะเพรา รสจัดจ้าน",
    price: 55,
    category: "อาหารจานเดียว",
    image: "🍚",
  },
  {
    id: "3",
    name: "ก๋วยเตี๋ยวต้มยำ",
    description: "น้ำต้มยำเข้มข้น หมูและลูกชิ้น",
    price: 60,
    category: "ก๋วยเตี๋ยว",
    image: "🍜",
  },
  {
    id: "4",
    name: "ก๋วยเตี๋ยวน้ำตก",
    description: "น้ำซุปเข้มข้น พร้อมหมูสดและลูกชิ้น",
    price: 55,
    category: "ก๋วยเตี๋ยว",
    image: "🍜",
  },
  {
    id: "5",
    name: "เกี๊ยวทอด",
    description: "เกี๊ยวทอดกรอบ เสิร์ฟพร้อมน้ำจิ้ม",
    price: 45,
    category: "ของทานเล่น",
    image: "🥟",
  },
  {
    id: "6",
    name: "ชาไทยเย็น",
    description: "ชาไทยเข้มข้น หอมหวานกำลังดี",
    price: 35,
    category: "เครื่องดื่ม",
    image: "🧋",
  },
];

const MockShopMenu = () => {
  const { shopId } = useStoreShop();

  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const filteredMenus = menus.filter((menu) => {
    const matchCategory =
      selectedCategory === "ทั้งหมด" || menu.category === selectedCategory;

    const matchSearch = menu.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-slate-50">
      <View className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 110 }}
        >
          {/* Restaurant Header */}
          <View className="bg-white px-5 pb-5 pt-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-2xl font-bold text-slate-900">
                  ครัวคุณต๋อย
                </Text>

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

            {/* Shop ID */}
            <View className="mt-4 rounded-xl bg-slate-100 px-4 py-3">
              <Text className="text-xs text-slate-400">SHOP ID</Text>
              <Text className="mt-1 font-medium text-slate-700">
                {shopId ?? "MOCK-SHOP-001"}
              </Text>
            </View>
          </View>

          {/* Search */}
          <View className="px-5 pt-5">
            <View className="flex-row items-center rounded-2xl bg-white px-4">
              <SymbolView name="magnifyingglass" size={18} tintColor="gray" />

              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="ค้นหาเมนู..."
                placeholderTextColor="#94a3b8"
                className="ml-3 flex-1 py-4 text-base text-slate-900"
              />
            </View>
          </View>

          {/* Categories */}
          <View className="mt-5">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 20 }}
            >
              {categories.map((category) => {
                const active = selectedCategory === category;

                return (
                  <Pressable
                    key={category}
                    onPress={() => setSelectedCategory(category)}
                    className={`mr-3 rounded-full px-5 py-3 ${
                      active ? "bg-slate-900" : "bg-white"
                    }`}
                  >
                    <Text
                      className={`font-medium ${
                        active ? "text-white" : "text-slate-600"
                      }`}
                    >
                      {category}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>

          {/* Menu */}
          <View className="px-5 pt-6">
            <View className="mb-4 flex-row items-end justify-between">
              <View>
                <Text className="text-xl font-bold text-slate-900">
                  เมนูแนะนำ
                </Text>

                <Text className="mt-1 text-sm text-slate-400">
                  เลือกเมนูที่คุณชอบ
                </Text>
              </View>

              <Text className="text-sm text-slate-400">
                {filteredMenus.length} รายการ
              </Text>
            </View>

            {filteredMenus.map((menu) => (
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
                      onPress={() => setCartCount((count) => count + 1)}
                      className="h-9 w-9 items-center justify-center rounded-full bg-slate-900"
                    >
                      <Text className="text-xl font-medium text-white">+</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Floating Cart */}
        {cartCount > 0 && (
          <View className="absolute bottom-5 left-5 right-5">
            <Pressable className="flex-row items-center justify-between rounded-2xl bg-slate-900 px-5 py-4">
              <View className="flex-row items-center">
                <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
                  <Text className="font-bold text-slate-900">{cartCount}</Text>
                </View>

                <Text className="ml-3 font-semibold text-white">
                  ดูตะกร้าของฉัน
                </Text>
              </View>

              <Text className="font-semibold text-white">ดูตะกร้า →</Text>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MockShopMenu;
