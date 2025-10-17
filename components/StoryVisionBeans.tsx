"use client";
import type { RestaurantInfo } from "@/types/types";
import { motion } from "framer-motion";
export default function StoryVisionBeans({ info }: { info: RestaurantInfo }) {
  const items = [
    { title: "Our Story", text: info.story },
    { title: "Our Vision", text: info.vision },
    { title: "Fresh & Organic Beans", text: info.beans },
  ];
  return (
    <section className="section" aria-labelledby="svb-title">
      <div className="container">
        <h2
          id="svb-title"
          className="text-center text-3xl md:text-4xl font-bold mb-10">
          Quality & Craft
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              className="card p-6 hover:ring-brand-primary/40 transition hover:scale-[1.01]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}>
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-white/70">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
