"use client";

import { createContext, useContext, useState } from "react";

// Context for managing the cart
const CartContext = createContext();

// Function to show toast
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast toast-top toast-center"; // Center the toast horizontally
  toast.innerHTML = `
    <div class="alert alert-success">
      <span>✅ ${message}</span>
    </div>`;
  document.body.appendChild(toast);

  // Set the toast to show above the navbar (adjust as needed for your navbar height)
  toast.style.top = "400px"; // Adjust to match your navbar height

  setTimeout(() => {
    document.body.removeChild(toast);
  }, 3000);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  
  function addToCart(item, size) {
    const selectedPrice = item.price[size];

    showToast(`${item.name} (${size}) added to cart!`);

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

