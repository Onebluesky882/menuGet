export type GroupEvent =
  | {
      id: string;
      type: "user_joined";
      userId: string;
      createdAt: string;
    }
  | {
      id: string;
      type: "item_added";
      userId: string;
      orderId: string;
      item: {
        name: string;
        quantity: number;
        price: number;
      };
      createdAt: string;
    }
  | {
      id: string;
      type: "order_confirmed";
      userId: string;
      orderId: string;
      createdAt: string;
    };

export const mockGroupEvents: GroupEvent[] = [
  {
    id: "event-001",
    type: "user_joined",
    userId: "user-001",
    createdAt: "2026-10-07T12:00:00",
  },

  {
    id: "event-002",
    type: "user_joined",
    userId: "user-002",
    createdAt: "2026-10-07T12:01:00",
  },

  {
    id: "event-003",
    type: "user_joined",
    userId: "user-003",
    createdAt: "2026-10-07T12:02:00",
  },

  {
    id: "event-004",
    type: "item_added",
    userId: "user-001",
    orderId: "order-001",
    item: {
      name: "กะเพราหมูกรอบ",
      quantity: 1,
      price: 65,
    },
    createdAt: "2026-10-07T12:03:00",
  },

  {
    id: "event-005",
    type: "item_added",
    userId: "user-002",
    orderId: "order-002",
    item: {
      name: "ก๋วยเตี๋ยวต้มยำ",
      quantity: 2,
      price: 60,
    },
    createdAt: "2026-10-07T12:04:00",
  },

  {
    id: "event-006",
    type: "item_added",
    userId: "user-003",
    orderId: "order-003",
    item: {
      name: "ชาไทยเย็น",
      quantity: 1,
      price: 35,
    },
    createdAt: "2026-10-07T12:05:00",
  },

  {
    id: "event-007",
    type: "order_confirmed",
    userId: "user-001",
    orderId: "order-001",
    createdAt: "2026-10-07T12:06:00",
  },
];
