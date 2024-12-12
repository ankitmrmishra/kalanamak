"use client";
import { Bricolage_Grotesque } from "next/font/google";

const PoppinsFont = Bricolage_Grotesque({
  subsets: ["latin-ext"],
  weight: ["600"],
});
const BrocolageFontLight = Bricolage_Grotesque({
  subsets: ["latin-ext"],
  weight: ["400"],
});
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCard";

export function Testimonials() {
  return (
    <div className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden py-6">
      <div className="heading max-w-5xl  px-4 text-center flex justify-center align-middle items-center gap-5 flex-col">
        <span
          className={`md:text-5xl text-4xl ${PoppinsFont.className} text-textcolur`}
        >
          People are Talking About us
        </span>
      </div>
      <InfiniteMovingCards
        className={`${BrocolageFontLight.className} max-h-max`}
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Kalanamak rice has transformed the way I cook. Its unique aroma and incredible taste remind me of the richness of ancient traditions. A must-have for every gourmet kitchen!",
    name: "Emily Carter",
    title: "Chef and Culinary Enthusiast",
  },
  {
    quote:
      "I’ve never tasted rice as fragrant and flavorful as Kalanamak. It’s like bringing a piece of India’s heritage to my dining table. My family loves it!",
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
      "Kalanamak rice is truly the ‘scented black pearl’ of India. It’s a delight to cook and an even greater pleasure to eat. Perfect for both everyday meals and special occasions.",
    name: "Liam O'Connor",
    title: "World Cuisine Enthusiast",
  },
];
