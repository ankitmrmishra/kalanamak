"use client";

import { Inter, Bricolage_Grotesque } from "next/font/google";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import { GrapeIcon as GrainIcon, LeafIcon, SparklesIcon } from "lucide-react";
import kalaNamakrice from "@/public/assets/rb_27946.png";

const PoppinsFont = Bricolage_Grotesque({
  subsets: ["latin-ext"],
  weight: ["600"],
});

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden  flex justify-center align-middle items-center md:py-20 md:px-20 py-10">
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
                repeat: Infinity,
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
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#026147] rounded-full opacity-5" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8B5A2B] rounded-full opacity-5" />
      </div>

      <div className="relative container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <SparklesIcon className="w-6 h-6 text-[#8B5A2B]" />
              <span className={`${inter.className} text-[#8B5A2B]`}>
                Premium Quality
              </span>
            </div>

            <h1
              className={`${PoppinsFont.className} text-[#026147] text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6`}
            >
              Experience the Timeless Taste of Kalanamak Rice
            </h1>

            <p
              className={`${inter.className} text-[#026147] text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 opacity-90`}
            >
              Discover the purity of ancient grains with our organically sourced
              Kalanamak rice. Perfectly aromatic, naturally nutritious, and
              sustainably cultivated.
            </p>

            <div className="flex  justify-center lg:justify-start items-center gap-4">
              <Button className="rounded-full bg-[#026147] px-8 py-6 text-lg hover:bg-[#026147]/90 transition-all duration-300">
                Shop Now
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-[#8B5A2B] text-[#8B5A2B] px-8 py-6 text-lg hover:bg-[#8B5A2B] hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
              {[
                { icon: LeafIcon, text: "100% Organic" },
                { icon: GrainIcon, text: "Premium Grade" },
                { icon: SparklesIcon, text: "Rich Aroma" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-center lg:justify-start gap-2 text-[#026147]"
                >
                  <feature.icon className="w-5 h-5" />
                  <span className={`${inter.className} text-sm`}>
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Content - Rice Image */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative hidden md:block w-full aspect-square max-w-xl mx-auto">
            <Image
              src={kalaNamakrice}
              alt="Premium Kalanamak Rice"
              width={600}
              height={600}
              className="object-cover rounded-full -rotate-90"
              priority
            />
            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4  rounded-full p-4 "
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <LeafIcon className="w-6 h-6 text-[#026147]" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4  rounded-full p-4 "
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <SparklesIcon className="w-6 h-6 text-[#8B5A2B]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
