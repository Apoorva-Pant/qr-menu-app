'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { cart } = useCart();
  const pathname = usePathname();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar bg-base-200 fixed top-0 left-0 w-full z-50 shadow-md px-4">
      <div className="container mx-auto flex justify-between items-center w-full">
        {pathname === "/cart" ? (
          <Link href="/" className="btn btn-ghost text-sm">
            ← Back to Menu
          </Link>
        ) : (
          <span className="text-xl font-bold">Napster ☕</span>
        )}

        <Link href="/cart" className="btn btn-outline btn-sm relative">
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}

