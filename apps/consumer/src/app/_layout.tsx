import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Slot />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
