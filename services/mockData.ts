
import { Product, Testimonial } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Raw Acacia Honey with Walnuts',
    category: 'Premium',
    nutType: 'Walnut',
    honeyType: 'Acacia',
    price: 24.99,
    image: 'https://picsum.photos/seed/honey1/600/600',
    benefit: 'Brain boosting omega-3s with light floral sweetness.',
    description: 'Our signature blend features hand-picked Kashmiri walnuts submerged in pure, unheated Acacia honey. This honey is known for its high fructose content, meaning it stays liquid for longer, providing a smooth, velvety texture that perfectly complements the crunch of the walnuts.',
    isBestSeller: true,
    ingredients: ['100% Raw Acacia Honey', 'Premium Kashmiri Walnuts'],
    weight: '500g',
    usage: 'Perfect as a morning booster, on top of Greek yogurt, or enjoyed straight from the spoon.'
  },
  {
    id: '2',
    name: 'Wildflower Honey with Roasted Almonds',
    category: 'Health',
    nutType: 'Almond',
    honeyType: 'Wildflower',
    price: 19.99,
    image: 'https://picsum.photos/seed/honey2/600/600',
    benefit: 'Rich in Vitamin E and antioxidants for daily energy.',
    description: 'A multi-floral delight. We gather honey from high-altitude meadows where bees forage on a diverse range of wild blossoms. We then add slow-roasted Mamra almonds, creating a nutrient-dense snack that supports heart health and provides sustained energy.',
    isBestSeller: true,
    ingredients: ['Raw Wildflower Honey', 'Roasted California Almonds'],
    weight: '500g',
    usage: 'Ideal for breakfast bowls, salad dressings, or as a post-workout recovery snack.'
  },
  {
    id: '3',
    name: 'Manuka Honey with Smoked Cashews',
    category: 'Artisan',
    nutType: 'Cashew',
    honeyType: 'Manuka',
    price: 45.99,
    image: 'https://picsum.photos/seed/honey3/600/600',
    benefit: 'Maximum immunity support with a savory twist.',
    description: 'Experience the world-renowned antibacterial properties of Manuka honey (MGO 100+) paired with the creamy, smoky crunch of our artisanal cashews. A sophisticated flavor profile for the discerning palate.',
    ingredients: ['Authentic Manuka Honey', 'Hickory Smoked Cashews'],
    weight: '250g',
    usage: 'Best enjoyed as a gourmet treat or paired with a fine cheese board.'
  },
  {
    id: '4',
    name: 'Himalayan Honey with Mixed Nuts',
    category: 'Gifting',
    nutType: 'Mixed',
    honeyType: 'Himalayan',
    price: 29.99,
    image: 'https://picsum.photos/seed/honey4/600/600',
    benefit: 'A perfect blend of crunch and pure mountain honey.',
    description: 'The "Everything" jar. A diverse mix of cashews, almonds, walnuts, and pistachios in our dark, mineral-rich Himalayan honey. Each spoonful offers a different texture and a burst of wild mountain minerals.',
    ingredients: ['Raw Himalayan Forest Honey', 'Almonds', 'Walnuts', 'Cashews', 'Pistachios'],
    weight: '750g',
    usage: 'The ultimate family-sized jar for shared breakfasts and healthy snacking.'
  },
  {
    id: '5',
    name: 'Clover Honey with Pecans',
    category: 'Gourmet',
    nutType: 'Pecan',
    honeyType: 'Clover',
    price: 22.99,
    image: 'https://picsum.photos/seed/honey5/600/600',
    benefit: 'Buttery texture with smooth, mild sweetness.',
    description: 'Clover honey is the classic choice for a mild, buttery sweetness. When paired with the naturally rich, fat-heavy profile of premium pecans, it creates a caramel-like experience without any added sugars.',
    ingredients: ['Organic Clover Honey', 'Premium Southern Pecans'],
    weight: '500g',
    usage: 'Elevates desserts, pancakes, or serves as a luxurious spread on artisanal bread.'
  },
  {
    id: '6',
    name: 'Dark Forest Honey with Hazelnuts',
    category: 'Premium',
    nutType: 'Hazelnut',
    honeyType: 'Forest',
    price: 26.99,
    image: 'https://picsum.photos/seed/honey6/600/600',
    benefit: 'Deep, earthy notes paired with perfectly roasted nuts.',
    description: 'Honeydew or Forest honey is unique—it\'s not made from nectar but from the secretions of trees. It is significantly higher in minerals and has a dark, complex, almost malty flavor that stands up beautifully to our whole-roasted hazelnuts.',
    ingredients: ['Raw Forest Honeydew Honey', 'Whole Roasted Hazelnuts'],
    weight: '500g',
    usage: 'Pairs exceptionally well with dark chocolate, coffee, or hard aged cheeses.'
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Nutritionist',
    comment: 'The quality of the honey is evident from the first taste. No additives, just pure nature. My favorite is the Acacia with Walnuts.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Fitness Enthusiast',
    comment: 'Perfect pre-workout snack. The energy boost is sustained and it satisfies my sweet tooth in a healthy way.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Home Cook',
    comment: 'I use these in my morning yogurt bowls. The almonds are always so crunchy and the honey is thick and rich.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
];
