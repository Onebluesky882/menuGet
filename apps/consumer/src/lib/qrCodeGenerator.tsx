import QRCode from "react-native-qrcode-svg";

import { View } from "react-native";

const TableQRCode = () => {
  const urlOnlyShopId = "http://192.168.1.35:8081/?shopId=324452";
  const urlShopId =
    "http://192.168.1.35:8081/?shopId=324452&tableId=5&tableSession=250fgvwdjwf";

  return (
    <View className="items-center">
      <QRCode value={urlOnlyShopId} size={250} />
    </View>
  );
};

export default TableQRCode;
