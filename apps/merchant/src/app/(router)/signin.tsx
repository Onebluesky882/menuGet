import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { authClient } from "@/lib/auth-client";

const Signin = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignin = async () => {
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      Alert.alert("ข้อมูลไม่ครบ", "กรุณากรอกอีเมลและรหัสผ่าน");
      return;
    }

    setLoading(true);

    try {
      // ปรับ method และ payload ให้ตรงกับ API ของ Authula
      const response = await authClient.signIn.email({
        email: normalizedEmail,
        password,
      });

      console.log("Signin response:", response);

      Alert.alert("สำเร็จ", "เข้าสู่ระบบเรียบร้อยแล้ว", [
        {
          text: "ตกลง",
          onPress: () => router.replace("/"),
        },
      ]);
    } catch (error) {
      console.error("Signin error:", error);

      Alert.alert(
        "เข้าสู่ระบบไม่สำเร็จ",
        "กรุณาตรวจสอบอีเมลและรหัสผ่าน แล้วลองอีกครั้ง",
      );
    } finally {
      router.push('/')
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 justify-center px-6 py-10">
          {/* Logo */}
          <View className="mb-10 items-center">
            <View className="mb-5 h-20 w-20 items-center justify-center rounded-3xl bg-amber-300">
              <Text className="text-4xl font-black text-neutral-900">M</Text>
            </View>

            <Text className="text-3xl font-black text-neutral-900">
              MenuGET Shop
            </Text>

            <Text className="mt-2 text-base text-neutral-500">
              ยินดีต้อนรับกลับมา
            </Text>
          </View>

          {/* Form */}
          <View className="gap-5">
            <View>
              <Text className="mb-2 font-semibold text-neutral-800">อีเมล</Text>

              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="you@example.com"
                placeholderTextColor="#A3A3A3"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
                editable={!loading}
                className="h-14 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-base text-neutral-900"
              />
            </View>

            <View>
              <Text className="mb-2 font-semibold text-neutral-800">
                รหัสผ่าน
              </Text>

              <View className="flex-row items-center rounded-2xl border border-neutral-200 bg-neutral-50 pr-4">
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="กรอกรหัสผ่าน"
                  placeholderTextColor="#A3A3A3"
                  secureTextEntry={!showPassword}
                  autoComplete="password"
                  textContentType="password"
                  editable={!loading}
                  onSubmitEditing={handleSignin}
                  returnKeyType="go"
                  className="h-14 flex-1 px-4 text-base text-neutral-900"
                />

                <Pressable
                  onPress={() => setShowPassword((value) => !value)}
                  accessibilityRole="button"
                  accessibilityLabel={
                    showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"
                  }
                >
                  <Text className="font-semibold text-neutral-600">
                    {showPassword ? "ซ่อน" : "แสดง"}
                  </Text>
                </Pressable>
              </View>
            </View>

            <Pressable
              onPress={handleSignin}
              disabled={loading}
              className={`mt-2 h-14 items-center justify-center rounded-2xl ${
                loading ? "bg-amber-200" : "bg-amber-300"
              }`}
            >
              {loading ? (
                <ActivityIndicator color="#171717" />
              ) : (
                <Text className="text-base font-bold text-neutral-900">
                  เข้าสู่ระบบ
                </Text>
              )}
            </Pressable>
          </View>

          {/* Footer */}
          <View className="mt-8 flex-row justify-center">
            <Text className="text-neutral-500">
              ยังไม่มีบัญชีร้านค้าใช่ไหม?{" "}
            </Text>

            <Pressable
              onPress={() => router.push("/signup")}
              disabled={loading}
            >
              <Text className="font-bold text-neutral-900">สมัครสมาชิก</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signin;
