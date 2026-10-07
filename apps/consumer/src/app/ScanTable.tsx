import { SymbolView } from "expo-symbols";
import { View, Text, Pressable, Modal, Button } from "react-native";
import { useCameraPermissions, BarcodeScanningResult } from "expo-camera";
import { useRef, useState } from "react";
import { showNotification } from "@/lib/showNotification";
import Animated from "react-native-reanimated";
import { usePulse } from "@/hooks/animation/useAnimation";
import { CameraCard } from "../components/Homepage_Widget/CameraCardView";
import { useRoomStore } from "@/store/useRoomEvent";

type ScanTableProps = {
  open: boolean;
  shopId: string | null;
  tableId: string | null;
  tableSession: string | null;

  setOpen: (value: boolean) => void;
  setTableSession: (
    shopId: string,
    tableId: string | null,
    tableSession: string | null,
  ) => void;
};
const ScanTable = ({
  open,
  setOpen,
  shopId,
  tableId,
  setTableSession,
  tableSession,
}: ScanTableProps) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const scanningRef = useRef(false);
  const pulseStyle = usePulse();

  const setRoom = useRoomStore((state) => state.setRoom);
  const setMembers = useRoomStore((state) => state.setMembers);

  // mock api shop name
  const handleScan = async (data: string) => {
    try {
      const url = new URL(data);
      const shopId = url.searchParams.get("shopId");
      const tableId = url.searchParams.get("tableId");
      const tableSession = url.searchParams.get("tableSession");

      if (!shopId) {
        await showNotification(
          "QR Code ไม่ถูกต้อง ❌",
          "กรุณาสแกน QR Code ของโต๊ะอีกครั้ง",
        );
        return;
      }
      setTableSession(shopId, tableId, tableSession);
      setScanned(true);
      if (tableId) {
        setRoom({
          roomId: "test",
          shopId,
          tableId,
        });
        setMembers([
          {
            userId: "user-001",
            name: "tob",
          },
          {
            userId: "user-002",
            name: "jane",
          },
          {
            userId: "user-002",
            name: "joy",
          },
        ]);
      }
      await showNotification(
        `${shopId} ยินดีต้อนรับ`,
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
    <View className="flex-1">
      <Pressable onPress={() => setOpen(true)}>
        <Animated.View style={pulseStyle}>
          <Text className="text-center text-[8px] pb-1">Get Menu</Text>
        </Animated.View>
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
        <CameraCard
          handleBarcodeScanned={handleBarcodeScanned}
          permission={permission}
          requestPermission={requestPermission}
          scanned={scanned}
          setOpen={setOpen}
          setScanned={setScanned}
          shopId={shopId}
          tableId={tableId}
          tableSession={tableSession}
        />
      </Modal>
    </View>
  );
};

export default ScanTable;
