export interface Product {
  images: string[];
  description: string;
  name: string;
  [key: string]: any;
}

export interface Price {
  id: string;
  product: Product;
  unit_amount: number;
  [key: string]: any;
}
