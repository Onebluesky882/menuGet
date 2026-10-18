import { authClient } from "@/lib/auth-client";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function App() {
  const router = useRouter();
  const { data: session, isPending, error } = authClient.useSession();

  const signOut = async () => {
    const signOutres = await authClient.signOut();
    console.log(signOutres);
  };

  return (
    <ScrollView>
      <View className="flex justify-center items-center">
        <Text className="p-3">
          user : {session ? `${session.user.email}` : `...`}
        </Text>
        <Pressable
          className="border p-2"
          onPress={() => router.push("/signup")}
        >
          <Text>Signup</Text>
        </Pressable>
        <Pressable
          className="border p-2"
          onPress={() => router.push("/signin")}
        >
          <Text>Sign-in</Text>
        </Pressable>
        <Pressable className="border p-2" onPress={signOut}>
          <Text>signOut</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
