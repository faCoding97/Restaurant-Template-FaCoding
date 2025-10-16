import type { RestaurantInfo } from "@/types/types";

// Contact section with phone, WhatsApp, Instagram, email and a Google Maps embed
export default function ContactSection({ info }: { info: RestaurantInfo }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(info.location)}&z=15&output=embed`;

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container grid lg:grid-cols-2 gap-10">
        <div>
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold">Contact & Location</h2>
          <ul className="mt-6 space-y-3 text-white/80">
            {/* This section handles restaurant contact info rendering */}
            <li><strong>Phone:</strong> <a className="hover:text-brand-primary" href={`tel:${info.phone}`}>{info.phone}</a></li>
            <li><strong>WhatsApp:</strong> <a className="hover:text-brand-primary" href={`https://wa.me/${info.whatsapp.replace(/\D/g, "")}`} target="_blank">Chat</a></li>
            <li><strong>Instagram:</strong> <a className="hover:text-brand-primary" href={info.instagram} target="_blank" rel="noopener noreferrer">Visit</a></li>
            <li><strong>Email:</strong> <a className="hover:text-brand-primary" href={`mailto:${info.email}`}>{info.email}</a></li>
            <li><strong>Address:</strong> {info.location}</li>
          </ul>
        </div>
        <div className="card overflow-hidden h-[380px]">
          {/* Google Maps embed for the location */}
          <iframe
            title="Google Map"
            src={mapSrc}
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
