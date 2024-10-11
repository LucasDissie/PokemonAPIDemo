export default defineEventHandler((event) => {
    return products
  })
  

// Using interface
export interface Product {
    price: number;           // The price of the product
    imgPath: string;         // The path to the product image
    description: string;     // A description of the product
    name: string;            // The name of the product
    inStock: boolean;        // Whether the product is in stock
  }

  const products: Product[] = [
    {
      price: 29.99,
      imgPath: "img/products/wirelessMouse.jpg",
      description: "A sleek, modern wireless mouse with ergonomic design.",
      name: "Wireless Mouse",
      inStock: true,
    },
    {
      price: 49.99,
      imgPath: "img/products/mechanicalKeyboard.jpg",
      description: "A mechanical keyboard with customizable RGB lighting.",
      name: "Mechanical Keyboard",
      inStock: false,
    },
    {
      price: 19.99,
      imgPath: "img/products/headphones.jpg",
      description: "High-quality noise-cancelling headphones for immersive sound.",
      name: "Noise-Cancelling Headphones",
      inStock: true,
    },
    {
      price: 99.99,
      imgPath: "img/products/smartwatch.jpg",
      description: "A sleek smartwatch with fitness tracking and notifications.",
      name: "Smartwatch",
      inStock: true,
    },
    {
      price: 12.99,
      imgPath: "img/products/usbc.jpg",
      description: "A durable, fast-charging USB-C cable for all devices.",
      name: "USB-C Cable",
      inStock: true,
    },
  ];
  