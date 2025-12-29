"use client"

import Hero from "@/app/components/Hero";
import burnfm_hero from "/public/burnfm/burnfm-recoded-hero.png";
import {raleway} from "@/app/fonts";
import {motion, useTime, useTransform} from "motion/react";
import Link from "next/link";
import Image from "next/image";
import burn_img1 from "/public/burnfm/burnfm2.png";
import burn_admin1 from "/public/burnfm/burnadmin1.png";

export default function BurnfmPage() {
  const imgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    rest: {  opacity: 1, scale: 1 },
    hover: { y: -5, scale: 1.1 },
    pressed: { x: -20, rotate: -4, scale: 0.9 },
  }

  const insa_logoVariants = {
    rest: { y: 0, x: 0, rotate: 0, scale: 1 },
    hover: { y: 10, scale: 1.03 },
    pressed: { y: -5, x: 15, rotate: 2, scale: 0.95 },
  }

  const time = useTime();
  const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });

  return (
      <div className={"flex flex-col grow bg-neutral-100 text-white"}>
        <header>
          <Hero title={"Burn FM"} subsection={"My Work"} img={burnfm_hero}/>
        </header>

        <section className={"flex flex-col items-center z-20 bg-neutral-900"}>

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


              <h2 className={`${raleway.className} text-3xl font-semibold max-w-2xl mt-8`}>
                Initially rebuilding burnfm.com
              </h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                At the start of my second year, I took interest in the website they currently were using.
                It was an old WordPress site, which seemingly hadn&#39;t been updated in several years,
                however much of the now-broken content was still online.
              </p>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                I decided to take on the challenge of rebuilding the website from scratch.
                I wanted to create a modern and responsive website with the end goal of it being completely integrated
                with our other technologies, as well as easy to maintain and update.
              </p>

              <h3 className={`${raleway.className} text-2xl font-semibold max-w-2xl`}>
                Technologies
              </h3>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                We initially used Broadcast Radio to manage our shows for the first two years that I was at Burn FM.
                It provided the system where we&#39;d define our schedules and the radio shows currently running.
              </p>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                With a strong background in React, I chose it as the UI library. Next.js was my framework of choice for
                its robust, scalable environment and advanced front-end features.
              </p>

              <div className={"flex justify-center gap-16"}>
                <motion.svg
                    style={{rotate}}
                    width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-4 mb-3 w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out">
                  <circle cx="0" cy="0" r="2" fill="#58c4dc"></circle>
                  <g stroke="#58c4dc" strokeWidth="1" fill="none">
                    <ellipse rx="10" ry="4.5"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                  </g>
                </motion.svg>

                <span className={"bg-white self-center rounded-full p-[2px]"}>
                <svg className={"fill-black"} width="90px" height="90px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <g>
                    <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                          fill="current-color">
                    </path>
                  </g>
                </svg>
              </span>
              </div>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                We use StackCP to manage the web server, so a static export of the Next.js app worked well.
              </p>

              <h2 className={`${raleway.className} text-3xl font-semibold max-w-2xl mt-8`}>
                Migrating from Broadcast Radio to a custom CMS - Burn Admin Panel
              </h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                Once the website was fully integrated with Broadcast Radio&#39;s system, me and Bradley (the other
                person working on tech at Burn FM) looked for further ways to integrate the systems together.
              </p>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                As we were paying for UK2&#39;s Shared Hosting, we already had access to the services
                required to replicate the functionality we required from Broadcast Radio. By implementing it ourselves,
                we would have more control over features, and unify more of the technologies we used.
              </p>

              <h3 className={`${raleway.className} text-2xl font-semibold max-w-2xl`}>
                Architecture
              </h3>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                This new system would replicate the features that we used from Broadcast Radio, allowing for:
              </p>

              <ul className={`${raleway.className} font-medium list-disc pl-6 space-y-2`}>
                <li>Radio Shows</li>
                <li>Weekly Schedules consisting of Radio Shows</li>
              </ul>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                As well as adding new features for our specific use-case:
              </p>

              <ul className={`${raleway.className} font-medium list-disc pl-6 space-y-2`}>
                <li>A description and photo attached to each Radio Show</li>
                <li>Podcasts</li>
                <li>Posting messages on the website</li>
                <li>An off-air mode to handle unexpected change of schedule</li>
                <li>A default show to fill in gaps within the schedule</li>
              </ul>

              <h3 className={`${raleway.className} text-2xl font-semibold max-w-2xl`}>
                New features to burnfm.com
              </h3>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                This new architecture allows enhanced control and organisation of shows, allowing for the following
                new features:
              </p>

              <ul className={`${raleway.className} font-medium list-disc pl-6 space-y-2`}>
                <li>A catalogue of all shows past and present</li>
                <li>Shows being able to occur multiple times in one schedule</li>
                <li>Shows remembering all previous show-times</li>
              </ul>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                With the following planned development:
              </p>

              <ul className={`${raleway.className} font-medium list-disc pl-6 space-y-2`}>
                <li>Managing and displaying podcasts on the website</li>
                <li>Managing and displaying posts on the website</li>
              </ul>


            </div>
          </div>
        </section>

      </div>
  );
}