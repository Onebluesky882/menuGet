import { create } from "zustand";
type Shop = {
  shopId: string | null;
  tableId: string | null;
  tableSession: string | null;

  setTableSession: (
    shopId: string,
    tableId: string | null,
    tableSession: string | null,
  ) => void;

  removeTableSession: () => void;
};
export const useStoreShop = create<Shop>((set) => ({
  shopId: null,
  tableId: null,
  tableSession: null,

  setTableSession(shopId, tableId, tableSession) {
    set({
      shopId,
      tableId: tableId ?? null,
      tableSession: tableSession ?? null,
    });
  },

  removeTableSession() {
    set({
      shopId: null,
      tableId: null,
      tableSession: null,
    });
  },
}));
