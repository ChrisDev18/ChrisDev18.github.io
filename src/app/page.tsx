"use client"
import { motion } from "motion/react";
import {raleway, robotoSlab} from "@/app/fonts";
import {CSSProperties} from "react";
import TypewriterText from "@/app/Effects/TypewriterText";
import Image from "next/image";
import uob_campus from "/public/uob_campus.webp";
import insa_lyon_campus from "/public/insa_lyon_campus.jpg";
import burn_bg from "/public/burnfm-recoded-bg.png";
import exist_bg from "/public/exist2024_bg.png";
import burn from "/public/burnfm1.png";
import spotifyapp_bg from "/public/spotifyapp_bg.png";
import gameif_bg from "/public/gameif_bg.png";
import greenguide from "/public/greenguide.png";

import uob_logo from "/public/uob_logo.png";
import insa_lyon_logo from "/public/insa_lyon_logo.jpg";
import Carousel from "@/app/components/Carousel";
import Link from "next/link";


export default function Home() {
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
      {name: "Java", color: "#DA3832" },
    {name: "Python", color: "#ffd343" },
    {name: "TypeScript", color: "#3178c6" },
    {name: "C", color: "#3178c6" },
    {name: "C++", color: "#3178c6" },
    {name: "Figma", color: "#e63fb1"},
    {name: "React", color: "#61DAFB"},
    {name: "Angular", color: "#DD0031"},
    {name: "Next.js", color: "#000000"},
    {name: "Radix UI", color: "#000000"},
    {name: "PyTorch", color: "#EE4C2C"},
    {name: "SpaCy", color: "#09A3D5"},
    {name: "JavaScript", color: "#F7DF1E"},
    {name: "PostgreSQL", color: "#336791"},
    {name: "MySQL", color: "#4479A1"} ];

  return (
      <div className="flex-grow flex flex-col justify-center bg-neutral-100 text-gray-900 dark:bg-neutral-950 dark:text-white">
        <section className="h-screen flex flex-col justify-center items-center gap-4 bg-white-50 text-gray-900 dark:text-white p-6 noise">
          <div className="backdrop-text">
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
                        <a
                            key={i}
                            className={`
                              ${raleway.className}
                              text-white dark:text-gray-900 opacity-25 font-bold
                              hover:opacity-100 hover:scale-110
                              transition-transform ease-out text-custom`
                            }
                            style={{'--hover-color': item.color} as CSSProperties}
                            href={"#"} suppressHydrationWarning
                        >
                          {item.name}
                        </a>
                    )}
                  </motion.div>
                </div>
            )}
          </div>

          <motion.h1
              initial={{opacity: 0, letterSpacing: "0.5rem", fontWeight: 400, width: "115%"}}
              animate={{opacity: 1, letterSpacing: "0rem", fontWeight: 700, width: "100%"}}
              transition={{duration: 2, ease: "easeOut"}}
              className={`${robotoSlab.className} text-8xl text-center font-bold tracking-wide z-10`}>
            Chris Wilson
          </motion.h1>

          <motion.span initial={{opacity: 0}}
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

        </section>

        <section className={"flex flex-col bg-emerald-50 dark:bg-lime-950 items-center"}>
          <div className={"flex flex-col px-10 py-16 gap-8 max-w-4xl w-full"}>
            <div className={"flex flex-col gap-6 items-center"}>
              <h2 className={`${robotoSlab.className} mt-8 text-4xl text-center font-bold`}>
                My Studies
              </h2>

              <p className={`${raleway.className} text-center font-medium max-w-2xl`}>
                I am a third year MSci Computer Science student at <i>The University of Birmingham</i>. I&#39;m
                currently on exchange this year at <i>INSA Lyon</i> in France.
              </p>

              <p className={`${raleway.className} font-semibold text-center text-lime-800 dark:text-white opacity-70 max-w-2xl`}>
                Click on either uni to learn more
              </p>

              <div className={"flex justify-between border-2 border-black dark:border-emerald-100 border-dashed my-12 lg:my-16 mx-5"}>

                <motion.div
                    initial={"hidden"}
                    whileInView={"rest"}
                    viewport={{ once: true }}
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
                    viewport={{ once: true }}
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

              <p className={`${raleway.className} text-center font-medium max-w-2xl mt-4`}>
                For a long time I&#39;ve taken a special interest in front-end; I learnt React by myself and developed
                my skills in several styling languages through independent projects. This website uses Tailwind CSS for
                it&#39;s styling, <a href={"https://burnfm.com"}>Burn FM&#39;s website</a> uses pure CSS, and its admin
                panel which is currently being developed uses Radix Themes.
              </p>

              <h3 className={`${robotoSlab.className} mt-10 text-4xl text-center font-bold`}>
                More about me
              </h3>

              <p className={`${raleway.className} text-center font-medium max-w-2xl`}>
                I love language and linguistics. I am currently learning French and Italian which I get to use quite
                a bit in my exchange over here in France, but also love learning little bits and pieces from all the
                languages I hear from friends.
              </p>

              <p className={`${raleway.className} text-center font-medium max-w-2xl`}>
                Going out is great, but also have to say nothing quite beats a cosy night in with friends.
                I love a good action/fantasy film like Hunger Games, Twilight or Harry Potter.
              </p>


            </div>
          </div>
        </section>

        <section className={"flex flex-col bg-gray-900 text-white items-center"}>
          <div className={"relative z-10 flex flex-col px-10 py-16 gap-8 max-w-4xl w-full"}>
            <h2 className={`${robotoSlab.className} text-5xl text-left font-bold text-emerald-100`}>
              My work
            </h2>

            <p className={`${raleway.className} text-left font-medium max-w-2xl`}>
              The two areas of Computer Science which particularly interest me are App Development and Machine Learning.
              Between life and work at uni, I have worked on a number of projects - some independent and some as part of
              uni.
            </p>

            <Carousel title="Application Development" projects={[
              {
                title: "Burn FM",
                description: "Recoding BurnFM.com using React and Next.js",
                members: 1,
                bg_img: burn_bg,
                img: {src: burn, landscape: true},
                link: "https://github.com/ChrisDev18/burnfm-recoded"
              },
              {
                title: "TrackTracker - Spotify Listening Analyser",
                description: "A full-stack web app that analyses your Spotify listening habits and those of your friends.",
                members: 7,
                bg_img: spotifyapp_bg
              },
              {
                title: "Video Game Search Engine",
                members: 6,
                description: "...",
                bg_img: gameif_bg
              },
              {
                title: "GreenGuide",
                description: "A Software Engineering project to design an ecologically-focused web app.",
                members: 6,
                bg_img: exist_bg,
                img: {src: greenguide, landscape: false},
              },

            ]} />

            <Carousel
                title="Machine Learning and Artificial Intelligence"
                projects={[
                {
                  title: 'EXIST 2024 Challenge',
                  description:
                  'Identifying sexism within tweets using Fine-Tuned XLM-RoBERTa and Gemini Zero-Shot Learning.',
                  bg_img: exist_bg,
                  members: 3,
                },
                {
                  title: 'IMDB Review Sentiment Analysis',
                  description: 'Determining whether a review is negative or positive, trained on IMDB reviews for film and TV.',
                  bg_img: gameif_bg,
                  members: 7,
                },
                ]}
            />
          </div>
        </section>
      </div>
  );
}
