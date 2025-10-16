"use client";
// Header with sticky nav and mobile toggle
import Link from "next/link";
import { useState } from "react";
import data from "@/lib/data";

export default function Header() {
  // This state controls the mobile menu open/close
  const [open, setOpen] = useState(false);
  const info = data.restaurantInfo;

  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="container flex items-center justify-between py-4">
        {/* Brand/Logo */}
        <Link href="/" className="font-script text-3xl text-brand-primary">
          {info.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#menu" className="hover:text-brand-primary">Menu</a>
          <a href="#about" className="hover:text-brand-primary">About</a>
          <a href="#contact" className="hover:text-brand-primary">Contact</a>
          <a href="#qr" className="btn btn-primary">Get QR</a>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full ring-1 ring-white/10 hover:ring-white/30"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0e0e0e]">
          <div className="container py-4 flex flex-col gap-4">
            <a onClick={() => setOpen(false)} href="#menu" className="hover:text-brand-primary">Menu</a>
            <a onClick={() => setOpen(false)} href="#about" className="hover:text-brand-primary">About</a>
            <a onClick={() => setOpen(false)} href="#contact" className="hover:text-brand-primary">Contact</a>
            <a onClick={() => setOpen(false)} href="#qr" className="btn btn-primary w-fit">Get QR</a>
          </div>
        </div>
      )}
    </header>
  );
}
