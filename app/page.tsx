// Home page composing sections: Hero, Promotions, Menu, About, Contact, QR
import data from "@/lib/data";
import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import QRSection from "@/components/QRSection";

export default function Page() {
  return (
    <>
      {/* Hero / Header banner */}
      <Hero info={data.restaurantInfo} />

      {/* Promotions strip */}
      <Promotions promotions={data.promotions} />

      {/* Our Menu section with filters and modal */}
      <MenuSection items={data.menuItems} />

      {/* About section */}
      <About info={data.restaurantInfo} />

      {/* Contact + Map + social links */}
      <ContactSection info={data.restaurantInfo} />

      {/* QR code download section */}
      <QRSection info={data.restaurantInfo} />
    </>
  );
}
