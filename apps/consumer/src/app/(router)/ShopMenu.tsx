import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ShopMenu = () => {
  // if no shop ให้แสกน qr ก่อน เอาแค่ shopId เพื่อคนอยากแสกนดูแค่เมนู หรือสั่งกลับบ้าน
  const data = "http://192.168.1.35:8081/?shopId=324452";
  const url = new URL(data);
  const shopId = url.searchParams.get("shopId");
  if (!shopId) {
    return (
      <SafeAreaView>
        <View>
          <Text>กรุณาสแกน QR Code ของร้าน</Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <View>
        <Text>ShopMenu</Text>
      </View>
    </SafeAreaView>
  );
};

export default ShopMenu;
