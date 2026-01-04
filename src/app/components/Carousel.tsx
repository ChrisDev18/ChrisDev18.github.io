import {motion} from "framer-motion"
import React, {ReactNode, useEffect, useRef, useState} from "react"
import {ChevronLeftIcon, ChevronRightIcon} from "lucide-react";

interface ProgressBarProps {
  progress: number;
}

function ProgressBar({ progress }: ProgressBarProps) {
  return (
      <div className="h-[12px] w-[128px] border border-black dark:border-white rounded-full relative overflow-hidden">
        <motion.div
            className="absolute h-[11px] bg-black dark:bg-white rounded-full left-0 top-0"
            style={{ width: `${progress * 128}px` }}
        />
      </div>
  );
}

export function Carousel({ items }: { items: ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const AUTO_ADVANCE_MS = 8000;
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0 -> 1
  const progressRef = useRef(0);
  const timerRef = useRef<number>(0);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current
    const item = itemRefs.current[index]

    if (!container || !item) return

    container.scrollTo({
      left: item.offsetLeft,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onScroll = () => {
      const scrollLeft = el.scrollLeft
      let active = 0

      for (let i = itemRefs.current.length-1; i >= 0; i--) {
        if (scrollLeft <= itemRefs.current[i].offsetLeft) {
          active = i
        }
      }
      setActiveIndex(active)
    }

    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  // Auto-advance timer
  useEffect(() => {
    if (items.length <= 1) return;

    const startTimer = () => {
      let startTime = Date.now();
      const tick = () => {
        if (!isPaused) {
          const elapsed = Date.now() - startTime;
          const pct = Math.min(elapsed / AUTO_ADVANCE_MS, 1);
          setProgress(pct);
          progressRef.current = pct;

          if (elapsed >= AUTO_ADVANCE_MS) {
            setActiveIndex((prev) => {
              const next = (prev + 1) % items.length; // loop around
              scrollToIndex(next);
              return next;
            });
            startTime = Date.now(); // reset timer
          }
        }
        timerRef.current = requestAnimationFrame(tick);
      };
      timerRef.current = requestAnimationFrame(tick);
    };

    startTimer();

    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [isPaused, items.length]);


  const pause = () => {
    setIsPaused(true);
  };

  const resume = () => {
    setIsPaused(false);
    setProgress(0); // reset progress when resuming
  };

  return (
    <div className="relative w-full">
      {/* Scroll container */}
      <motion.div
          ref={containerRef}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          className="
        no-scrollbar
        flex
        gap-6
        overflow-x-auto
        overflow-y-visible
        scroll-smooth
        snap-x
        snap-mandatory
        py-6
        px-0
      "
      >
        {items.map((item, index) => (
            <div
                key={index}
                ref={el => {
                  if (el) {
                    (itemRefs.current[index] = el);
                  }
                }}
                className="snap-start shrink-0"
            >
              {item}
            </div>
        ))}
      </motion.div>
      <div className="px-4 flex w-full justify-between items-center gap-6 z-10">

        <span className={`will-change-[opacity] transition-opacity ${isPaused ? "opacity-20" : "opacity-100"}`}>
          <ProgressBar progress={progress} />
        </span>

        <div className="flex justify-center items-center gap-6 z-10"
             onMouseEnter={pause}
             onMouseLeave={resume}
             onFocus={pause}
             onBlur={resume}
        >
          <button
              onClick={() => {
                scrollToIndex(Math.max(activeIndex - 1, 0));
              }}
              className="p-1 rounded-full border border-black text-black dark:border-white dark:text-white flex items-center justify-center
             enabled:hover:bg-black dark:enabled:hover:bg-white enabled:hover:text-white dark:enabled:hover:text-black
             focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white
             disabled:border-black/30 dark:disabled:border-white/30 disabled:text-black/30 dark:disabled:text-white/30"
              aria-label="Previous"
              disabled={activeIndex == 0}
          >
            <ChevronLeftIcon size={20} className="mr-[2px]" />
          </button>

          <div className="flex gap-2">
            {items.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => {
                      scrollToIndex(idx);
                    }}
                    className={`h-3 w-3 rounded-full transition-[colors,scale] ${
                        idx === activeIndex
                            ? "bg-black dark:bg-white"
                            : "bg-transparent border  border-black dark:border-white scale-75 hover:scale-100 hover:bg-black dark:hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
          </div>

          <button
              onClick={() => {
                scrollToIndex(Math.min(activeIndex + 1, items.length - 1));
              }}
              className="p-1 rounded-full border border-black text-black dark:border-white dark:text-white flex items-center justify-center
             enabled:hover:bg-black dark:enabled:hover:bg-white enabled:hover:text-white dark:enabled:hover:text-black
             focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white
             disabled:border-black/30 dark:disabled:border-white/30 disabled:text-black/30 dark:disabled:text-white/30"
              aria-label="Next"
              disabled={activeIndex == items.length - 1}
          >
            <ChevronRightIcon size={20} className="ml-[2px]"/>
          </button>
        </div>
      </div>
    </div>
  );
}