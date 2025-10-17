"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
export default function CategoryFilter({
  categories,
  onChange,
}: {
  categories: string[];
  onChange: (c: string) => void;
}) {
  const [active, setActive] = useState("All");
  const list = useMemo(() => ["All", ...categories], [categories]);
  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-3"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}>
      {list.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              onChange(cat);
            }}
            className={`px-4 py-2 rounded-full text-sm transition ${
              isActive
                ? "bg-brand-primary text-black"
                : "bg-[#111] text-white/80 hover:text-white hover:scale-105"
            } ring-1 ring-white/10`}>
            {cat}
          </button>
        );
      })}
    </motion.div>
  );
}
