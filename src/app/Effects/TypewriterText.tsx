import { motion, useMotionValue, useTransform, animate } from "motion/react";
import {useEffect, useState} from "react";
import CursorBlinker from "./Cursor";


export default function TypewriterText({ texts, delay, className }: { texts: string[], delay?: number, className?: string}) {
  const [displayedText, setDisplayedText] = useState(texts[0]);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
      displayedText.slice(0, latest)
  );


  useEffect(() => {
    const len = displayedText.length;
    animate(count, len, {
      type: "tween",
      duration: 4,
      ease: "easeInOut",
      delay: delay || 0,
    });

    const interval = setInterval(() => {
      animate(count, 0, {
        type: "tween",
        duration: 2,
        ease: "easeInOut",
        onComplete: () => {
          const len = displayedText.length;
          const prev = texts.indexOf(displayedText);
          setDisplayedText(texts[(prev + 1) % texts.length]);
          animate(count, len, {
            type: "tween",
            duration: 4,
            ease: "easeInOut",
          });
        },
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [texts, count, displayedText, delay]);

  return (
      <span className={className}>
        <motion.span>{displayText}</motion.span>
        <CursorBlinker />
      </span>
  );
}