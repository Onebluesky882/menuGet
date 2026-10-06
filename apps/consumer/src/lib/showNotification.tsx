import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export const showNotification = async (title: string, body: string) => {
  // ขอ permission ทุกครั้ง
  const { status } = await Notifications.requestPermissionsAsync();

  if (status !== "granted") {
    console.log("❌ Notification permission denied");
    return;
  }

  // ส่ง notification
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: null,
  });
};
