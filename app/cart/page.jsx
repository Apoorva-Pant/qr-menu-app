'use client';

import Cart from '../../components/Cart';

export default function CartPage() {
  return (
    <div className="p-4">
      <div className="backdrop-blur-md bg-white/40 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
        <Cart />
      </div>
    </div>
  );
}
