"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, size) {
    const selectedPrice = item.price[size];
    setCart((prev) => {
      const existingItem = prev.find(
        (cartItem) => cartItem.name === item.name && cartItem.size === size
      );
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.name === item.name && cartItem.size === size
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, price: selectedPrice, size, quantity: 1 }];
      }
    });
  }

  function removeFromCart(index) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
