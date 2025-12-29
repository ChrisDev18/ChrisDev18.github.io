import { motion } from "framer-motion"
import React, {ReactNode, useEffect, useRef, useState} from "react"
import {ChevronLeftIcon, ChevronRightIcon} from "lucide-react";

export function Carousel({ items }: { items: ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index: number) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
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

  return (
      <div className="relative w-full">
        {/* Scroll container */}
        <motion.div
            ref={containerRef}
            className="
          no-scrollbar
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          py-2
        "
        >
          {items.map((item, index) => (
              <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className="snap-start shrink-0"
              >
                {item}
              </div>
          ))}
        </motion.div>

        <div className="mt-4 px-4 flex w-full justify-between items-center gap-6 z-10">
          <div className="flex justify-center items-center gap-6 z-10">
            <button
                onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
                className="p-1 rounded-full border border-white text-white flex items-center justify-center
               enabled:hover:bg-white enabled:hover:text-black
               focus:outline-none focus-visible:ring-2 focus-visible:ring-white
               disabled:border-white/30 disabled:text-white/30"
                aria-label="Previous"
                disabled={activeIndex == 0}
            >
              <ChevronLeftIcon size={20} className="mr-[2px]" />
            </button>

            <button
                onClick={() =>
                    scrollToIndex(Math.min(activeIndex + 1, items.length - 1))
                }
                className="p-1 rounded-full border border-white text-white flex items-center justify-center
               enabled:hover:bg-white enabled:hover:text-black
               focus:outline-none focus-visible:ring-2 focus-visible:ring-white
               disabled:border-white/30 disabled:text-white/30"
                aria-label="Next"
                disabled={activeIndex == items.length - 1}
            >
              <ChevronRightIcon size={20} className="ml-[2px]"/>
            </button>
          </div>

          <div className="flex gap-2">
            {items.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    className={`h-3 w-3 rounded-full transition-[colors,scale] ${
                        idx === activeIndex
                            ? "bg-neutral-50"
                            : "bg-transparent border scale-75 hover:scale-100 hover:bg-neutral-50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
          </div>
        </div>
      </div>
  )
}