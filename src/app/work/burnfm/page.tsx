"use client"

import Hero from "@/app/components/Hero";
import burnfm_hero from "/public/burnfm-recoded-hero.png";
import {raleway} from "@/app/fonts";
import {motion} from "motion/react";
import Link from "next/link";
import Image from "next/image";
import burn_img1 from "/public/burnfm1.png";
import burn_admin1 from "/public/burnfm/burnadmin1.png";

export default function BurnfmPage() {
  const imgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    rest: {  opacity: 1, scale: 1 },
    hover: { y: -5, scale: 1.1 },
    pressed: { x: -20, rotate: -4, scale: 0.9 },
  }

  const logoVariants = {
    rest: { x: 0, y: 0, rotate: 0, scale: 1 },

  }

  const insa_logoVariants = {
    rest: { y: 0, x: 0, rotate: 0, scale: 1 },
    hover: { y: 10, scale: 1.03 },
    pressed: { y: -5, x: 15, rotate: 2, scale: 0.95 },
  }

  return (
      <div className={"flex flex-col flex-grow bg-neutral-100 text-neutral-900 dark:text-white"}>
        <header>
          <Hero title={"Burn FM"} img={burnfm_hero}/>
        </header>

        <section className={"flex flex-col items-center z-20 bg-neutral-100 dark:bg-neutral-900"}>

          <div className={"flex justify-center mt-20 bg-gray-700 w-full"}>
            <motion.div
                initial={"hidden"}
                whileInView={"rest"}
                viewport={{once: true}}
                variants={imgVariants}
                className={"relative -my-5 pointer-events-none"}
            >
              <Link href={""}>
                <motion.div variants={imgVariants}
                            whileHover={"hover"}
                            whileTap={"pressed"}
                            drag dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                            className={"relative"}>
                  <Image
                      src={burn_admin1}
                      alt={"A picture of INSA Lyon's campus"}
                      width={500} height={400}
                      className={"relative object-cover pointer-events-none -right-4 top-0"}
                  />
                </motion.div>
              </Link>

              <Link href={""}>
                <motion.div variants={insa_logoVariants}
                            className={"absolute -left-4 -bottom-10"}
                            drag dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}>
                  <Image
                      src={burn_img1}
                      alt={"A picture of The University of Birmingham's campus"}
                      width={800} height={200}
                      className={"rotate-2 w-1/2 object-cover"}
                  />
                </motion.div>
              </Link>


            </motion.div>
          </div>
          <div className={"flex flex-col px-10 py-16 gap-8 max-w-3xl w-full"}>
            <div className={"flex flex-col gap-6"}>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                Burn FM is the University of Birmingham&#39;s student radio station. I joined Burn FM in my first year
                at university and have helped host 2 shows.
              </p>


              <h2 className={`${raleway.className} text-3xl font-semibold max-w-2xl mt-8`}>Rebuilding burnfm.com</h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                At the start of my second year, I took interest in the website they currently were using.
                It was an old WordPress site, which seemingly hadn&#39;t been updated in several years,
                however much of the now-broken content was still online.
              </p>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                I decided to take on the challenge of rebuilding the website from scratch.
                I wanted to create a new, modern, and responsive website that would integrate completely with our other
                technologies, as well as being easy to maintain and update.
              </p>

              <h3 className={`${raleway.className} text-2xl font-semibold max-w-2xl`}>
                Technologies
              </h3>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                With a strong background in React, I chose it as the UI library. Next.js was my framework of choice for
                its robust, scalable environment and advanced front-end features.
              </p>

              <h2 className={`${raleway.className} text-3xl font-semibold max-w-2xl mt-8`}>
                Developing the new content management system - Burn Admin Panel
              </h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                The first two years that I was at Burn FM, we used Broadcast Radio to manage our shows.
                It provided a system where we could define our schedules and the radio shows currently running.
                However, the play-out system was recently moved to an open source solution.
              </p>

            </div>
          </div>
        </section>

      </div>
  );
}