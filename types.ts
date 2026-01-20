
export interface Product {
  id: string;
  name: string;
  category: string;
  nutType: string;
  honeyType: string;
  price: number;
  image: string;
  benefit: string;
  description: string;
  isBestSeller?: boolean;
  ingredients: string[];
  weight: string;
  usage: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export type View = 'home' | 'shop' | 'story' | 'benefits' | 'product-detail';
