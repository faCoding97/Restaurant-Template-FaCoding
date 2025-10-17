import data from "@/lib/data";
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-8 text-center text-sm text-white/70">
        <p>
          © {new Date().getFullYear()} {data.restaurantInfo.name}. All rights
          reserved.
        </p>
        <p className="mt-2">Crafted with ♥ using Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}
