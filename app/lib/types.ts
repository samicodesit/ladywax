// Type definitions for the site

export interface Location {
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  widgetUrl: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface Service {
  name: string;
  price: string;
  duration?: string;
  description?: string;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}
