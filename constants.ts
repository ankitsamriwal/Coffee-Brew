
import { CoffeeDrink, BeanInfo, HistoryEvent } from './types';

export const COFFEE_DRINKS: CoffeeDrink[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'The foundation of coffee culture. A concentrated form of coffee served in small, strong shots.',
    ratio: { espresso: 1 },
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso diluted with hot water, giving it a similar strength to but different flavor from traditionally brewed coffee.',
    ratio: { espresso: 1, water: 2 },
    image: 'https://images.unsplash.com/photo-1551030173-122f52353523?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'latte',
    name: 'Caffè Latte',
    description: 'A coffee drink made with espresso and steamed milk. Ideally served with subtle latte art.',
    ratio: { espresso: 1, milk: 3, foam: 0.5 },
    image: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'An Italian icon prepared with equal parts double espresso, steamed milk, and stiff milk foam.',
    ratio: { espresso: 1, milk: 1, foam: 1 },
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'spanish',
    name: 'Spanish Latte',
    description: 'A sweeter variation containing espresso, milk, and condensed milk. Known as Café Bombón in Spain.',
    ratio: { espresso: 1, milk: 2, condensedMilk: 1 },
    image: 'https://images.unsplash.com/photo-1599398054066-846f28917f38?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'macchiato',
    name: 'Espresso Macchiato',
    description: 'An espresso coffee drink with a small amount of milk, usually foamed. Macchiato means "stained".',
    ratio: { espresso: 1, foam: 0.5 },
    image: 'https://images.unsplash.com/photo-1542289932-a39c9f0298a0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'An Australian/New Zealand specialty with velvety microfoam and a higher coffee-to-milk ratio than a latte.',
    ratio: { espresso: 2, milk: 2, foam: 0.25 },
    image: 'https://images.unsplash.com/photo-1619681118523-88e6b00b5ade?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cortado',
    name: 'Cortado',
    description: 'Spanish espresso cut with equal parts warm milk. Perfectly balanced between bold and smooth.',
    ratio: { espresso: 1, milk: 1 },
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'mocha',
    name: 'Caffè Mocha',
    description: 'A chocolate-flavored variant of a latte, combining espresso, chocolate, steamed milk, and foam.',
    ratio: { espresso: 1, milk: 2, foam: 0.5 },
    image: 'https://images.unsplash.com/photo-1578374173705-0ec3d2fa54f9?q=80&w=800&auto=format&fit=crop'
  }
];

export const BEAN_INFO: BeanInfo[] = [
  {
    name: 'Arabica',
    description: 'The most popular coffee type, accounting for about 60% of the world’s coffee. Known for its smooth, complex flavor and lack of bitterness.',
    characteristics: ['Higher Acidity', 'Complex Flavor', 'Grown at High Altitudes']
  },
  {
    name: 'Robusta',
    description: 'A hardier bean with a stronger, harsher taste and higher caffeine content. Often used in espressos for a better crema.',
    characteristics: ['High Caffeine', 'Bitter/Earthy', 'Disease Resistant']
  },
  {
    name: 'Liberica',
    description: 'A rare bean with a unique aroma featuring floral and fruity notes, and a full body that possesses a smoky taste.',
    characteristics: ['Smoky/Woody', 'Low Sugar', 'Rare']
  }
];

export const HISTORY_TIMELINE: HistoryEvent[] = [
  { year: '850 CE', title: 'The Legend of Kaldi', description: 'An Ethiopian goatherd notices his goats dancing after eating red berries.' },
  { year: '1100', title: 'Cultivation in Arabia', description: 'Coffee beans are first roasted and brewed in Arabia.' },
  { year: '1475', title: 'First Coffee Shop', description: 'Kiva Han, the world\'s first coffee shop, opens in Constantinople.' },
  { year: '1600', title: 'Arrival in Europe', description: 'Coffee enters Europe through Venice. Pope Clement VIII baptizes it.' },
  { year: '1675', title: 'London Coffee Houses', description: 'London\'s coffee houses become centers of social activity and are nicknamed "penny universities".' },
  { year: '1723', title: 'The Americas', description: 'Gabriel de Clieu brings a coffee plant to Martinique, the ancestor of most coffee in the Americas.' },
  { year: '1901', title: 'Instant Coffee', description: 'Japanese-American chemist Satori Kato invents instant coffee in Chicago.' },
  { year: '1971', title: 'Starbucks Opens', description: 'The first Starbucks store opens in Seattle\'s Pike Place Market, revolutionizing coffee culture.' }
];

export const HEALTH_BENEFITS = [
  "Rich in essential nutrients like Riboflavin (B2), Pantothenic acid (B5), Manganese, and Potassium.",
  "High in antioxidants; many people get more antioxidants from coffee than fruits and veggies combined.",
  "May lower the risk of Type 2 Diabetes and protect against Alzheimer's and Dementia.",
  "Boosts metabolic rate and helps burn fat."
];
