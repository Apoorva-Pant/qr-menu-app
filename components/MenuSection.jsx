'use client';
import { categories } from '../data/menuData';
import CategoryTile from './CategoryTile';

export default function MenuSection() {
  return (
    <div className="flex flex-col gap-4">
      {categories.map((category) => (
        <CategoryTile key={category.name} category={category} />
      ))}
    </div>
  );
}