import Image from "next/image";
import type { RestaurantInfo } from "@/types/types";

// QR section: show downloadable QR code image that links to the site
export default function QRSection({ info }: { info: RestaurantInfo }) {
  return (
    <section id="qr" className="section" aria-labelledby="qr-title">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 id="qr-title" className="text-3xl md:text-4xl font-bold">Your Table QR</h2>
          <p className="mt-4 text-white/70">
            Download and print this QR code. Place it on your tables so customers can scan and browse the menu.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={info.qrCodeUrl} download className="btn btn-primary">Download QR</a>
            <a href={info.siteUrl} target="_blank" rel="noopener noreferrer" className="btn ring-1 ring-white/20 hover:ring-white/40">Preview Link</a>
          </div>
        </div>
        <div className="relative aspect-square w-full max-w-sm mx-auto card">
          <Image src={info.qrCodeUrl} alt="QR code linking to this site" fill className="object-contain p-6" />
        </div>
      </div>
    </section>
  );
}
