"use client";
import Image from "next/image";
import type { RestaurantInfo } from "@/types/types";
import { motion } from "framer-motion";
export default function Hero({ info }: { info: RestaurantInfo }) {
  return (
    <section className="section pt-10 md:pt-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {info.heroTagline}
          </h1>
          <p className="mt-4 text-white/70 max-w-prose">
            Browse our QR-powered menu. Fresh, fast, and finger-licking good.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="/menu" className="btn btn-primary">
              {info.heroCta}
            </a>
            <a
              href="/about"
              className="btn ring-1 ring-white/20 hover:ring-white/40">
              Learn More
            </a>
          </div>
        </motion.div>
        <motion.div
          className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden ring-1 ring-white/10"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}>
          <Image
            src="/images/pizza.jpg"
            alt="Delicious Pizza"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
