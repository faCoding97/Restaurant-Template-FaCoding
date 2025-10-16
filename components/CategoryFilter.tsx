"use client";
// Component for rendering menu categories with filtering
import { useState, useMemo } from "react";

interface Props {
  categories: string[];
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, onChange }: Props) {
  // This state tracks the currently active category
  const [active, setActive] = useState<string>("All");

  const list = useMemo(() => ["All", ...categories], [categories]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {list.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              onChange(cat);
            }}
            className={`px-4 py-2 rounded-full text-sm transition
              ${isActive ? "bg-brand-primary text-black" : "bg-[#111] text-white/80 hover:text-white"}
              ring-1 ring-white/10`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
