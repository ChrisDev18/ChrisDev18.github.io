"use client"

import { motion, useScroll, useTransform } from "motion/react";
import Image, { StaticImageData } from "next/image";
import {useRef} from "react";

export default function Hero({title, subtitle, subsection, img}: { title: string, subtitle?: string, subsection: string, img: StaticImageData }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Moves only while hero is in view
  });

  // Adjust parallax intensity here:
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
      <motion.div ref={ref} className="relative flex flex-col items-center justify-end h-[calc(100vh-60px)] min-h-fit p-8 sm:p-16 2xl:p-32 bg-neutral-900">
        <motion.div
            initial={{y: 25, scale: 1.2, opacity: 0}}
            animate={{y: 0, scale: 1, opacity: 1}}
            transition={{duration: 1, ease: [0, 0.71, 0.2, 1.01],}}
            style={{y}}
            className="absolute inset-0 w-full h-[100vh] z-0"
        >
          <Image
              src={img}
              alt={"Photo of The University of Birmingham's campus"}
              className="absolute inset-0 object-cover w-full h-full"
              style={{maskImage: "linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 70%)"}}
          />
        </motion.div>

        <motion.div
            className="absolute inset-0 z-20 p-4 sm:p-8 2xl:p-16 pointer-events-none"
            variants={{
              hidden: {},
              show: {
                transition: {
                  // delayChildren: 0.5,
                  staggerChildren: 0.3, // time between each line
                },
              },
            }}
            initial="hidden"
            animate="show"
        >


        </motion.div>

        <div className="relative max-w-5xl z-10 flex flex-col items-start w-full py-6">
          <motion.h1 className={`font-serif z-10 mb-4 text-4xl sm:text-6xl md:text-6xl lg:text-6xl 2xl:text-6xl text-left font-bold text-white tracking-wider`}
                     initial={{x: -25, opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                     transition={{duration: 0.5, ease: "easeOut", delay: 0.2}}>
            {title}
          </motion.h1>

          { subtitle &&
            <motion.p className={`font-sans z-10 ml-1 text-xl sm:text-3xl md:text-3xl lg:text-3xl 2xl:text-4xl text-left text-white tracking-wider`}
                      initial={{x: -25, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{duration: 0.5, ease: "easeOut", delay: 0.3}}>
              {subtitle}
            </motion.p>
          }

          <motion.div
              variants={{
                hidden: { scaleX: 0 },
                show: {
                  scaleX: 1,
                  transition: { duration: 1, ease: [0.2,0,-0.2,1], delay: 0.4 },
                },
              }}
              initial="hidden"
              animate="show"
              className="absolute bottom-0 left-0 w-3/4 h-[2px] bg-white origin-left"
          />
        </div>

      </motion.div>
  );
}