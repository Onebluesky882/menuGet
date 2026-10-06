import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Slot } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
}
