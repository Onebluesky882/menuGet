export type Cart = {
  shopId: string;
  tableId?: string;
  tableSession?: string;
  userId?: string;
  orderType: OrderType;
  items: CartItem[];
};

type OrderType = "dining" | "takeOut";

export type CartItem = {
  id: string;
  menuItem: MenuItem;
  quantity: number;
};

type MenuItem = {
  id: string;
  name: string;
  price: number;
  status: "available" | "outOfStock";
};
