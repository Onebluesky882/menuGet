import { CartItem } from "@/type/Cart";
import { create } from "zustand";

type Cart = {
  items: CartItem[];
  orderType: "dining" | "takeOut";
  addCartItem: (item: CartItem) => void;
  removeCartItem: (id: string) => void;
  clearCart: () => void;
  setOrderType: (type: "dining" | "takeOut") => void;
};

export const useCart = create<Cart>((set) => ({
  items: [],
  orderType: "dining",

  addCartItem: (data) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.menuItem.id === data.menuItem.id,
      );
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.menuItem.id === data.menuItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        items: [...state.items, data],
      };
    }),

  removeCartItem: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    })),

  clearCart: () =>
    set({
      items: [],
    }),

  setOrderType: (type) =>
    set({
      orderType: type,
    }),
}));
