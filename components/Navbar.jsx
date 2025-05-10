'use client';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar bg-base-200 justify-between px-4">
      <Link href="/" className="text-xl font-bold mx-auto">
        Napster ☕
      </Link>
      <Link href="/cart" className="btn btn-outline btn-sm relative">
        Cart
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Link>
    </div>
  );
}
