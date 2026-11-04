export const SIGNATURE_COFFEES = [
  {
    id: 'sig-1',
    name: 'Velvet Flat White',
    category: 'Coffee',
    origin: 'Ethiopia Yirgacheffe',
    notes: 'Jasmine, citrus blossom, velvety micro-foam',
    price: 360,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80',
    badge: 'Bestseller'
  },
  {
    id: 'sig-2',
    name: 'Spanish Cortado',
    category: 'Coffee',
    origin: 'Colombia Huila',
    notes: 'Brown sugar, roasted pecan, condensed milk drizzle',
    price: 340,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
    badge: 'Staff Pick'
  },
  {
    id: 'sig-3',
    name: 'Honey Cinnamon Latte',
    category: 'Coffee',
    origin: 'Guatemala Antigua',
    notes: 'Wildflower honey, Ceylon cinnamon, silky texture',
    price: 390,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    badge: 'Signature'
  },
  {
    id: 'sig-4',
    name: 'Single-Origin V60 Pour Over',
    category: 'Coffee',
    origin: 'Kenya Nyeri AA',
    notes: 'Blackcurrant, bergamot, clean sweet finish',
    price: 420,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    badge: 'Rare Lot'
  },
  {
    id: 'sig-5',
    name: 'Caramel Sea-Salt Macchiato',
    category: 'Coffee',
    origin: 'Brazil Santos',
    notes: 'Slow-simmered caramel, Himalayan salt, rich crema',
    price: 380,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular'
  },
  {
    id: 'sig-6',
    name: 'Nitro Cold Brew Dark Reserve',
    category: 'Drinks',
    origin: 'Sumatra Mandheling',
    notes: 'Dark chocolate, cedar, creamy Guinness-like head',
    price: 410,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80',
    badge: 'Chilled'
  }
];

export const POPULAR_COLLECTIONS = {
  All: [
    {
      id: 'col-1',
      title: 'Artisan Coffee',
      count: '214 items',
      category: 'Coffee',
      mainImage: '/assets/col_coffee.png',
      fallbackMain: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
      description: 'Single-origin espressos, pour-overs and signature milk beverages crafted to perfection.',
      thumbs: [
        { name: 'Double Espresso', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=200&q=80' },
        { name: 'Iced Latte', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=200&q=80' },
        { name: 'Cold Brew', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=200&q=80' }
      ]
    },
    {
      id: 'col-2',
      title: 'Café Ambience',
      count: '158 photos',
      category: 'Ambience',
      mainImage: '/assets/col_ambience.png',
      fallbackMain: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
      description: 'Nordic wood furniture, warm pendant lighting, and quiet work nooks in Mirpur.',
      thumbs: [
        { name: 'Bar Counter', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=200&q=80' },
        { name: 'Lounge Corner', img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=200&q=80' },
        { name: 'Patio Seating', img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=200&q=80' }
      ]
    },
    {
      id: 'col-3',
      title: 'Handmade Desserts',
      count: '96 items',
      category: 'Desserts',
      mainImage: '/assets/col_desserts.png',
      fallbackMain: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
      description: 'Baked fresh daily: Authentic mascarpone Tiramisu, flaky croissants, and brownies.',
      thumbs: [
        { name: 'Dark Tiramisu', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=200&q=80' },
        { name: 'Butter Croissant', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=200&q=80' },
        { name: 'Berry Tart', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&q=80' }
      ]
    }
  ],
  Coffee: [
    {
      id: 'col-1',
      title: 'Artisan Coffee',
      count: '214 items',
      category: 'Coffee',
      mainImage: '/assets/col_coffee.png',
      fallbackMain: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
      description: 'Single-origin espressos, pour-overs and signature milk beverages crafted to perfection.',
      thumbs: [
        { name: 'Double Espresso', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=200&q=80' },
        { name: 'Iced Latte', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=200&q=80' },
        { name: 'Cold Brew', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=200&q=80' }
      ]
    }
  ],
  Drinks: [
    {
      id: 'col-4',
      title: 'Chilled Refreshers & Tonics',
      count: '42 items',
      category: 'Drinks',
      mainImage: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      fallbackMain: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      description: 'Espresso tonics, matcha cloud lattes, and cascara iced teas.',
      thumbs: [
        { name: 'Espresso Tonic', img: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=200&q=80' },
        { name: 'Matcha Cloud', img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=200&q=80' },
        { name: 'Cascara Fizz', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=200&q=80' }
      ]
    }
  ],
  Food: [
    {
      id: 'col-5',
      title: 'Savory Breakfast & Melts',
      count: '38 items',
      category: 'Food',
      mainImage: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
      fallbackMain: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
      description: 'Smoked chicken sourdough sandwiches, avocado toast, and truffle egg rolls.',
      thumbs: [
        { name: 'Sourdough Melt', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=200&q=80' },
        { name: 'Avocado Toast', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=200&q=80' },
        { name: 'Croque Monsieur', img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=200&q=80' }
      ]
    }
  ],
  Ambience: [
    {
      id: 'col-2',
      title: 'Café Ambience',
      count: '158 photos',
      category: 'Ambience',
      mainImage: '/assets/col_ambience.png',
      fallbackMain: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
      description: 'Nordic wood furniture, warm pendant lighting, and quiet work nooks in Mirpur.',
      thumbs: [
        { name: 'Bar Counter', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=200&q=80' },
        { name: 'Lounge Corner', img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=200&q=80' },
        { name: 'Patio Seating', img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=200&q=80' }
      ]
    }
  ],
  Desserts: [
    {
      id: 'col-3',
      title: 'Handmade Desserts',
      count: '96 items',
      category: 'Desserts',
      mainImage: '/assets/col_desserts.png',
      fallbackMain: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
      description: 'Baked fresh daily: Authentic mascarpone Tiramisu, flaky croissants, and brownies.',
      thumbs: [
        { name: 'Dark Tiramisu', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=200&q=80' },
        { name: 'Butter Croissant', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=200&q=80' },
        { name: 'Berry Tart', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&q=80' }
      ]
    }
  ]
};
