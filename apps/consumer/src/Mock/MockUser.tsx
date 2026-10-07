export type MockUser = {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline";
};

export const mockTableSession = {
  id: "session-250fgvwdjwf",
  shopId: "324452",
  tableId: "5",
  status: "active",

  users: [
    {
      id: "user-001",
      name: "Tob",
      avatar: "👨🏻",
      status: "online",
    },
    {
      id: "user-002",
      name: "Bank",
      avatar: "👨🏻‍💻",
      status: "online",
    },
    {
      id: "user-003",
      name: "James",
      avatar: "🧑🏻",
      status: "online",
    },
    {
      id: "user-004",
      name: "Mint",
      avatar: "👩🏻",
      status: "online",
    },
    {
      id: "user-005",
      name: "May",
      avatar: "👩🏻‍💻",
      status: "online",
    },
  ] satisfies MockUser[],
};
