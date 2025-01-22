"use client"

import Link from "next/link";
import Image from "next/image";

import insa_campus from "/public/insa_lyon_campus.jpg";
import {raleway, robotoSlab} from "@/app/fonts";
import {motion, useScroll, useTransform} from "motion/react";
import {ChevronLeftIcon} from "@radix-ui/react-icons";

export default function InsaPage() {
  const { scrollY } = useScroll(); // Track the vertical scroll position
  const y = useTransform(scrollY, [0, 500], [0, 200]); // Adjust the range to control the parallax speed

  return (
      <div className="flex-grow flex flex-col bg-neutral-100 text-gray-900 dark:bg-neutral-900 dark:text-white">
        <header className="relative">
          <div className="relative flex flex-col items-center justify-end h-[50vh] min-h-fit p-10 bg-neutral-900">
            <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ y }}
                className="absolute inset-0 w-full h-full z-0"
            >
              <Image
                  src={insa_campus}
                  alt={"Photo of The University of Birmingham's campus"}
                  className="absolute inset-0 object-cover w-full h-full"
                  layout="fill"
                  style={{maskImage: "linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 70%)"}}
              />
            </motion.div>

            <div className="z-10">
              <Link href={"/"}
                    className={`${raleway.className} flex items-center justify-center gap-1 text-xl text-center font-semibold text-white py-2 px-4 rounded hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                    aria-label="Navigate to Home">
                <ChevronLeftIcon />
                Home
              </Link>
              <motion.h1
                  initial={{ y: -25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1}}
                  className={`${robotoSlab.className} text-5xl text-center font-bold text-white drop-shadow-lg`}>
                INSA Lyon
              </motion.h1>
            </div>
          </div>
        </header>

        <section className={"flex flex-col bg-emerald-50 dark:bg-lime-950 items-center z-20"}>
          <div className={"flex flex-col px-10 py-16 gap-8 max-w-4xl w-full"}>
            <div className={"flex flex-col gap-6"}>
              <h2 className={`${robotoSlab.className} text-4xl text-left font-bold`}>
                Modules
              </h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                As an exchange student, I get to pick all of my modules and learn content from years 3 to 5. I have
                studied the following modules at INSA Lyon:
              </p>

              <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                Year 3 content (eqv. final year BSc)
              </h3>

              <ul className={`${raleway.className} font-medium max-w-2xl`}>
                <li>Linear Algebra & Matrix Calculus</li>
                <li>Signal Processing & Fourier Analysis</li>
                <li>Introduction to Object Oriented Programming in C++</li>
              </ul>

              <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                Year 4 content (eqv. beginner MSci)
              </h3>

              <ul className={`${raleway.className} font-medium max-w-2xl`}>
                <li>Network Programming</li>
                <li>Semantic Web</li>
              </ul>

              <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                Year 5 content (eqv. final year MSci)
              </h3>

              <ul className={`${raleway.className} font-medium max-w-2xl`}>
                <li>Text Mining</li>
                <li>Machine Learning and Data Analytics</li>
                <li>Android Mobile Development</li>
              </ul>

            </div>
          </div>
        </section>

      </div>
  )
}