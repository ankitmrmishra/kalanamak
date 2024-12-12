import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import React from "react";
import Buddha from "../public/assets/rb_2147981190.png";

const PoppinsFont = Bricolage_Grotesque({
  subsets: ["latin-ext"],
  weight: ["600"],
});
const BrocolageFontLight = Bricolage_Grotesque({
  subsets: ["latin-ext"],
  weight: ["400"],
});
const Story = () => {
  return (
    <div className="w-full flex flex-col justify-center align-middle items-center h-full relative overflow-hidden">
      <div className="heading max-w-5xl  px-4 text-center flex justify-center align-middle items-center gap-5 flex-col">
        <span
          className={`md:text-5xl text-4xl ${PoppinsFont.className} text-textcolur`}
        >
          The Scented Black Pearl
        </span>
        <p className={`text-textcolur/80 ${BrocolageFontLight.className}`}>
          Kalanamak rice, often referred to as &quot;the scented black
          pearl,&quot; is an ancient variety of rice from the Terai region of
          Uttar Pradesh, India, particularly in areas like Siddharthnagar and
          Gorakhpur. It has a unique and captivating story tied to its origin
          and cultural heritage.
        </p>
      </div>
      <div className="grid md:grid-cols-2 max-w-5xl p-10">
        <div className="left flex flex-col justify-center md:items-start items-center text-justify md:text-start  align-middle gap-3 ">
          <span
            className={`md:text-4xl text-3xl ${PoppinsFont.className} text-textcolur`}
          >
            The Origin Story
          </span>
          <p className={`text-textcolur/80 ${PoppinsFont.className}`}>
            Kalanamak rice is associated with the Buddhist era and is believed
            to have been a gift from the Buddha himself. It is said that Lord
            Buddha, while passing through the Terai region after enlightenment,
            offered this variety of rice to the locals as a token of goodwill
            and blessings. The rice was cultivated in the surrounding areas and
            became a staple, revered for its distinct aroma and taste.
          </p>
          <p className={`text-textcolur/80 ${PoppinsFont.className}`}>
            Over time, Kalanamak rice gained fame not just for its legendary
            origin but also for its exceptional qualities. The rice grains are
            medium-long, slender, and turn aromatic during cooking, filling the
            air with a nutty fragrance reminiscent of basmati but with a deeper,
            earthier profile.
          </p>
        </div>
        <div className="right">
          <Image src={Buddha} alt="" width={500} height={500} />
        </div>
      </div>
      {/* <div className="absolute -left-96  -z-50 animate-slow-spin">
        <Image
          width={600}
          height={600}
          src={mandala}
          alt=""
          className="opacity-15 filter blur-sm "
        />
      </div>
      <div className="absolute -right-96  -z-50 animate-slow-spin">
        <Image
          width={600}
          height={600}
          src={mandala}
          alt=""
          className="opacity-15 filter blur-sm "
        />
      </div> */}
    </div>
  );
};

export default Story;
