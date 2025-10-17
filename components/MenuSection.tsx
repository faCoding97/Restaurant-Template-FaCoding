"use client";
import { useMemo, useState } from "react";
import type { MenuItem } from "@/types/types";
import CategoryFilter from "./CategoryFilter";
import MenuGrid from "./MenuGrid";
export default function MenuSection({ items }: { items: MenuItem[] }) {
  const [category, setCategory] = useState("All");
  const categories = useMemo(
    () => Array.from(new Set(items.map((i) => i.category))),
    [items]
  );
  const filtered = useMemo(
    () =>
      category === "All" ? items : items.filter((i) => i.category === category),
    [items, category]
  );
  return (
    <section id="menu" className="section" aria-labelledby="menu-title">
      <div className="container">
        <h2
          id="menu-title"
          className="text-center text-3xl md:text-4xl font-bold mb-4">
          Our Menu
        </h2>
        <p className="text-center text-white/70 max-w-2xl mx-auto mb-8">
          Tap a category to filter. Tap an item to view details.
        </p>
        <CategoryFilter categories={categories} onChange={setCategory} />
        <div className="mt-10">
          <MenuGrid items={filtered} />
        </div>
      </div>
    </section>
  );
}
