import { SymbolView } from "expo-symbols";
import { View, Text, Pressable, Modal, Button } from "react-native";
import {
  CameraView,
  useCameraPermissions,
  BarcodeScanningResult,
} from "expo-camera";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { showNotification } from "@/lib/showNotification";

type ScanTableProps = {
  open: boolean;
  shopId: string | null;
  tableId: string | null;
  tableSession: string | null;

  setOpen: (value: boolean) => void;
  setShopId: (value: string | null) => void;
  setTableId: (value: string | null) => void;
  setTableSession: (value: string | null) => void;
};
const ScanTable = ({
  open,
  setOpen,
  setShopId,
  shopId,
  tableId,
  setTableId,
  setTableSession,
  tableSession,
}: ScanTableProps) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const scanningRef = useRef(false);

  // mock api shop name
  const shopName = "ครัวคุณต๋อย";
  const handleScan = async (data: string) => {
    try {
      const url = new URL(data);
      const shopId = url.searchParams.get("shopId");
      const tableId = url.searchParams.get("tableId");
      const tableSession = url.searchParams.get("tableSession");

      if (!shopId || !tableId || !tableSession) {
        console.log("!shopId || !tableId || !tableSession ");
        await showNotification(
          "QR Code ไม่ถูกต้อง ❌",
          "กรุณาสแกน QR Code ของโต๊ะอีกครั้ง",
        );

        return;
      }
      setShopId(shopId);
      setTableId(tableId);
      setTableSession(tableSession);
      setScanned(true);

      await showNotification(
        `${shopName} ยินดีต้อนรับ`,
        `คุณอยู่โต๊ะ ${tableId}`,
      );
    } catch (error) {
      await showNotification("สแกนไม่สำเร็จ ❌", "โปรดลองอีกครั้ง");
    }
  };

  const handleBarcodeScanned = ({ data }: BarcodeScanningResult) => {
    if (scanningRef.current) {
      return;
    }

    if (scanned) {
      return;
    }
    handleScan(data);
  };

  return (
    <View className="flex-1 ">
      <Pressable onPress={() => setOpen(true)}>
        <Text className="text-[8px] text-center animate-ping">Get Menu</Text>
        <View className="border shadow border-gray-300 p-2  rounded-full">
          <SymbolView name="qrcode" tintColor={"blue"} size={28} />
        </View>
      </Pressable>
      {/* Drawer / Modal */}
      <Modal
        visible={open}
        animationType="slide"
        transparent
        onRequestClose={() => {
          setOpen(false);
          setScanned(false);
        }}
      >
        <View className="flex-1 justify-end bg-black/40">
          <View className="rounded-t-3xl bg-white px-5 pb-10 pt-5">
            {/* Handle */}
            <View className="mb-6 items-center">
              <View className="h-1.5 w-12 rounded-full bg-slate-300" />
            </View>

            <Text className="text-2xl font-bold">Scan QR Code</Text>

            <Text className="mt-2 text-slate-500">
              สแกน QR Code ที่โต๊ะของคุณ
            </Text>

            {/* Camera */}
            {!scanned && (
              <View className="mt-6 h-64 overflow-hidden rounded-3xl">
                {!permission ? (
                  <View className="flex-1 items-center justify-center bg-slate-900">
                    <Text className="text-white">Loading camera...</Text>
                  </View>
                ) : !permission.granted ? (
                  <View className="flex-1 items-center justify-center bg-slate-900 px-5">
                    <Text className="mb-4 text-center text-white">
                      ต้องอนุญาตให้แอปใช้กล้องก่อน
                    </Text>

                    <Button title="เปิดกล้อง" onPress={requestPermission} />
                  </View>
                ) : (
                  <CameraView
                    style={{ flex: 1 }}
                    facing="back"
                    barcodeScannerSettings={{
                      barcodeTypes: ["qr"],
                    }}
                    onBarcodeScanned={handleBarcodeScanned}
                  />
                )}
              </View>
            )}

            {/* Result */}
            {shopId && tableId && tableSession && (
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
                    setOpen(false);
                  }}
                >
                  <Text className="text-center font-semibold text-white">
                    ไปที่เมนู
                  </Text>
                </Pressable>
              </View>
            )}

            {/* Close */}
            <Pressable
              className="mt-5 rounded-2xl border border-slate-300 p-4"
              onPress={() => {
                setOpen(false);
                setShopId(null);
                setTableId(null);
                setTableSession(null);
                setScanned(false);
              }}
            >
              <Text className="text-center font-semibold">ปิด</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ScanTable;
