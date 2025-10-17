import data from "@/lib/data";
import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import StoryVisionBeans from "@/components/StoryVisionBeans";
import ContactSection from "@/components/ContactSection";
import QRSection from "@/components/QRSection";
export default function Page() {
  return (
    <>
      <Hero info={data.restaurantInfo} />
      <Promotions promotions={data.promotions} />
      <MenuSection items={data.menuItems} />
      <About info={data.restaurantInfo} />
      <StoryVisionBeans info={data.restaurantInfo} />
      <ContactSection info={data.restaurantInfo} />
      <QRSection info={data.restaurantInfo} />
    </>
  );
}
