"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function MenuItem({ item }) {
  const [size, setSize] = useState("small");
  const { addToCart } = useCart();

  const isAvailable = item.available !== false;
  const selectedPrice = item.price?.[size];
 function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast toast-top toast-end";
  toast.innerHTML = `
    <div class="alert alert-success">
      <span>✅ ${message}</span>
    </div>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    document.body.removeChild(toast);
  }, 1500);
}

  return (
    <div
      className={`border p-4 rounded-lg mb-4 ${
        !isAvailable ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>

      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="size" className="font-medium">
          Size:
        </label>
        <select
          id="size"
          className="select select-bordered select-sm"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="small">Small (₹ {item.price?.small})</option>
          <option value="large">Large (₹ {item.price?.large})</option>
        </select>
      </div>

      {/* Price */}
      <p className="mb-2 font-semibold">Price: ₹ {selectedPrice}</p>

      {/* Add to Cart */}
      <button
        disabled={!isAvailable}
        className={`btn btn-primary btn-sm ${
          !isAvailable ? "btn-disabled" : ""
        }`}
     onClick={() => {
  addToCart(item, size);
}}

      >
        {isAvailable ? "Add to Cart" : "Unavailable"}
      </button>
    </div>
  );
}
