"use client";
import Image from "next/image";
import { MenuItem } from "@/types/types";
import { motion, AnimatePresence } from "framer-motion";
export default function ItemModal({
  item,
  onClose,
}: {
  item: MenuItem | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <button
            aria-label="Close modal"
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur"
          />
          <motion.div
            className="relative z-10 w-[92vw] max-w-3xl card"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
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
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-primary inline-block" />{" "}
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-3">
                  <button
                    onClick={onClose}
                    className="btn ring-1 ring-white/20 hover:ring-white/40">
                    Close
                  </button>
                  <a href="/contact" className="btn btn-primary">
                    Call to Order
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
