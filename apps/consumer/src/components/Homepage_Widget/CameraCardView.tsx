import { CameraView, PermissionResponse } from "expo-camera";
import { Pressable, View, Text, Button } from "react-native";
import { TableReservedCard } from "./TableReservedCard";
import { SymbolView } from "expo-symbols";
import { Background } from "expo-router/build/react-navigation";
import { hapticLight } from "@/lib/haptic";

type Props = {
  scanned: boolean;
  permission: PermissionResponse | null;
  requestPermission: () => void;
  handleBarcodeScanned: (data: any) => void;

  shopId: string | null;
  tableId: string | null;
  tableSession: string | null;

  setOpen: (value: boolean) => void;
  setScanned: (value: boolean) => void;
  clearShop: () => void;
};
export const CameraCard = ({
  scanned,
  shopId,
  tableId,
  tableSession,
  permission,
  requestPermission,
  handleBarcodeScanned,
  setOpen,
  setScanned,
  clearShop,
}: Props) => {
  return (
    <View className="flex-1 justify-end bg-black/40">
      <View className="rounded-t-3xl bg-white px-5 pb-10 pt-5">
        {/* Handle */}
        <View className="mb-6 items-center">
          <View className="h-1.5 w-12 rounded-full bg-slate-300" />
        </View>

        <Text className="text-2xl font-bold">Scan Table</Text>

        {/* Close button: top right */}
        <Pressable
          style={({ pressed }) =>
            pressed ? { backgroundColor: "white" } : undefined
          }
          onPress={() => {
            setOpen(false);
            hapticLight();
            setScanned(false);
          }}
          className="absolute right-3 top-3 z-50 h-7 w-7 items-center justify-center rounded-full bg-black/80 border border-white/30"
          hitSlop={10}
        >
          <SymbolView name="xmark" tintColor="#FFFFFF" size={20} />
        </Pressable>
        <Text className="mt-2 text-slate-500">สแกน QR Code ที่โต๊ะของคุณ</Text>

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
        {shopId && (
          <TableReservedCard
            setOpen={setOpen}
            shopId={shopId}
            tableId={tableId ?? ""}
            tableSession={tableSession ?? ""}
          />
        )}

        {/* clear */}
        {!shopId ? (
          <Pressable
            className="    mt-5 rounded-2xl border border-slate-300 p-4"
            onPress={() => {
              setOpen(false);
              setScanned(false);
              hapticLight();
            }}
          >
            <Text className="text-center   font-semibold">ปิด</Text>
          </Pressable>
        ) : (
          <Pressable
            className=" bg-red-500  mt-5 rounded-2xl border border-slate-300 p-4"
            onPress={() => {
              setOpen(false);
              setScanned(false);
              clearShop();
            }}
          >
            <Text className="text-center text-white font-semibold">
              เครียข้อมูล
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};
