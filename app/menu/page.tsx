import data from "@/lib/data";
import Link from "next/link";
export const metadata = { title: "Menu", alternates: { canonical: "/menu" } };
export default function Page() {
  const categories = Array.from(
    new Set(data.menuItems.map((i) => i.category))
  ).sort();
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Browse Menu Categories
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/menu/${encodeURIComponent(cat)}`}
              className="card p-6 hover:ring-brand-primary/40 transition">
              <span className="text-lg font-semibold">{cat}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
