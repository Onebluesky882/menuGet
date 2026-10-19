import { useCart } from "@/store/useCart";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { hapticMedium } from "@/lib/haptic";
const Layout = () => {
  const item = useCart((state) => state.items);

  const cartCount = item.reduce((total, item) => (total += item.quantity), 0);
  const hasCartCount = cartCount > 0;

  const { setModelCartOpen, items } = useCart();

  const handlePressMenu = () => {
    if (items.length >= 1) {
      setModelCartOpen();
    }
    hapticMedium();
  };

  return (
    <NativeTabs minimizeBehavior="onScrollDown">
      <NativeTabs.Trigger name="homepage">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger
        name="menu"
        listeners={{
          tabPress: handlePressMenu,
        }}
      >
        <NativeTabs.Trigger.Label>Menu</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="menucard" md="restaurant_menu" />
        {hasCartCount && (
          <NativeTabs.Trigger.Badge>
            {cartCount.toString()}
          </NativeTabs.Trigger.Badge>
        )}
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="group">
        <NativeTabs.Trigger.Label>Group</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person.2.fill" md="group" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="order">
        <NativeTabs.Trigger.Label>Order</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="list.bullet" md="list" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="cart">
        <NativeTabs.Trigger.Label>Cart</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="list.bullet" md="list" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person.fill" md="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default Layout;
