"use client"

import { motion, useScroll, useTransform } from "motion/react";
import { raleway, robotoSlab } from "../fonts";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function Hero({title, img}: { title: string, img: StaticImageData }) {
  const { scrollY } = useScroll(); // Track the vertical scroll position
  const y = useTransform(scrollY, [0, 500], [0, 200]); // Adjust the range to control the parallax speed
  const yTitle = useTransform(scrollY, [0, 500], [0, 100]); // Adjust the range to control the parallax speed

  return (
      <div className="relative flex flex-col items-center justify-end h-[50vh] min-h-fit p-10 bg-neutral-900 overflow-clip">
        <motion.div
            initial={{y: 25, scale: 1.2, opacity: 0}}
            animate={{y: 0, scale: 1, opacity: 1}}
            transition={{duration: 1, ease: [0, 0.71, 0.2, 1.01],}}
            style={{y}}
            className="absolute inset-0 w-full h-full z-0"
        >
          <Image
              src={img}
              alt={"Photo of The University of Birmingham's campus"}
              className="absolute inset-0 object-cover w-full h-full"
              style={{maskImage: "linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 70%)"}}
          />
        </motion.div>

        <motion.div className="z-10"
                    initial={{y: -25, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, ease: "easeOut", delay: 0.3}}
                    style={{y: yTitle}}>
          <Link href={"/"}
                className={`${raleway.className} flex items-center justify-center gap-1 text-xl text-center font-semibold text-white py-2 px-4 rounded hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                aria-label="Navigate to Home">
            <ChevronLeftIcon/>
            Home
          </Link>
          <h1 className={`${robotoSlab.className} text-5xl text-center font-bold text-white drop-shadow-lg`}>
            {title}
          </h1>
        </motion.div>
      </div>
  );
}