"use client";
import type { RestaurantInfo } from "@/types/types";
import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";

export default function QRSection({ info }: { info: RestaurantInfo }) {
  // نگه‌داری رفرنس برای دانلود PNG
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // دانلود QR به‌صورت PNG با رزولوشن داخلی بالا
  const downloadQR = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "restaurant-qr.png";
    a.click();
  };

  return (
    <section id="qr" className="section" aria-labelledby="qr-title">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 id="qr-title" className="text-3xl md:text-4xl font-bold">
            Your Table QR
          </h2>
          <p className="mt-4 text-white/70">
            Download and print this QR code. Place it on your tables so
            customers can scan and browse the menu.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={downloadQR} className="btn btn-primary">
              Download QR
            </button>
            <a
              href={info.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ring-1 ring-white/20 hover:ring-white/40">
              Preview Link
            </a>
          </div>
        </div>

        {/* ظرف واکنش‌گرا: عرض رو محدود کن ولی اجازه بده ۱۰۰٪ بشه */}
        <div
          className="relative w-full mx-auto card p-6 flex items-center justify-center
                        max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          {/* نکته اصلی: size داخلی بزرگ (برای کیفیت)، ولی استایل نمایشی ۱۰۰٪ */}
          <QRCodeCanvas
            value={info.siteUrl}
            size={1024} // رزولوشن داخلی بالا برای چاپ شارپ
            level="M"
            includeMargin={true}
            fgColor="#000000"
            bgColor="#ffffff"
            style={{ width: "100%", height: "auto", maxWidth: "100%" }} // واکنش‌گرا
            // qrcode.react نوع ref رو دقیق تایپ نکرده؛ این هک بی‌خطره
            // @ts-ignore
            ref={canvasRef}
          />
        </div>
      </div>
    </section>
  );
}
