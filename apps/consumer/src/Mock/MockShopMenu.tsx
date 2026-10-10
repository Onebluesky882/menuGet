import { MenuItem } from "@/type/Cart";

export const categories = [
  "ทั้งหมด",
  "อาหารจานเดียว",
  "ก๋วยเตี๋ยว",
  "ของทานเล่น",
  "เครื่องดื่ม",
];
export const menus: MenuItem[] = [
  {
    id: "1",

    name: "กะเพราหมูกรอบ",

    description: "หมูกรอบผัดกะเพรา เสิร์ฟพร้อมข้าวสวย",

    price: 65,

    status: "available",

    category: "อาหารจานเดียว",

    image: "🍳",
  },

  {
    id: "2",

    name: "ข้าวกะเพราไก่",

    description: "ไก่สับผัดกะเพรา รสจัดจ้าน",

    price: 55,

    status: "available",

    category: "อาหารจานเดียว",

    image: "🍚",
  },

  {
    id: "3",

    name: "ก๋วยเตี๋ยวต้มยำ",

    description: "น้ำต้มยำเข้มข้น หมูและลูกชิ้น",

    price: 60,

    status: "available",

    category: "ก๋วยเตี๋ยว",

    image: "🍜",
  },

  {
    id: "4",

    name: "ก๋วยเตี๋ยวน้ำตก",

    description: "น้ำซุปเข้มข้น พร้อมหมูสดและลูกชิ้น",

    price: 55,

    status: "outOfStock",

    category: "ก๋วยเตี๋ยว",

    image: "🍜",
  },

  {
    id: "5",

    name: "เกี๊ยวทอด",

    description: "เกี๊ยวทอดกรอบ เสิร์ฟพร้อมน้ำจิ้ม",

    price: 45,

    status: "available",

    category: "ของทานเล่น",

    image: "🥟",
  },

  {
    id: "6",

    name: "ชาไทยเย็น",

    description: "ชาไทยเข้มข้น หอมหวานกำลังดี",

    price: 35,

    status: "available",

    category: "เครื่องดื่ม",

    image: "🧋",
  },
];
