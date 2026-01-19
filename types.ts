
export interface CoffeeDrink {
  id: string;
  name: string;
  description: string;
  ratio: {
    espresso: number;
    milk?: number;
    foam?: number;
    water?: number;
    condensedMilk?: number;
    other?: string;
  };
  image: string;
}

export interface BeanInfo {
  name: string;
  description: string;
  characteristics: string[];
}

export interface HistoryEvent {
  year: string;
  title: string;
  description: string;
}

export interface DailyWisdom {
  quote: string;
  authorOrSource: string;
}
