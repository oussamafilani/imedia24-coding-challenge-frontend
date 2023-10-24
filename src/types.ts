// src/types.ts
export interface Product {
  quantity: number;
  id: number; // A unique identifier for the product
  title: string; // The product title
  description: string; // The product description
  category: string; // The product category
  price: number; // The product's price
  image: string; // URL to the product image

  rating: {
    rate: number; // Product rating
    count: number; // Number of ratings
  };
}
