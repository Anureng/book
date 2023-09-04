"use client"
import { createContext, useContext, useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (itemId: string) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart ,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
