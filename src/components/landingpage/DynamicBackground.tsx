"use client";
import { BACKGROUND_IMAGES, SLIDE_IMAGES } from "@/constants/DYNAMIC_IMAGES";
import { teeQuotes } from "@/constants/DYNAMIC_QUOTES";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Function to get a random integer within a given range
const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const DynamicBackground = () => {
  // State to keep track of the current dynamic data index
  const [currentIndex, setCurrentIndex] = useState<number>(getRandomInt(0, 5));

  // Framer Motion hook for animations
  const [scope, animate] = useAnimate();

  // Effect for changing the dynamic data at regular intervals
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length
      );
    }, 5000);

    // Clean up on unmounting
    return () => clearInterval(intervalId);
  }, [BACKGROUND_IMAGES]);

  // Effect for animating the dynamic text and image
  useEffect(() => {
    // Animation configuration objects
    const textAnimation = { x: 20, opacity: 1 };
    const imageAnimation = { x: -20, opacity: 1 };
    const fadeOutTextAnimation = { x: -20, opacity: 0 };
    const fadeOutImageAnimation = { x: 20, opacity: 0 };

    // Animating fade in the dynamic text and image
    animate("#dynamicText", textAnimation, { duration: 0.5 });
    animate("#dynamicImage", imageAnimation, { duration: 0.5, delay: 1 });

    // Fading out
    const timeoutId1 = setTimeout(
      () => animate("#dynamicText", fadeOutTextAnimation, { duration: 0.5 }),
      4000
    );
    const timeoutId2 = setTimeout(
      () => animate("#dynamicImage", fadeOutImageAnimation, { duration: 0.5 }),
      4000
    );

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, [currentIndex]);

  return (
    // Section with dynamic background
    <section
      ref={scope}
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGES[currentIndex]})`,
      }}
      className="w-full h-[100svh] bgImage"
    >
      {/* Dynamic Image */}
      <div
        id="dynamicImage"
        className="absolute top-[12%] right-3 w-36 h-36 md:w-64 md:h-64 opacity-0 overflow-hidden"
      >
        <Image
          src={SLIDE_IMAGES[currentIndex]}
          fill
          alt="image"
          sizes="100vw"
        />
      </div>

      {/* Dynamic Quote */}
      <div
        id="dynamicText"
        className="absolute w-11/12 px-3 text-white border-l-4 border-white opacity-0 bottom-5"
      >
        {/* Quote text */}
        <p className="w-2/3 my-2 text-lg italic font-semibold leading-6 text-left md:leading-10 md:text-4xl md:w-1/3">
          {teeQuotes[currentIndex]}
        </p>
        {/* Link to 'tees' page */}
        <Link href={"/tees"} className="text-center">
          <p>
            Check out some tees <span>&#8594;</span>
          </p>
        </Link>
      </div>
    </section>
  );
};

export default DynamicBackground;
