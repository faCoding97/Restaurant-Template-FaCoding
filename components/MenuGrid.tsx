"use client";
import Image from "next/image";
import { useState } from "react";
import type { MenuItem } from "@/types/types";
import ItemModal from "./ItemModal";
import { motion } from "framer-motion";
export default function MenuGrid({ items }: { items: MenuItem[] }) {
  const [selected, setSelected] = useState<MenuItem | null>(null);
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <motion.button
            key={item.name}
            onClick={() => setSelected(item)}
            className="text-left card hover:ring-brand-primary/40 transition hover:scale-[1.01]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            viewport={{ once: true }}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="badge">{item.price}</span>
              </div>
              <p className="mt-2 text-sm text-white/70 line-clamp-2">
                {item.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
      <ItemModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
