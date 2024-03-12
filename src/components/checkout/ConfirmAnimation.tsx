"use client";
import React, { useEffect, useRef } from "react";

import * as doneAnimation from "@/../public/animations/done_animtion.json";
import { Player } from "@lottiefiles/react-lottie-player";

interface ConfirmAnimationProps {
  isOrdered: boolean;
}

const ConfirmAnimation: React.FC<ConfirmAnimationProps> = ({ isOrdered }) => {
  const lottieRef = useRef<Player | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      // Additional check for document
      let stopTimeout: NodeJS.Timeout | undefined;

      if (isOrdered) {
        stopTimeout = setTimeout(() => {
          if (lottieRef.current) {
            lottieRef.current.pause();
          }
        }, 2150);
      }

      return () => clearTimeout(stopTimeout);
    }
  }, [isOrdered]);

  return (
    typeof window !== "undefined" &&
    typeof document !== "undefined" && (
      <Player
        autoplay
        loop={false}
        controls
        keepLastFrame={true}
        src={doneAnimation}
        style={{ height: "13rem", width: "13rem" }}
        ref={lottieRef}
      />
    )
  );
};

export default ConfirmAnimation;
