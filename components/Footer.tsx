// Simple footer replicating ElixCode vibe
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-8 text-center text-sm text-white/70">
        <p>
          © {new Date().getFullYear()} ElixCode Restaurant. All rights reserved.
        </p>
        <p className="mt-2">Crafted with ♥ using Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}
