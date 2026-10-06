import { View, Pressable, Text } from "react-native";
import { Uniwind, useUniwind } from "uniwind";
import { useEffect } from "react";

export const ThemeSwitcher = () => {
  const { theme, hasAdaptiveThemes } = useUniwind();

  type ThemeName = "light" | "dark";

  const themes: {
    name: ThemeName;
    label: string;
    icon: string;
  }[] = [
    { name: "light", label: "Light", icon: "☀️" },
    { name: "dark", label: "Dark", icon: "🌙" },
  ];

  useEffect(() => {
    if (theme !== "light") {
      Uniwind.setTheme("light");
    }
  }, []);

  const activeTheme = theme;

  return (
    <View className="flex-row gap-2 border border-gray-100 rounded-2xl shadow-sm ">
      {themes
        .filter((t) => t.name !== activeTheme)
        .map((t) => (
          <Pressable
            key={t.name}
            onPress={() => Uniwind.setTheme(t.name)}
            className="items-center rounded-lg  p-2 px-3"
          >
            <Text className="mb-1 text-2xl text-foreground">{t.icon}</Text>
          </Pressable>
        ))}
    </View>
  );
};
