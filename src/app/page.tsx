import React from "react";
import DynamicBackground from "@/components/landingpage/DynamicBackground";
import COLORS from "@/constants/COLORS";
import Image from "next/image";
import GridItemProps from "@/props/GridItemProps";
import GRID_ITEMS from "@/constants/GRID_ITEMS";

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <DynamicBackground />

      {/* Section 3 */}
      <section
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 ${COLORS.BG_DARK} text-white`}
      >
        {/* Grid Items */}
        {GRID_ITEMS.map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </section>
    </>
  );
}

// Grid Item Component
const GridItem: React.FC<GridItemProps> = ({ type, heading, url }) => (
  <div className="w-full h-[100vw] sm:h-[50vw] lg:h-[33.34vw] relative">
    {type === "text" ? (
      <div className="absolute w-full p-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h2 className="text-3xl md:text-5xl">
          <strong>{heading}</strong>
        </h2>
      </div>
    ) : (
      url && <Image src={url} fill alt="image" />
    )}
  </div>
);
