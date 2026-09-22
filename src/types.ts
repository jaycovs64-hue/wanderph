export type Region = 'Luzon' | 'Visayas' | 'Mindanao';
export type DestinationType = 'Beach' | 'Mountain' | 'City' | 'Historical' | 'Adventure' | 'Nature';
export type BudgetLevel = 'Budget' | 'Moderate' | 'Luxury';

export interface Activity {
  id: string;
  name: string;
  destination: string;
  image: string;
  description: string;
  cost: number;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  category: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  image: string;
  pricePerNight: number;
  rating: number;
  type: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  recommendedFood: string;
}

export interface TravelTip {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  region: Region;
  category: DestinationType;
  description: string;
  image: string;
  gallery: string[];
  budget: string;
  rating: number;
  bestTime: string;
  days: number;
  weather: string;
  difficulty: string;
  activities: Activity[];
  stays: Hotel[];
  restaurants: Restaurant[];
  travelTips: string[];
  estimatedCost: {
    accommodation: number;
    food: number;
    transportation: number;
    activities: number;
    miscellaneous: number;
  };
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  notes?: string;
}

export interface ItineraryDay {
  id: string;
  day: number;
  activities: ItineraryItem[];
}

export interface UserProfile {
  name: string;
  email: string;
  password: string;
  profileImage: string;
  preferences: string;
}
