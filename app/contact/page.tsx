import data from "@/lib/data";
import ContactSection from "@/components/ContactSection";
export const metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
};
export default function Page() {
  return <ContactSection info={data.restaurantInfo} />;
}
