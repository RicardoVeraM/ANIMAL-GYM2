
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  text: string;
  rating: number;
}
