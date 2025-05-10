'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 justify-between px-4">
      <Link href="/" className="text-xl font-bold mx-auto">Napster Coffee ☕</Link>
      <Link href="/cart" className="btn btn-outline btn-sm">Cart</Link>
    </div>
  );
}