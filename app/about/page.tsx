import data from "@/lib/data";
import About from "@/components/About";
import StoryVisionBeans from "@/components/StoryVisionBeans";
export const metadata = { title: "About", alternates: { canonical: "/about" } };
export default function Page() {
  return (
    <>
      <About info={data.restaurantInfo} />
      <StoryVisionBeans info={data.restaurantInfo} />
    </>
  );
}
