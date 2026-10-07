import { create } from "zustand";

type RoomDetail = {
  roomId: string;
  tableId: string;
  shopId: string;
};

type RoomMember = {
  userId: string;
  name: string;
  avatar?: string;
};

type RoomStore = {
  room: RoomDetail | null;
  members: RoomMember[];

  setRoom: (data: RoomDetail) => void;
  setMembers: (members: RoomMember[]) => void;
  clearRoom: () => void;
};

export const useRoomStore = create<RoomStore>((set) => ({
  room: null,
  members: [],

  setMembers: (members) => set({ members }),
  setRoom: (data) =>
    set({
      room: data,
    }),

  clearRoom: () => {
    console.log("🔥 CLEAR ROOM");
    set({
      room: null,
      members: [],
    });
  },
}));
