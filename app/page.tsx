import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      {/* <MockupShowCase /> */}

      <Story />
      <Testimonials />
      <Products />
    </div>
  );
}
