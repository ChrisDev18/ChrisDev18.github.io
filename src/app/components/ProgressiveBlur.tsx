"use client";

import { motion } from "motion/react";
import React from "react";

type Direction = "top" | "bottom";

interface ProgressiveBlurProps {
  height?: string; // e.g. "50%" or "10rem"
  direction?: Direction;
  gradientColor?: string; // CSS color for the fade (defaults to transparent->white in example)
  className?: string; // extra wrapper classes
}

/**
 * Progressive blur overlay — uses Tailwind for layout and inline styles for dynamic blur + masks.
 * Works reliably because blur values are applied with CSS styles instead of dynamically-generated Tailwind classes.
 */
export default function ProgressiveBlur({
                                          direction = "bottom",
                                          gradientColor = "rgba(255,255,255,1)",
                                          className = "",
                                        }: ProgressiveBlurProps) {
  // layers describe the blur radius (px) and the mask gradient
  const layers = [
    { blurPx: 1, mask: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1) 10%,rgba(0,0,0,1) 30%,rgba(0,0,0,0) 40%)" },
    { blurPx: 2, mask: "linear-gradient(rgba(0,0,0,0) 10%,rgba(0,0,0,1) 20%,rgba(0,0,0,1) 40%,rgba(0,0,0,0) 50%)" },
    { blurPx: 4, mask: "linear-gradient(rgba(0,0,0,0) 15%,rgba(0,0,0,1) 30%,rgba(0,0,0,1) 50%,rgba(0,0,0,0) 60%)" },
    { blurPx: 8, mask: "linear-gradient(rgba(0,0,0,0) 20%,rgba(0,0,0,1) 40%,rgba(0,0,0,1) 60%,rgba(0,0,0,0) 70%)" },
    { blurPx: 16, mask: "linear-gradient(rgba(0,0,0,0) 40%,rgba(0,0,0,1) 60%,rgba(0,0,0,1) 80%,rgba(0,0,0,0) 90%)" },
    { blurPx: 32, mask: "linear-gradient(rgba(0,0,0,0) 60%,rgba(0,0,0,1) 80%)" },
    { blurPx: 64, mask: "linear-gradient(rgba(0,0,0,0) 70%,rgba(0,0,0,1) 100%)" },
  ];

  // position classes based on direction
  const positionClass = direction === "bottom" ? "inset-x-0 bottom-0" : "inset-x-0 top-0";

  return (
      <div
          className={`absolute ${positionClass} pointer-events-none ${className}`}
          aria-hidden
      >
        {layers.map((layer, i) => (
            <motion.div
                key={i}
                className="will-change-scroll absolute inset-0"
                style={{
                  // apply dynamic backdrop-blur using inline style (works even when Tailwind can't see dynamic classes)
                  // backdropFilter: `blur(${layer.blurPx}px)`,
                  // WebkitBackdropFilter: `blur(${layer.blurPx}px)`,
                  // mask to create the progressive opacity/blur distribution
                  maskImage: layer.mask,
                  WebkitMaskImage: layer.mask,
                }}
                initial={{
                  backdropFilter: "blur(0px)",
                  WebkitBackdropFilter: "blur(0px)",
                }}
                animate={{
                  backdropFilter: `blur(${layer.blurPx}px)`,
                  WebkitBackdropFilter: `blur(${layer.blurPx}px)`,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 1
                }}
            />
        ))}

        {/* gradient fade overlay (top->bottom or bottom->top depending on direction) */}
        <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                  direction === "bottom"
                      ? `linear-gradient(transparent, ${gradientColor})`
                      : `linear-gradient(${gradientColor}, transparent)`,
            }}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 1
            }}
        />
      </div>
  );
}