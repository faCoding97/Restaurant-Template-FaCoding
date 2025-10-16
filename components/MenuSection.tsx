"use client";
// High-level section to handle categories filter and filtered list
import { useMemo, useState } from "react";
import type { MenuItem } from "@/types/types";
import CategoryFilter from "./CategoryFilter";
import MenuGrid from "./MenuGrid";

interface Props {
  items: MenuItem[];
}

export default function MenuSection({ items }: Props) {
  // This state stores currently selected category
  const [category, setCategory] = useState<string>("All");

  // Derive unique categories from the JSON data
  const categories = useMemo(() => {
    return Array.from(new Set(items.map((i) => i.category)));
  }, [items]);

  // Filter items by selected category
  const filtered = useMemo(() => {
    if (category === "All") return items;
    return items.filter((i) => i.category === category);
  }, [items, category]);

  return (
    <section id="menu" className="section" aria-labelledby="menu-title">
      <div className="container">
        <h2 id="menu-title" className="text-center text-3xl md:text-4xl font-bold mb-4">
          Our Menu
        </h2>
        <p className="text-center text-white/70 max-w-2xl mx-auto mb-8">
          Tap a category to filter. Tap an item to view details.
        </p>

        {/* Component for rendering menu categories */}
        <CategoryFilter categories={categories} onChange={setCategory} />

        {/* Grid of filtered items */}
        <div className="mt-10">
          <MenuGrid items={filtered} />
        </div>
      </div>
    </section>
  );
}
