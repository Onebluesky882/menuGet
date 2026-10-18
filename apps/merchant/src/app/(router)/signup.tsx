import { authClient } from "@/lib/auth-client";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  Alert,
  ActivityIndicator,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleSignup = async () => {
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      Alert.alert("แจ้งเตือน", "กรุณากรอกข้อมูลให้ครบ");

      return;
    }

    if (password.length < 8) {
      Alert.alert("แจ้งเตือน", "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("แจ้งเตือน", "รหัสผ่านไม่ตรงกัน");

      return;
    }

    setLoading(true);

    try {
      console.log("Signup started");

      console.log("Auth URL:", "http://localhost:3000");

      const { data, error } = await authClient.signUp.email({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        console.error("Signup API error:", error);
        Alert.alert("สมัครสมาชิกไม่สำเร็จ", error.message);

        return;
      }

      console.log("Signup success:", data);

      Alert.alert("สำเร็จ", "สมัครสมาชิกเรียบร้อยแล้ว");
      router.push("/");
    } catch {
      Alert.alert("เกิดข้อผิดพลาด", "ไม่สามารถสมัครสมาชิกได้");
    } finally {
      setLoading(false);
    }
  };
  return (
    <ScrollView>
      <View className="flex-1 justify-center bg-white px-6">
        {/* Header */}

        <View className="mb-8">
          <Text className="mb-2 text-3xl font-bold text-gray-900">
            Create account
          </Text>

          <Text className="text-base text-gray-500">
            สมัครสมาชิกเพื่อเริ่มต้นใช้งาน
          </Text>
        </View>

        {/* Name */}

        <View className="mb-4">
          <Text className="mb-2 font-medium text-gray-700">ชื่อ</Text>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="ชื่อของคุณ"
            autoCapitalize="words"
            className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-base text-gray-900"
          />
        </View>

        {/* Email */}

        <View className="mb-4">
          <Text className="mb-2 font-medium text-gray-700">อีเมล</Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-base text-gray-900"
          />
        </View>

        {/* Password */}

        <View className="mb-4">
          <Text className="mb-2 font-medium text-gray-700">รหัสผ่าน</Text>

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="อย่างน้อย 8 ตัวอักษร"
            secureTextEntry
            autoCapitalize="none"
            className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-base text-gray-900"
          />
        </View>

        {/* Confirm Password */}

        <View className="mb-6">
          <Text className="mb-2 font-medium text-gray-700">ยืนยันรหัสผ่าน</Text>

          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="กรอกรหัสผ่านอีกครั้ง"
            secureTextEntry
            autoCapitalize="none"
            className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-base text-gray-900"
          />
        </View>

        {/* Submit */}

        <Pressable
          onPress={handleSignup}
          disabled={loading}
          className={`items-center rounded-xl py-4 ${
            loading ? "bg-green-400" : "bg-green-600"
          }`}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text className="text-base font-semibold text-white">
              สมัครสมาชิก
            </Text>
          )}
        </Pressable>

        {/* Footer */}

        <View className="mt-6 flex-row justify-center">
          <Text className="text-gray-500">มีบัญชีอยู่แล้ว? </Text>

          <Pressable>
            <Text className="font-semibold text-green-600">เข้าสู่ระบบ</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
