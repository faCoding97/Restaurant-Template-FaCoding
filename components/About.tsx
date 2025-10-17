"use client";
import Image from "next/image";
import type { RestaurantInfo } from "@/types/types";
import { motion } from "framer-motion";
export default function About({ info }: { info: RestaurantInfo }) {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden ring-1 ring-white/10"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <Image
            src="/images/burger.jpg"
            alt="About us"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold">
            We Are ElixCode
          </h2>
          <p className="mt-4 text-white/70">
            We serve freshly made burgers, pizzas, and more — prepared with love
            and the freshest ingredients.
          </p>
          <div className="mt-6">
            <span className="badge">{info.openingHours}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
