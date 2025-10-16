import Image from "next/image";
import type { RestaurantInfo } from "@/types/types";

// Hero section with headline and CTA
export default function Hero({ info }: { info: RestaurantInfo }) {
  return (
    <section className="section pt-10 md:pt-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        {/* Text column */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {info.heroTagline}
          </h1>
          <p className="mt-4 text-white/70 max-w-prose">
            Browse our QR-powered menu. Fresh, fast, and finger-licking good.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#menu" className="btn btn-primary">{info.heroCta}</a>
            <a href="#about" className="btn ring-1 ring-white/20 hover:ring-white/40">Learn More</a>
          </div>
        </div>

        {/* Visual column */}
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden ring-1 ring-white/10">
          <Image
            src="/images/pizza.jpg"
            alt="Delicious Pizza"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
