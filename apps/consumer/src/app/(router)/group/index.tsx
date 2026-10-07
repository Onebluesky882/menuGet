import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView>
      <View className="px-3">
        <View className="border h-10 items-center flex-row justify-center">
          <Text className="text-center">group</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
