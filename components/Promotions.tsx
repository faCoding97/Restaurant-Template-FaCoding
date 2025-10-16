// Promotions banner cards
import type { Promotion } from "@/types/types";

export default function Promotions({ promotions }: { promotions: Promotion[] }) {
  return (
    <section className="section" aria-labelledby="promotions-title">
      <div className="container">
        <h2 id="promotions-title" className="text-center text-3xl md:text-4xl font-bold mb-10">
          Hot Deals
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {promotions.map((p, i) => (
            <div key={i} className="card p-6 md:p-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-20 text-7xl font-extrabold text-brand-primary select-none">{p.discount}</div>
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.description}</p>
              <span className="badge mt-4">{p.days}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
