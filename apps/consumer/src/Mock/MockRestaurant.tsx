export type Restaurant = {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  image: string;
  isFeatured: boolean;
};

export const mockRestaurants: Restaurant[] = [
  {
    id: "rest-001",
    name: "ครัวคุณต๋อย",
    category: "อาหารไทย",
    rating: 4.9,
    reviewCount: 1250,
    deliveryTime: "15–25 นาที",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    isFeatured: true,
  },
  {
    id: "rest-002",
    name: "Sushi Tokyo",
    category: "อาหารญี่ปุ่น",
    rating: 4.8,
    reviewCount: 980,
    deliveryTime: "20–30 นาที",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    isFeatured: true,
  },
  {
    id: "rest-003",
    name: "Seoul Korean Kitchen",
    category: "อาหารเกาหลี",
    rating: 4.7,
    reviewCount: 850,
    deliveryTime: "20–35 นาที",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
    isFeatured: true,
  },
  {
    id: "rest-004",
    name: "Bella Pasta",
    category: "อาหารอิตาเลียน",
    rating: 4.8,
    reviewCount: 720,
    deliveryTime: "25–35 นาที",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    isFeatured: true,
  },
  {
    id: "rest-005",
    name: "Burger House",
    category: "เบอร์เกอร์",
    rating: 4.6,
    reviewCount: 640,
    deliveryTime: "15–25 นาที",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    isFeatured: false,
  },
  {
    id: "rest-006",
    name: "Pizza Corner",
    category: "พิซซ่า",
    rating: 4.7,
    reviewCount: 590,
    deliveryTime: "25–40 นาที",
    image: "https://images.unsplash.com/photo- pizza",
    isFeatured: false,
  },
  {
    id: "rest-007",
    name: "Shabu Paradise",
    category: "ชาบู",
    rating: 4.9,
    reviewCount: 1100,
    deliveryTime: "30–45 นาที",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
    isFeatured: true,
  },
  {
    id: "rest-008",
    name: "Green Bowl",
    category: "อาหารสุขภาพ",
    rating: 4.5,
    reviewCount: 420,
    deliveryTime: "15–25 นาที",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    isFeatured: false,
  },
  {
    id: "rest-009",
    name: "Noodle Station",
    category: "ก๋วยเตี๋ยว",
    rating: 4.6,
    reviewCount: 510,
    deliveryTime: "10–20 นาที",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
    isFeatured: false,
  },
  {
    id: "rest-010",
    name: "Sweet Cloud Cafe",
    category: "คาเฟ่และของหวาน",
    rating: 4.8,
    reviewCount: 760,
    deliveryTime: "15–30 นาที",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    isFeatured: true,
  },
];
