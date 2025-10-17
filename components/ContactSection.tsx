"use client";
import type { RestaurantInfo } from "@/types/types";
import { motion } from "framer-motion";
export default function ContactSection({ info }: { info: RestaurantInfo }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    info.location
  )}&z=15&output=embed`;
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}>
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold">
            Contact & Location
          </h2>
          <ul className="mt-6 space-y-3 text-white/80">
            <li>
              <strong>Phone:</strong>{" "}
              <a
                className="hover:text-brand-primary"
                href={`tel:${info.phone}`}>
                {info.phone}
              </a>
            </li>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a
                className="hover:text-brand-primary"
                href={`https://wa.me/${info.whatsapp.replace(/\D/g, "")}`}
                target="_blank">
                Chat
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{" "}
              <a
                className="hover:text-brand-primary"
                href={info.instagram}
                target="_blank"
                rel="noopener noreferrer">
                Visit
              </a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                className="hover:text-brand-primary"
                href={`mailto:${info.email}`}>
                {info.email}
              </a>
            </li>
            <li>
              <strong>Opening Hours:</strong> {info.openingHours}
            </li>
            <li>
              <strong>Address:</strong> {info.location}
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="card overflow-hidden h-[380px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <iframe
            title="Google Map"
            src={mapSrc}
            className="w-full h-full"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
