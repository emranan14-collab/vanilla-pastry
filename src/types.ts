export type Language = 'fa' | 'en';

export interface NavItem {
  label: string;
  id: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

export interface GalleryItem {
  name: string;
  image: string;
}

export interface Content {
  nav: {
    products: string;
    services: string;
    story: string;
    gallery: string;
    reviews: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  featured: {
    title: string;
    subtitle: string;
  };
  services: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  story: {
    title: string;
    content: string;
  };
  gallery: {
    title: string;
    items: GalleryItem[];
  };
  reviews: {
    title: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    address: string;
    phone: string;
    hours: string;
    cta: {
      visit: string;
      order: string;
      find: string;
      findUs: string;
    };
  };
  footer: {
    rights: string;
  };
}
