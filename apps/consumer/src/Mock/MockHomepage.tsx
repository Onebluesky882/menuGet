import {
  DessertSvg,
  DrinkSvg,
  FoodSvg,
  NoodleSvg,
  SnackSvg,
  StarSvg,
} from "@/components/AppSvg";

export const categories = [
  { id: "1", name: "อาหารจานเดียว", Svg: FoodSvg },
  { id: "2", name: "ก๋วยเตี๋ยว", Svg: NoodleSvg },
  { id: "3", name: "เครื่องดื่ม", Svg: DrinkSvg },
  { id: "4", name: "ของหวาน", Svg: DessertSvg },
  { id: "5", name: "ของทานเล่น", Svg: SnackSvg },
  { id: "6", name: "เมนูแนะนำ", Svg: StarSvg },
];
export const popularMenus = [
  {
    id: "1",
    name: "ข้าวกะเพราหมู",
    description: "กะเพราหอม ๆ รสจัดจ้าน",
    price: 60,
    category: "อาหารจานเดียว",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
  },
  {
    id: "2",
    name: "ก๋วยเตี๋ยวหมู",
    description: "น้ำซุปเข้มข้น เส้นเหนียวนุ่ม",
    price: 55,
    category: "ก๋วยเตี๋ยว",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
  },
  {
    id: "3",
    name: "ชาเย็น",
    description: "ชาไทยหอมมัน หวานกำลังดี",
    price: 35,
    category: "เครื่องดื่ม",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600",
  },
  {
    id: "4",
    name: "เฟรนช์ฟรายส์",
    description: "กรอบนอกนุ่มใน",
    price: 49,
    category: "ของทานเล่น",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",
  },
];
