import React, {useEffect, useState, ReactNode } from "react";
import { motion, Spring, Tween, useMotionValue } from "framer-motion";
import { AnimatePresence } from "motion/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 20;

const SPRING_OPTIONS: Spring = {
  type: "spring",
  mass: 2,
  stiffness: 400,
  damping: 50,
};

const TWEEN_OPTIONS: Tween = {
  type: "tween",
  duration: 0.5,
  ease: [0.77, 0, 0.18, 1],
};

interface SwipeCarouselProps {
  autoPlay?: boolean;
  autoDelay?: number;
  cards: { shadowColor: string, contents: ReactNode }[]
}

export default function SwipeCarousel({ autoPlay = true, autoDelay = AUTO_DELAY, cards }: SwipeCarouselProps) {
  const [index, setIndex] = useState(0);
  const [transitionType, setTransitionType] = useState<Spring | Tween>(TWEEN_OPTIONS);
  const dragX = useMotionValue(0);

  const numSlides = cards.length;

  useEffect(() => {
    if (!autoPlay) return;
    const intervalRef = setInterval(() => {
      if (dragX.get() === 0) {
        setTransitionType(TWEEN_OPTIONS);
        setIndex((prev) => (prev === numSlides - 1 ? 0 : prev + 1));
      }
    }, autoDelay);
    return () => clearInterval(intervalRef);
  }, [autoPlay, autoDelay, numSlides, dragX, index]);

  const onDragEnd = () => {
    const x = dragX.get();
    setTransitionType(SPRING_OPTIONS);
    if (x <= -DRAG_BUFFER && index < numSlides - 1) {
      setIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleDotClick = (index: number) => {
    setTransitionType(TWEEN_OPTIONS);
    setIndex(index);
  };

  return (
      <div className="relative py-8">
        <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: dragX }}
            animate={{ translateX: `-${index * 100}%` }}
            transition={transitionType}
            onDragEnd={onDragEnd}
            className="flex cursor-grab items-center active:cursor-grabbing"
        >
          <CarouselItems cards={cards} cardIndex={index} transitionType={transitionType} />
        </motion.div>

        <Dots imgIndex={index} total={numSlides} onDotClick={handleDotClick} />
      </div>
  );
};

const CarouselItems = ({
                         cardIndex,
                         transitionType,
                         cards,
                       }: {
  cardIndex: number;
  transitionType: Spring | Tween;
  cards: { shadowColor: string, contents: ReactNode }[];
}) => (
      <>
        {cards.map((card, idx) => {
          return (
              <motion.div
                  key={idx}
                  style={{
                    transition: "outline-offset 100ms, outline-color 100ms, box-shadow 1000ms, background 1000ms",
                    boxShadow: cardIndex === idx ? `0px 4px 64px 0px ${card.shadowColor}` : undefined,
                    background: "black",
                  }}
                  // disabled={cardIndex !== idx}
                  animate={{scale: cardIndex === idx ? 1 : 0.75}}
                  transition={transitionType}
                  className={`w-full h-72 max-sm:h-96 shrink-0 outline outline-white/50 text-left object-cover
                    enabled:hover:outline-offset-4 enabled:hover:outline-white enabled:hover:outline-2`}
              >
                <AnimatePresence>
                  {cardIndex === idx &&
                      card.contents
                  }
                </AnimatePresence>
              </motion.div>
          )
        })}
      </>
);

const Dots = ({
                imgIndex,
                total,
                onDotClick,
              }: {
  imgIndex: number;
  total: number;
  onDotClick: (index: number) => void;
}) => {
  const goBack = () => {
    if (imgIndex > 0) {
      onDotClick(imgIndex - 1);
    }
  };

  const goForward = () => {
    if (imgIndex < total - 1) {
      onDotClick(imgIndex + 1);
    }
  };

  return (
      <div className="mt-8 flex w-full justify-center items-center gap-6 z-10">
        <button
            onClick={goBack}
            className="p-1 rounded-full border border-white text-white flex items-center justify-center
             enabled:hover:bg-white enabled:hover:text-black
             focus:outline-none focus-visible:ring-2 focus-visible:ring-white
             disabled:border-white/30 disabled:text-white/30"
            aria-label="Previous"
            disabled={imgIndex == 0}
        >
          <ChevronLeftIcon size={20} className="mr-[2px]" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, idx) => (
              <button
                  key={idx}
                  onClick={() => onDotClick(idx)}
                  className={`h-3 w-3 rounded-full transition-[colors,scale] ${
                      idx === imgIndex
                          ? "bg-neutral-50"
                          : "bg-transparent border scale-75 hover:scale-100 hover:bg-neutral-50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
              />
          ))}
        </div>

        <button
            onClick={goForward}
            className="p-1 rounded-full border border-white text-white flex items-center justify-center
             enabled:hover:bg-white enabled:hover:text-black
             focus:outline-none focus-visible:ring-2 focus-visible:ring-white
             disabled:border-white/30 disabled:text-white/30"
            aria-label="Next"
            disabled={imgIndex == total - 1}
        >
          <ChevronRightIcon size={20} className="ml-[2px]"/>
        </button>
      </div>
  );
};