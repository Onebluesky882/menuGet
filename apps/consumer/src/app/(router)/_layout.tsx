import { Tabs } from "expo-router";
import { SymbolView } from "expo-symbols";
const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <SymbolView name="house" tintColor={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          headerShown: false,
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <SymbolView name="menucard" tintColor={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="group"
        options={{
          headerShown: false,
          title: "group",
          tabBarIcon: ({ color }) => (
            <SymbolView
              name="circle.grid.cross.up.fill"
              tintColor={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          title: "order",
          tabBarIcon: ({ color }) => (
            <SymbolView name="list.bullet" tintColor={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ color }) => (
            <SymbolView name="person" tintColor={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
