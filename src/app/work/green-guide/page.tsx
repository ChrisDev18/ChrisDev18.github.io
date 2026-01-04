"use client"

import Hero from "@/app/components/Hero";
import greenguide_hero from "@/app/assets/greenguide.png";
import {raleway} from "@/app/fonts";
import React from "react";
import {Pencil2Icon, PersonIcon, SewingPinIcon, StarIcon} from "@radix-ui/react-icons";

import { useRef } from "react";
import { motion, useMotionValue, useDragControls } from "framer-motion";

const Carousel = ({ children }: {children: React.ReactNode}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const controls = useDragControls();

  // const scroll = (direction: string) => {
  //   if (scrollRef.current?.firstChild) {
  //     const scrollAmount = scrollRef.current.firstChild.offsetWidth + 16; // Card width + gap
  //     scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  //   }
  // };

  return (
      <div className="relative w-full overflow-hidden">
        {/*<button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 p-2 rounded-full shadow-md z-10">*/}
        {/*  <ChevronLeftIcon width={24} height={24} />*/}
        {/*</button>*/}

        <motion.div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar w-full cursor-grab active:cursor-grabbing"
            style={{ x: dragX, scrollBehavior: "smooth", scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
            drag="x"
            dragConstraints={{ left: -500, right: 0 }} // Adjust based on content width
            dragControls={controls}
            dragElastic={0.2} // Adds smooth resistance at edges
        >
          {children}
        </motion.div>

        {/*<button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 p-2 rounded-full shadow-md z-10">*/}
        {/*  <ChevronRightIcon width={24} height={24} />*/}
        {/*</button>*/}
      </div>
  );
};

export default function GreenGuidePage() {
  return (
      <div className={"flex flex-col grow bg-neutral-900 text-white"}>
        <header className={"mb-12"}>
          <Hero title={"GreenGuide"} subsection={"My Work"} img={greenguide_hero}/>
        </header>

        <section className={"flex flex-col items-center"}>
          <div className={"flex flex-col px-10 gap-8 max-w-3xl w-full"}>
            <p className={`font-sans font-medium max-w-2xl`}>
              GreenGuide was a software engineering project during my second year of Computer Science. It focused on
              the following stages of Software Engineering:
            </p>

            <ol className={`font-sans font-medium max-w-2xl list-decimal pl-6 space-y-2`}>
              <li>Requirements Engineering</li>
              <li>Software Specification and Design</li>
              <li>Human Interface Design</li>
              <li>Specification of Tests</li>
            </ol>

            <p className={`font-sans font-medium max-w-2xl`}>
              <em>
                Note: we never actually developed the actual application, this project was rather focused solely on
                the conception stages.
              </em>
            </p>

          </div>
        </section>

        <section className={"flex flex-col items-center"}>
          <div className={"flex flex-col px-10 py-16 gap-8 max-w-3xl w-full"}>
            <hr/>
            <h2 className={`font-sans text-3xl font-semibold max-w-2xl mt-8`}>
              1. Requirements Engineering
            </h2>


            <p className={`font-sans font-medium max-w-2xl`}>
              This stage consisted of us deciding on an initial app idea and determining the software features. We also
              outlined our project&#39;s scope, as well as constraints and assumptions to be made when doing the conception
              of the software
            </p>

            <h2 className={`font-sans text-2xl font-semibold max-w-2xl mt-4`}>
              Software Features
            </h2>

            <Carousel>
              {[
                { icon: <PersonIcon width={45} height={45} />, title: "Accounts" },
                { icon: <SewingPinIcon width={45} height={45} />, title: "Interactive eco-map" },
                { icon: <SewingPinIcon width={45} height={45} />, title: "Business Sustainability Profiles" },
                { icon: <Pencil2Icon width={45} height={45} />, title: "Business Reviews" },
                { icon: <Pencil2Icon width={45} height={45} />, title: "Business Promotions" },
                { icon: <StarIcon width={45} height={45} />, title: "Curator Role" },
              ].map((feature, index) => (
                  <div key={index} className="flex flex-none flex-col items-center w-48 px-8 pt-8 border-2 snap-start h-52 justify-center bg-black">
                    {feature.icon}
                    <div className="flex grow items-center justify-center text-center h-full">
                      <h3 className={`font-sans text-xl font-semibold`}>{feature.title}</h3>
                    </div>
                  </div>
              ))}
            </Carousel>

          </div>
        </section>
      </div>
  );
}