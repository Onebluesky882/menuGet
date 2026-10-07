import ScanTable from "@/app/ScanTable";
import { useStoreShop } from "@/store/useStoreShop";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MockShopMenu from "../../../Mock/MockShopMenu";
const ShopMenu = () => {
  const { shopId, tableId, tableSession, setTableSession } = useStoreShop();

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
  return <MockShopMenu />;
};


// want มีปุ่ม slice เห็นแต่เมนูใหญ่ๆๆ ด้วย video เลื่อน feed story และมีแถบเมนูข้างๆๆ  และมี ปุ่มสั่ง
// want onPress ภาพ แล้วขึ้น video 
// filter เลือกเนื้อสัตว์ อะไร เป็น default dropdown 
// want เลือก option
export default ShopMenu;
