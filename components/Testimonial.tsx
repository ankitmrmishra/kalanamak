"use client";

import { Bricolage_Grotesque, Inter } from "next/font/google";
import { motion } from "motion/react";
import {
  GrapeIcon as GrainIcon,
  LeafIcon,
  SparklesIcon,
  Quote,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const PoppinsFont = Bricolage_Grotesque({
  subsets: ["latin-ext"],
  weight: ["600"],
});

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

const testimonials = [
  {
    quote:
      "Kalanamak rice has transformed the way I cook. Its unique aroma and incredible taste remind me of the richness of ancient traditions. A must-have for every gourmet kitchen!",
    name: "Emily Carter",
    title: "Chef and Culinary Enthusiast",
  },
  {
    quote:
      "I've never tasted rice as fragrant and flavorful as Kalanamak. It's like bringing a piece of India's heritage to my dining table. My family loves it!",
    name: "James Nguyen",
    title: "Food Blogger and Home Chef",
  },
  {
    quote:
      "The quality of Kalanamak rice is unparalleled. Each grain tells a story of authenticity and care. I recommend it to anyone looking for premium rice.",
    name: "Sophia Martinez",
    title: "Nutritionist",
  },
  {
    quote:
      "Cooking with Kalanamak rice is an experience in itself. Its aroma fills the entire house, and the taste is nothing short of perfection. Highly recommended!",
    name: "Akira Tanaka",
    title: "Food Critic",
  },
  {
    quote:
      "Kalanamak rice is truly the 'scented black pearl' of India. It's a delight to cook and an even greater pleasure to eat. Perfect for both everyday meals and special occasions.",
    name: "Liam O'Connor",
    title: "World Cuisine Enthusiast",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 1.5,
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <GrainIcon className="w-8 h-8 text-[#026147]" />
            </motion.div>
          ))}
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#026147] rounded-full opacity-5" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8B5A2B] rounded-full opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <SparklesIcon className="w-6 h-6 text-[#8B5A2B]" />
            <span className={`${inter.className} text-[#8B5A2B]`}>
              Customer Experiences
            </span>
          </div>
          <h2
            className={`${PoppinsFont.className} text-[#026147] text-3xl md:text-4xl lg:text-5xl leading-tight mb-6`}
          >
            What Our Customers Say
          </h2>
          <p
            className={`${inter.className} text-[#026147] text-lg max-w-2xl mx-auto opacity-90`}
          >
            Discover why food enthusiasts and culinary experts choose our
            premium Kalanamak rice
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Large quote icon */}
            <div className="absolute -top-10 left-0 opacity-10">
              <Quote className="w-24 h-24 text-[#026147]" />
            </div>

            {/* Testimonial cards */}
            <div className="relative h-[400px] md:h-[300px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-[#026147]/10",
                    "transition-all duration-500 ease-in-out"
                  )}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    scale: activeIndex === index ? 1 : 0.9,

                    zIndex: activeIndex === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setIsAutoplay(false)}
                  onMouseLeave={() => setIsAutoplay(true)}
                >
                  <div className="flex flex-col h-full justify-between">
                    <p
                      className={`${inter.className} text-[#026147] text-lg md:text-xl italic mb-6`}
                    >
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-[#026147]/10 flex items-center justify-center mr-4">
                        <LeafIcon className="w-6 h-6 text-[#026147]" />
                      </div>
                      <div>
                        <h4
                          className={`${PoppinsFont.className} text-[#026147] font-semibold`}
                        >
                          {testimonial.name}
                        </h4>
                        <p
                          className={`${inter.className} text-[#8B5A2B] text-sm`}
                        >
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-[#026147] w-6"
                      : "bg-[#026147]/30"
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoplay(false);
                    setTimeout(() => setIsAutoplay(true), 10000);
                  }}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
