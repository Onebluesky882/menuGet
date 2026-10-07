import { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScanTable from "@/app/ScanTable";
import { Banner } from "@/components/Homepage_Widget/Bannner";
import { Menu } from "@/components/Homepage_Widget/Menu";
import TableQRCode from "@/lib/qrCodeGenerator";
import { useStoreShop } from "@/store/useStoreShop";

const menu = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
];

const Homepage = () => {
  const [open, setOpen] = useState(false);

  const { shopId, tableId, tableSession, setTableSession } = useStoreShop();

  return (
    <>
      <SafeAreaView
        style={{
          paddingRight: 8,
          paddingLeft: 8,
          marginBottom: -20,
        }}
      >
        <View className="border h-10 items-center flex-row justify-between w-full">
          <Text> logo </Text>
          <Text> option </Text>
        </View>
      </SafeAreaView>
      <View className=" px-2 gap-2 relative  flex-1 ">
        <View className="flex items-center justify-center gap-2">
          {/* Banner */}
          <Banner />

          {/* shop */}
          <View className="  w-full ">
            <View className="flex-row flex-wrap ">
              {menu.map((i) => (
                <Menu key={i.name} item={i.name} />
              ))}
            </View>
          </View>
        </View>

        <View>
          <Text className="text-center p-2 underline">ตัวอย่าง qrcode </Text>
          <TableQRCode />
        </View>

        {/* test click to menu */}
        <View>
          <Text>Shop : {shopId}</Text>
        </View>
        {/* ScanTable */}
        <View className=" absolute  bottom-0 right-0 flex justify-center mr-3 mb-3 gap-1 ">
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
    </>
  );
};

export default Homepage;
