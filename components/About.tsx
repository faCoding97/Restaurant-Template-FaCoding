import Image from "next/image";
import type { RestaurantInfo } from "@/types/types";

// About block similar to "We Are ElixCode"
export default function About({ info }: { info: RestaurantInfo }) {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden ring-1 ring-white/10">
          <Image
            src="/images/burger.jpg"
            alt="About us"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold">
            {info.about.title}
          </h2>
          <p className="mt-4 text-white/70">{info.about.text}</p>
          <div className="mt-6">
            <span className="badge">{info.openHours}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
