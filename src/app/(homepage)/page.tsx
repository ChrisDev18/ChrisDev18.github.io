"use client"
import {motion, useScroll, useTransform} from "motion/react";
import {raleway, robotoSlab} from "@/app/fonts";
import {CSSProperties, useRef} from "react";
import TypewriterText from "@/app/Effects/TypewriterText";
import Image from "next/image";
import uob_campus from "/public/uob_campus.webp";
import insa_lyon_campus from "/public/insa_lyon_campus.jpg";

import uob_logo from "/public/uob_logo.png";
import insa_lyon_logo from "/public/insa_lyon_logo.jpg";
import Carousel from "@/app/components/Carousel";
import Link from "next/link";
import Hyperlink from "@/app/components/Hyperlink";
import {ChevronUpIcon} from "@radix-ui/react-icons";
import {HomeCarouselCards} from "@/app/(homepage)/HomeCarouselCards";


export default function Home() {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200]);
  const yTitle = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]); // Adjust the range to control the parallax speed

  const marqueeVariants = (_duration: number, direction: "left" | "right", delay: number) => ({
    animate: {
      x: direction == "left" ? [20, 0, -1025, -1045] : [-20, 0, 1025, 1045],
      opacity: [0, 1, 1, 0], // Fade in, stay visible, then fade out
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: _duration,
          times: [0, 0.01, 0.99, 1], // Control fade timing
          ease: "linear",
          delay: 1 + delay, // Add delay
        },
        opacity: {
          repeat: Infinity,
          repeatType: "loop",
          duration: _duration,
          times: [0, 0.01, 0.99, 1], // Control fade timing
          ease: "linear",
          delay: 1 + delay, // Add delay
        },
      },
    },
  });

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    rest: {  opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
    pressed: { scale: 1.1 }
  }

  const logoVariants = {
    rest: { x: 0, y: 0, rotate: 0, scale: 1 },
    hover: { y: -5, scale: 1.1 },
    pressed: { x: -20, rotate: -4, scale: 0.9 },
  }

  const insa_logoVariants = {
    rest: { y: 0, x: 0, rotate: 0, scale: 1 },
    hover: { y: 10, scale: 1.03 },
    pressed: { y: -5, x: 15, rotate: 2, scale: 0.95 },
  }

  function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const langs = [
    { name: "Java", color: "#DA3832" },
    { name: "Python", color: "#FFD343" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "C", color: "#3178C6" },
    { name: "C++", color: "#3178C6" },
    { name: "Figma", color: "#E63FB1" },
    { name: "React", color: "#61DAFB" },
    { name: "Angular", color: "#DD0031" },
    { name: "Next.js", color: "#000000", dark: "#FFFFFF" }, // Kept the custom dark mode color
    { name: "Radix UI", color: "#000000", dark: "#FFFFFF" },
    { name: "PyTorch", color: "#EE4C2C" },
    { name: "SpaCy", color: "#09A3D5" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "MySQL", color: "#4479A1" }
  ];

  return (
      <div className="grow flex flex-col justify-center bg-neutral-100 text-black dark:bg-neutral-950 dark:text-white">
        <motion.section
            initial={{marginBottom: 0}}
            animate={{marginBottom: -60}}
            transition={{delay: 0.5, duration: 1, ease: [0.39, 0.24, 0.3, 1]}}
            ref={ref} className="relative h-screen flex flex-col justify-center items-center gap-4 bg-white-50 text-black dark:text-white p-6 noise"
        >
          <motion.div style={{y: yBg}} className="backdrop-text">
            {[30, 50, 60, 30, 50, 60, 30, 50, 60, 30].map((speed, i) =>
                <div key={i} className={`marquee ${i % 2 == 0 ? "left-1" : "right-1"}`}>
                  <motion.div
                      initial={{x: 0, opacity: 0}}
                      className={`flex gap-[40px] absolute text-nowrap align-middle text-6xl ${i % 2 == 0 ? "left-1" : "right-1"}`}
                      variants={marqueeVariants(
                          speed,
                          i % 2 == 0 ? "left" : "right",
                          i * 0.2
                      )}
                      animate="animate"
                  >
                    {shuffle(langs).map((item, i) =>
                        <span
                            key={i}
                            className={`
                              ${raleway.className}
                              text-white dark:text-gray-900 opacity-25 font-bold
                              hover:opacity-100 hover:scale-110
                              transition-transform ease-out text-custom select-none cursor-default`
                            }
                            style={{'--hover-color': item.color, '--hover-color-dark': item.dark ?? item.color} as CSSProperties}
                            suppressHydrationWarning
                        >
                          {item.name}
                        </span>
                    )}
                  </motion.div>
                </div>
            )}
          </motion.div>

          <motion.h1
              style={{y: yTitle}}
              initial={{opacity: 0, letterSpacing: "0.5rem", fontWeight: 400, width: "115%"}}
              animate={{opacity: 1, letterSpacing: "0rem", fontWeight: 700, width: "100%"}}
              transition={{duration: 2, ease: "easeOut"}}
              className={`${robotoSlab.className} text-8xl text-center font-bold tracking-wide z-10`}>
            Chris Wilson
          </motion.h1>

          <motion.span
              style={{y: yTitle}}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 2, ease: "easeOut", delay: 1}}
              className="text-center font-bold z-10">
            <TypewriterText
                className={`${raleway.className}`}
                delay={1}
                texts={[
                  "Aspiring Software Engineer",
                  "Full Stack Developer in Training",
                  "Front-end Enthusiast",
                  "Computer Science Student",
                  "Exchange Student currently in France",
                  "Building Web Applications from Frontend to Backend"
                ]}
            />
          </motion.span>

        </motion.section>

        <section className={"overflow-clip relative flex flex-col bg-white dark:bg-black items-center z-10"}>
          <motion.div
              initial={{ y: -200 }} // starts invisible
              whileInView={{ y: 0 }} // becomes visible when h2 is in view
              viewport={{ amount: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 h-1/2 pointer-events-none border-t-2 border-t-teal-500 inset-shadow-[0_210px_150px_-200px] inset-shadow-teal-600"
          />
          <ChevronUpIcon height={30} width={30} className={"mt-4"} />

          <div className={"flex flex-col px-10 py-20 gap-8 max-w-4xl w-full"}>
            <div className={"gap-6 relative"}>

              <motion.h2
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5}}
                  className={`${robotoSlab.className} mb-16 text-6xl text-left font-bold`}
              >
                My Studies
              </motion.h2>


              <motion.p
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5}}
                  className={`${raleway.className} text-xl font-medium max-w-2xl mb-16`}
              >
                I am a third year MSci Computer Science student
                at <Hyperlink href={"https://www.birmingham.ac.uk"} internal chevron={false}>The University of Birmingham</Hyperlink>.
                I&#39;m currently on exchange this year
                at <Hyperlink href={"https://www.insa-lyon.fr"} internal chevron={false}>INSA Lyon</Hyperlink> in France.
              </motion.p>

              <motion.p
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{delay: 0.5, duration: 0.5}}
                  className={`${raleway.className} font-semibold text-center text-gray-500 dark:text-gray-400`}>
                Click on either uni to learn more
              </motion.p>

              <div className={"flex justify-between border-4 border-black dark:border-white border-dashed mt-16 mb-20 lg:mt-20 lg:mb-24 mx-5"}>

                <motion.div
                    initial={"hidden"}
                    whileInView={"rest"}
                    // viewport={{ once: true }}
                    whileHover={"hover"}
                    whileTap={"pressed"}
                    variants={imgVariants}
                    drag dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                    // transition={{ duration: 0.01, type: "spring", stiffness: 200 }}
                    className="w-[45%] lg:w-1/2 relative -left-5 -top-10 lg:-left-16"
                >
                  <Link href={"/studies/uob"}>
                    <Image
                        src={uob_campus}
                        alt={"A picture of The University of Birmingham's campus"}
                        width={400} height={400}
                        className={"relative aspect-square object-cover pointer-events-none"}
                    />

                    <motion.div variants={logoVariants} className={"absolute w-1/3 aspect-square object-cover top-6 -right-8 pointer-events-none"}>
                      <Image
                          className={"-rotate-6"}
                          src={uob_logo}
                          alt={"The University of Birmingham's logo"}
                          width={200} height={200}
                      />
                    </motion.div>
                  </Link>
                </motion.div>

                <motion.div
                    initial={"hidden"}
                    whileInView={"rest"}
                    // viewport={{ once: true }}
                    whileHover={"hover"}
                    whileTap={"pressed"}
                    variants={imgVariants}
                    drag dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                    className={"w-[45%] lg:w-1/2 relative left-5 top-10 lg:left-16"}
                >
                  <Link href={"/studies/insa"}>
                    <Image
                        src={insa_lyon_campus}
                        alt={"A picture of INSA Lyon's campus"}
                        width={400} height={400}
                        className={"relative aspect-square object-cover pointer-events-none"}
                    />

                    <motion.div variants={insa_logoVariants} className={"absolute -bottom-2 -left-8 pointer-events-none"}>
                      <Image
                          src={insa_lyon_logo}
                          alt={"A picture of The University of Birmingham's campus"}
                          width={800} height={200}
                          className={"rotate-2 w-3/4 object-cover"}
                      />
                    </motion.div>
                  </Link>

                </motion.div>

              </div>

              <motion.p
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5}}
                  className={`${raleway.className} text-lg text-center font-medium`}>
                For a long time I&#39;ve taken a special interest in front-end; I learnt React by myself and developed
                my skills in several styling languages through independent projects.
              </motion.p>

              <motion.p
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5}}
                  className={`${raleway.className} text-lg text-center font-medium mt-8`}>
                This website uses Tailwind CSS for
                it&#39;s styling, <Hyperlink href={"https://burnfm.com"} chevron={false}>Burn FM&#39;s website</Hyperlink> uses pure CSS, and its admin
                panel, currently being developed, uses <Hyperlink href={"https://www.radix-ui.com"} chevron={false}>Radix Themes</Hyperlink>.
              </motion.p>

              <motion.h3
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5}}
                  className={`${robotoSlab.className} mt-16 text-5xl text-center font-bold mb-8`}>
                More about me
              </motion.h3>

              <motion.p
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5}}
                  className={`${raleway.className} text-lg text-center font-medium`}>
                I love language and linguistics. I am currently learning French and Italian which I get to use quite
                a bit in my exchange over here in France, but also love learning little bits and pieces from all the
                languages I hear from friends.
              </motion.p>
            </div>
          </div>
        </section>

        <section className={"relative flex flex-col bg-linear-to-b from-slate-950 to-indigo-950 text-white items-center"}>
          <motion.div
              initial={{ y: -200 }} // starts invisible
              whileInView={{ y: 0 }} // becomes visible when h2 is in view
              viewport={{ amount: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 h-1/2 pointer-events-none border-t-2 border-t-indigo-500 inset-shadow-[0_210px_150px_-200px] inset-shadow-indigo-600"
          />

          <div className={"relative z-10 px-10 py-20 max-w-4xl w-full"}>
            <motion.h2
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className={`${robotoSlab.className} mb-16 text-6xl text-left font-bold`}>
              My Work
            </motion.h2>

            <motion.p
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className={`${raleway.className} text-xl text-left font-medium max-w-xl mb-4`}>
              Two areas which particularly interest me
              are <strong>App Development</strong> and <strong>Machine Learning</strong>.
            </motion.p>

            <motion.p
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className={`${raleway.className} text-xl text-left font-medium max-w-xl mb-16`}>
              Between life and work at uni, I have worked on a number of projects - some independent
              and some as part of uni.
            </motion.p>

            <Carousel cards={HomeCarouselCards} />

            {/*<Carousel title="Application Development" projects={[*/}
            {/*  {*/}
            {/*    title: "Burn FM",*/}
            {/*    description: "Recoding Burn FM's website and creating a simple website admin panel using React and Next.js",*/}
            {/*    members: 1,*/}
            {/*    bg_img: burn_bg,*/}
            {/*    img: {src: burn, landscape: false},*/}
            {/*    link: "/work/burnfm"*/}
            {/*  },*/}
            {/*  {*/}
            {/*    title: "TrackTracker - Spotify Listening Analyser",*/}
            {/*    description: "A full-stack web app that analyses your Spotify listening habits and those of your friends.",*/}
            {/*    members: 7,*/}
            {/*    bg_img: spotifyapp_bg*/}
            {/*  },*/}
            {/*  {*/}
            {/*    title: "Video Game Search Engine",*/}
            {/*    members: 6,*/}
            {/*    description: "...",*/}
            {/*    bg_img: gameif_bg*/}
            {/*  },*/}
            {/*  {*/}
            {/*    title: "GreenGuide",*/}
            {/*    description: "A Software Engineering project to design an ecologically-focused web app.",*/}
            {/*    members: 6,*/}
            {/*    bg_img: exist_bg,*/}
            {/*    img: {src: greenguide, landscape: false},*/}
            {/*    link: "/work/green-guide"*/}
            {/*  },*/}

            {/*]} />*/}

            {/*<Carousel*/}
            {/*    title="Machine Learning and Artificial Intelligence"*/}
            {/*    projects={[*/}
            {/*    {*/}
            {/*      title: 'EXIST 2024 Challenge',*/}
            {/*      description:*/}
            {/*      'Identifying sexism within tweets using Fine-Tuned XLM-RoBERTa and Gemini Zero-Shot Learning.',*/}
            {/*      bg_img: exist_bg,*/}
            {/*      members: 3,*/}
            {/*      link: "/work/exist"*/}
            {/*    },*/}
            {/*    {*/}
            {/*      title: 'IMDB Review Sentiment Analysis',*/}
            {/*      description: 'Determining whether a review is negative or positive, trained on IMDB reviews for film and TV.',*/}
            {/*      bg_img: gameif_bg,*/}
            {/*      members: 4,*/}
            {/*      link: "/work/imdb-analysis"*/}
            {/*    },*/}
            {/*    ]}*/}
            {/*/>*/}
          </div>
        </section>
      </div>
  );
}
