"use client"

import { motion, useScroll, useTransform } from "motion/react";
import { raleway, robotoSlab } from "../fonts";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import {useRef} from "react";
import ProgressiveBlur from "@/app/components/ProgressiveBlur";

export default function Hero({title, subtitle, subsection, img}: { title: string, subtitle?: string, subsection: string, img: StaticImageData }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Moves only while hero is in view
  });

  // Adjust parallax intensity here:
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  // Adjust parallax intensity here:
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
      <motion.div ref={ref} className="relative flex flex-col items-start justify-between h-screen min-h-fit p-4 md:p-8 2xl:p-16 bg-neutral-900">
        <motion.div
            initial={{y: 25, scale: 1.2, opacity: 0}}
            animate={{y: 0, scale: 1, opacity: 1}}
            transition={{duration: 1, ease: [0, 0.71, 0.2, 1.01],}}
            style={{y}}
            className="absolute inset-0 w-full h-[110vh] z-0"
        >
          <Image
              src={img}
              alt={"Photo of The University of Birmingham's campus"}
              className="absolute inset-0 object-cover w-full h-full"
              style={{maskImage: "linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 70%)"}}
          />
        </motion.div>

        <motion.div
            className="absolute inset-0 z-20 p-4 md:p-8 2xl:p-16 pointer-events-none"
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

          <div className="relative inset-0 w-full h-full z-0">
            {/* Bottom line */}
            <motion.div
                variants={{
                  hidden: { scaleX: 0 },
                  show: {
                    scaleX: 1,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-white origin-left"
            />

            {/* Right line */}
            <motion.div
                variants={{
                  hidden: { scaleY: 0 },
                  show: {
                    scaleY: 1,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                }}
                className="absolute top-0 bottom-0 right-0 w-[2px] bg-white origin-bottom"
            />

            {/* Top line */}
            <motion.div
                variants={{
                  hidden: { scaleX: 0 },
                  show: {
                    scaleX: 1,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                }}
                className="absolute top-0 left-0 right-0 h-[2px] bg-white origin-right"
            />

            {/* Left line */}
            <motion.div
                variants={{
                  hidden: { scaleY: 0 },
                  show: {
                    scaleY: 1,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                }}
                className="absolute top-0 bottom-0 left-0 w-[2px] bg-white origin-top"
            />
          </div>


        </motion.div>

        <motion.div
            className="relative z-10 w-full p-3"
            initial={{backgroundColor: "rgba(255, 255, 255, 0)"}}
            animate={{backgroundColor: "rgba(255, 255, 255, 1)"}}
            transition={{duration: 0.5, ease: "easeOut", delay: 1}}
        >
          <motion.p
              className={`${raleway.className} text-black`}
              initial={{opacity: 0, x: -10}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5, ease: "easeOut", delay: 1}}
          >
            <Link href={"/"}
                  className={"font-semibold rounded-sm underline hover:underline focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"}
                  aria-label="Navigate to Home">
              Chris Wilson
            </Link> / {subsection}
          </motion.p>

          {/* Bottom line */}
          <motion.div
              initial = {{ scaleX: 0 }}
              animate = {{ scaleX: 1 }}
              transition = {{duration: 0.3, ease: "easeInOut", delay: 0.6}}
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-white origin-right"
          />
        </motion.div>

        <div className="relative z-10 flex flex-col items-start w-full p-8">

          <motion.h1 className={`${robotoSlab.className} z-10 mb-4 text-4xl md:text-6xl lg:text-6xl 2xl:text-6xl text-left font-bold text-white tracking-wider`}
                     initial={{y: -25, opacity: 0}}
                     animate={{y: 0, opacity: 1}}
                     transition={{duration: 0.5, ease: "easeOut", delay: 0.3}}>
            {title}
          </motion.h1>

          { subtitle &&
            <motion.p className={`${raleway.className} z-10 ml-1 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-left text-white tracking-wider`}
                      initial={{y: -25, opacity: 0}}
                      animate={{y: 0, opacity: 1}}
                      transition={{duration: 0.5, ease: "easeOut", delay: 0.3}}>
              {subtitle}
            </motion.p>
          }

          <ProgressiveBlur className="h-[300px]" gradientColor="rgb(0,0,0,0.5)"/>
        </div>

      </motion.div>
  );
}