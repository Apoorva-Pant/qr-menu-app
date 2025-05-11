'use client';
import { categories } from '../data/menuData';
import CategoryTile from './CategoryTile';

export default function MenuSection() {
  return (
    <div className="flex flex-col gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md">
      {categories.map((category) => (
        <CategoryTile key={category.name} category={category} />
      ))}
    </div>
  );
}
