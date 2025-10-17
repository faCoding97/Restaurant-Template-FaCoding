export interface RestaurantInfo {
  name: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  location: string;
  email: string;
  qrCodeUrl: string;
  openingHours: string;
  siteUrl: string;
  heroTagline: string;
  heroCta: string;
  story: string;
  vision: string;
  beans: string;
}
export interface Promotion {
  title: string;
  description: string;
  day: string;
  discount: string;
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
