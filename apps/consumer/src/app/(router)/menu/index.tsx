import { CartModal } from "@/components/Menu/CartModal";
import { MenuItemCard } from "@/components/Menu/MenuItemCard";
import { MenuSearch } from "@/components/Menu/MenuSearch";
import { RestaurantHeader } from "@/components/Menu/RestaurantHeader";
import { categories, menus } from "@/Mock/MockShopMenu";
import { useCart } from "@/store/useCart";
import { useStoreShop } from "@/store/useStoreShop";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const ShopMenu = () => {
  const [open, setOpen] = useState(false);
  // if no shop ให้แสกน qr ก่อน เอาแค่ shopId เพื่อคนอยากแสกนดูแค่เมนู หรือสั่งกลับบ้าน

  /* 
  todo tempory comment close feature */
  // if (!shopId) {
  //   return (
  //     <SafeAreaView>
  //       <View className="mt-75 justify-center items-center gap-5">
  //         <SymbolView name="graduationcap" tintColor={"blue"} size={28} />
  //         <Text className=" ">กรุณาสแกน QR Code ของร้าน</Text>
  //         <View className="items-center ">
  //           <ScanTable
  //             shopId={shopId}
  //             tableId={tableId}
  //             open={open}
  //             setOpen={setOpen}
  //             tableSession={tableSession}
  //             setTableSession={setTableSession}
  //           />
  //         </View>
  //       </View>
  //     </SafeAreaView>
  //   );
  // }

  const { shopId } = useStoreShop();

  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [search, setSearch] = useState("");

  const {
    addCartItem,
    removeCartItem,
    clearCart,
    items,
    orderType,
    setOrderType,
  } = useCart();

  const filteredMenus = menus.filter((menu) => {
    const matchCategory =
      selectedCategory === "ทั้งหมด" || menu.category === selectedCategory;

    const matchSearch = menu.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
      <SafeAreaView style={{ marginBottom: -20 }} className=" bg-slate-50 ">
        <RestaurantHeader shopId={shopId} />
      </SafeAreaView>

      {/* Search */}
      <MenuSearch search={search} setSearch={setSearch} />

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

      {/* Menu Section */}

      <View className="flex-1 px-5 pt-4">
        {/* Menu Header */}

        <View className="mb-2 flex-row items-end justify-between">
          <View>
            <Text className="text-xl font-bold text-slate-900">เมนูแนะนำ</Text>
          </View>

          <Text className="text-sm text-slate-400">
            {filteredMenus.length} รายการ
          </Text>
        </View>

        {/* Menu List */}

        <FlashList
          data={filteredMenus}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MenuItemCard addCartItem={addCartItem} menu={item} />
          )}
        />
      </View>

      {/* Floating Cart */}

      {items.length > 0 && (
        <View className="absolute bottom-4 right-4 z-10 rounded-full bg-amber-200">
          <Pressable
            className="flex-row items-center justify-center rounded-full px-5 py-4"
            onPress={() => setOpen(true)}
          >
            <Text className="font-bold text-slate-900">
              🛒 ตะกร้า ({items.length})
            </Text>
          </Pressable>
        </View>
      )}

      {/* Cart Modal */}
      <CartModal setOpen={setOpen} open={open} items={items} />
    </>
  );
};

// want มีปุ่ม slice เห็นแต่เมนูใหญ่ๆๆ ด้วย video เลื่อน feed story และมีแถบเมนูข้างๆๆ  และมี ปุ่มสั่ง
// want onPress ภาพ แล้วขึ้น video
// filter เลือกเนื้อสัตว์ อะไร เป็น default dropdown
// want เลือก option

export default ShopMenu;
