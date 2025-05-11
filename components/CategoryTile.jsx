'use client';
import { useState, useEffect, useRef } from 'react';
import MenuItem from './MenuItem';

export default function CategoryTile({ category }) {
  const [expanded, setExpanded] = useState(false);
  const [animate, setAnimate] = useState(false);
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

  useEffect(() => {
    if (expanded) setAnimate(true);
  }, [expanded]);

  return (
    <div ref={ref} className="mb-4 transition-all duration-500">
      <div
        className="bg-base-200 p-4 rounded flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="text-lg font-bold">{category.name}</h2>
        {expanded ? (
          <svg
            className="w-5 h-5 text-gray-500 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg
            className="w-5 h-1 text-gray-500 transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="4" y="11" width="16" height="2" rx="1" />
          </svg>
        )}
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          expanded ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {category.item.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}