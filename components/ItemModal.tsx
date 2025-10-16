"use client";
// Modal for item details (price, ingredients, etc.)
import Image from "next/image";
import { MenuItem } from "@/types/types";

interface Props {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ItemModal({ item, onClose }: Props) {
  // If no item, render nothing
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <button
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur"
      />
      {/* Modal card */}
      <div className="relative z-10 w-[92vw] max-w-3xl card">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-square">
            <Image src={item.image} alt={item.name} fill className="object-cover" />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <span className="badge">{item.price}</span>
            </div>
            <p className="mt-3 text-white/70">{item.description}</p>
            <h4 className="mt-6 font-semibold">Ingredients</h4>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-white/80">
              {item.ingredients.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary inline-block" /> {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <button onClick={onClose} className="btn ring-1 ring-white/20 hover:ring-white/40">Close</button>
              <a href="#contact" className="btn btn-primary">Call to Order</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
