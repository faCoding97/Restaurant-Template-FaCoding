// Type definitions for restaurant data
export interface RestaurantInfo {
  name: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  location: string;
  email: string;
  qrCodeUrl: string;
  siteUrl: string;
  heroTagline: string;
  heroCta: string;
  openHours: string;
  about: {
    title: string;
    text: string;
  };
}

export interface Promotion {
  title: string;
  description: string;
  discount: string;
  days: string;
}

export interface MenuItem {
  category: string;
  name: string;
  description: string;
  image: string;
  price: string;
  ingredients: string[];
}

export interface SiteData {
  restaurantInfo: RestaurantInfo;
  promotions: Promotion[];
  menuItems: MenuItem[];
}
