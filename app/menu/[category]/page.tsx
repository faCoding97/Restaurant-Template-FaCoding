import data from "@/lib/data";
import type { Metadata } from "next";
import MenuGrid from "@/components/MenuGrid";
import Link from "next/link";
type Props = { params: { category: string } };
export async function generateStaticParams() {
  const categories = Array.from(new Set(data.menuItems.map((i) => i.category)));
  return categories.map((c) => ({ category: c }));
}
export function generateMetadata({ params }: Props): Metadata {
  const cat = decodeURIComponent(params.category);
  const title = `${cat} Menu`;
  const description = `Explore ${cat} items at ${data.restaurantInfo.name}.`;
  return {
    title,
    description,
    alternates: { canonical: `/menu/${cat}` },
    openGraph: {
      title,
      description,
      url: `${data.restaurantInfo.siteUrl}/menu/${encodeURIComponent(cat)}`,
    },
  };
}
export default function Page({ params }: Props) {
  const cat = decodeURIComponent(params.category);
  const filtered = data.menuItems.filter(
    (i) => i.category.toLowerCase() === cat.toLowerCase()
  );
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">{cat}</h1>
          <Link
            href="/menu"
            className="btn ring-1 ring-white/20 hover:ring-white/40">
            ← Back to Menu
          </Link>
        </div>
        <MenuGrid items={filtered} />
      </div>
    </section>
  );
}
