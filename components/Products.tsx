import React from "react";
import { Bricolage_Grotesque } from "next/font/google";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image, { StaticImageData } from "next/image";

import { Target } from "lucide-react";
import { Button } from "./ui/button";
import Mockup from "../public/assets/ShoopinMockup.png";
import { cn } from "@/lib/utils";

const PoppinsFont = Bricolage_Grotesque({
  subsets: ["latin-ext"],
  weight: ["600"],
});
const BrocolageFontLight = Bricolage_Grotesque({
  subsets: ["latin-ext"],
  weight: ["400"],
});
const Products = () => {
  return (
    <div className="flex justify-center align-middle items-center py-10 ">
      <div className="max-w-7xl flex flex-col justify-between align-middle items-center gap-5 ">
        <div className="heading max-w-5xl  px-4 text-center flex justify-center align-middle items-center gap-5 flex-col">
          <span
            className={`md:text-5xl text-4xl ${PoppinsFont.className} text-textcolur text-center`}
          >
            Find the Perfect Pack for Your Needs
          </span>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:px-20 px-2 gap-3">
          {ProductData.map((product, index) => (
            <ProductsCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

type Featurestype = {
  feature: string;
};

interface ProductsCardInterface {
  image: StaticImageData;
  title: string;
  description: string;
  Pricing: number;
  Features: Featurestype[];
}

export const ProductsCard: React.FC<ProductsCardInterface> = ({
  image,
  title,
  description,
  Pricing,
  Features,
}) => {
  return (
    <div className="">
      <Card
        className={cn(
          "text-textcolur",
          title === "Kalanamak Rice - 25kg Pack" &&
            "bg-textcolur text-white border-2 border-orange-700"
        )}
      >
        <CardHeader>
          {title === "Kalanamak Rice - 25kg Pack" && (
            <div className="bg-[#fef3e9] max-w-max px-2 rounded-xl text-textcolur">
              Best Seller
            </div>
          )}
          <CardTitle className={`${PoppinsFont.className} text-3xl `}>
            {title}
          </CardTitle>
          <Image width={500} height={500} src={image} alt="" />
        </CardHeader>
        <CardContent className="flex flex-col justify-between  gap-2">
          <div className={`${BrocolageFontLight.className}`}>{description}</div>
          <div className="flex flex-col gap-2">
            {Features.map((feature, index) => (
              <div
                key={index}
                className="flex justify-start align-middle items-center gap-2"
              >
                <Target className="text-" />{" "}
                <span className="italic ">{feature.feature}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between align-middle items-center ">
            <span className={`${PoppinsFont.className} text-3xl`}>
              ₹{Pricing}
            </span>

            <Button
              className={cn(
                "rounded-full bg-[#026147] px-8 py-6 text-lg hover:bg-[#026147]/90 transition-all duration-300",
                title === "Kalanamak Rice - 25kg Pack" &&
                  "bg-white text-textcolur"
              )}
            >
              Shop Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Products;

const ProductData = [
  {
    image: Mockup,
    title: "Kalanamak Rice - 10kg Pack",
    description:
      "Perfect for small families, this 10kg pack offers the finest quality Kalanamak rice with its authentic aroma and flavor.",
    Pricing: 1200,
    Features: [
      { feature: "Premium organic Kalanamak rice" },
      { feature: "Ideal for daily consumption" },
      { feature: "Vacuum-sealed for freshness" },
    ],
  },
  {
    image: Mockup,
    title: "Kalanamak Rice - 25kg Pack",
    description:
      "A cost-effective option for larger households or bulk buyers. Experience the richness of heritage rice with this 25kg pack.",
    Pricing: 2800,
    Features: [
      { feature: "Economical for bulk buyers" },
      { feature: "Rich in nutrients and antioxidants" },
      { feature: "Farm-to-table guarantee" },
    ],
  },
  {
    image: Mockup,
    title: "Kalanamak Rice - 50kg Pack",
    description:
      "The ultimate choice for large-scale needs, including events or business use. Enjoy heritage rice at its finest.",
    Pricing: 5000,
    Features: [
      { feature: "Best value for bulk purchases" },
      { feature: "Packed with traditional flavor" },
      { feature: "Certified organic farming" },
    ],
  },
];
