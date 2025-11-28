export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  volume: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}