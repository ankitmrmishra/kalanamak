import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Story from "@/components/Story";
import { Testimonials } from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Hero />
      {/* <MockupShowCase /> */}
      <Story />
      <Testimonials />
      <Products />
    </div>
  );
}
