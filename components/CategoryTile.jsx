'use client';
import { useState, useEffect, useRef } from 'react';
import MenuItem from './MenuItem';

export default function CategoryTile({ category }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div
        className="bg-base-200 p-4 rounded flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="text-lg font-bold">{category.name}</h2>

        {/* Clean Up/Down Arrow */}
        <span
          className={`transform transition-transform duration-300 inline-block ${
            expanded ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▲
        </span>
      </div>

      {expanded && (
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {category.item.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
