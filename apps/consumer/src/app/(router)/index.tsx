import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Mock API: จำลองว่ามีข้อมูล
      setHasData(true);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && hasData) {
      router.replace("/homepage");
    }
  }, [loading, hasData, router]);

  return (
    <View className="flex-1 bg-amber-200 items-center justify-center">
      {loading ? (
        <>
          <ActivityIndicator size="large" color="#92400e" />
          <Text className="mt-4 text-amber-900">Loading...</Text>
        </>
      ) : (
        <Text className="text-amber-900">No data found</Text>
      )}
    </View>
  );
};


// จะใช้ router auth มียูสเซอร์ไหม ถ้ามี ไปหน้า home
// ถ้าไม่ ไปหน้าสมัครสมาชิก / login 

export default Index;
