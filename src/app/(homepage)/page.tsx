"use client"
import {motion, useScroll, useTransform} from "motion/react";
import {CSSProperties, useRef} from "react";
import TypewriterText from "@/app/Effects/TypewriterText";
import Image from "next/image";
import uob_campus from "@/app/assets/uob_campus.webp";
import insa_lyon_campus from "@/app/assets/insa_lyon_campus.jpg";

import uob_logo from "@/app/assets/uob_logo.png";
import insa_lyon_logo from "@/app/assets/insa_lyon_logo.jpg";

import website_photo from "@/app/assets/projects/website_photo.jpg";
import dermia_photo_1 from "@/app/assets/projects/dermia_photo_1.jpg";
import dermia_photo_2 from "@/app/assets/projects/dermia_photo_2.jpg";
import epsrc_app_photo_1 from "@/app/assets/projects/EPSRC_app_photo_1.jpg";
import epsrc_app_photo_2 from "@/app/assets/projects/EPSRC_app_photo_2.jpg";
import burn_fm_photo from "@/app/assets/projects/burn_fm_photo.jpg";
import tracktracker_photo_1 from "@/app/assets/projects/tracktracker_photo_1.jpg";
import tracktracker_photo_2 from "@/app/assets/projects/tracktracker_photo_2.jpg";

import nextjs_icon from "@/app/assets/tool_icons/nextjs_icon.svg";
import SpringBootIcon from "@/app/assets/tool_icons/SpringBootIcon";
import AngularIcon from "@/app/assets/tool_icons/AngularIcon";
import jetpack_compose_icon from "@/app/assets/tool_icons/jetpack_compose_icon.png";

import Carousel from "@/app/components/HeroCarousel";
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
    { name: "C++", color: "#3178C6" },
    { name: "Kotlin", color: "#7f52ff" },
    { name: "Figma", color: "#E63FB1" },
    { name: "React", color: "#61DAFB" },
    { name: "Angular", color: "#DD0031" },
    { name: "Next.js", color: "#000000", dark: "#FFFFFF" }, // Kept the custom dark mode color
    { name: "Radix UI", color: "#000000", dark: "#FFFFFF" },
    { name: "PyTorch", color: "#EE4C2C" },
    { name: "scikit-learn", color: "#09A3D5" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "MongoDB", color: "#2c674c", dark: "rgb(108,234, 116)"},
    { name: "Firebase", color: "#FF9100" },
    { name: "Jetpack Compose", color: "#63c487" }
  ];

  return (
      <div className="grow flex flex-col justify-center bg-neutral-100 text-black dark:bg-neutral-950 dark:text-white">
        <motion.section ref={ref} className="mb-[-60px] relative h-screen flex flex-col justify-center items-center gap-4 bg-white-50 text-black dark:text-white p-6 noise">
          <motion.div style={{y: yBg}} className="backdrop-text">
            {[30, 50, 60, 30, 50, 60, 30, 50, 60, 30].map((speed, i) =>
                <div key={i} className={`marquee ${i % 2 == 0 ? "left-1" : "right-1"}`}>
                  <motion.div
                      initial={{x: 0, opacity: 0}}
                      className={`flex gap-[40px] absolute text-nowrap align-middle text-5xl ${i % 2 == 0 ? "left-1" : "right-1"}`}
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
                              font-sans
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
              initial={{opacity: 0, letterSpacing: "0.5rem", fontWeight: 200, width: "115%"}}
              animate={{opacity: 1, letterSpacing: "0.1rem", fontWeight: 700, width: "100%"}}
              transition={{duration: 2, ease: "easeOut"}}
              className={`font-serif text-6xl text-center font-bold z-10`}>
            Chris Wilson
          </motion.h1>

          <motion.span
              style={{y: yTitle}}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 2, ease: "easeOut", delay: 1}}
              className="text-center font-bold z-10">
            <TypewriterText
                className={`font-sans`}
                delay={1}
                texts={[
                  "Aspiring Software Engineer",
                  "Full Stack Developer in Training",
                  "Front-end Enthusiast",
                  "Computer Science Student",
                  "Prior Exchange Student",
                  "Building Web Applications from Frontend to Backend"
                ]}
            />
          </motion.span>

        </motion.section>

        <section className={"overflow-clip relative flex flex-col bg-white dark:bg-black items-center z-10"}>
          <motion.div
              initial={{ y: -300 }} // starts invisible
              whileInView={{ y: 0 }} // becomes visible when h2 is in view
              viewport={{ amount: 0.4 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 h-1/2 pointer-events-none border-t-2 border-t-teal-500 inset-shadow-[0_300px_300px_-300px] inset-shadow-teal-600"
          />
          <ChevronUpIcon height={30} width={30} className={"mt-4"} />

          <div className={"flex flex-col px-10 py-20 gap-8 max-w-4xl w-full"}>
            <div className={"gap-6 relative"}>

              <motion.h2
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5}}
                  viewport={{ once: true }}
                  className={`font-serif mb-16 text-6xl text-left font-bold`}
              >
                My Studies
              </motion.h2>


              <motion.p
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5}}
                  viewport={{ once: true }}
                  className={`font-sans text-xl font-medium max-w-2xl mb-16`}
              >
                I am a fourth year MSci Computer Science student
                at <Hyperlink href={"/studies/uob"} internal chevron={false}>The University of Birmingham</Hyperlink>.
                I spent last year doing an exchange
                at <Hyperlink href={"/studies/insa"} internal chevron={false}>INSA Lyon</Hyperlink> in France.
              </motion.p>

              <motion.p
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{delay: 0.5, duration: 0.5}}
                  viewport={{ once: true }}
                  className={`font-sans font-semibold text-center text-gray-500 dark:text-gray-400`}>
                Click on an image below to learn more
              </motion.p>

              <div className={"flex justify-between border-4 border-black dark:border-white border-dashed mt-16 mb-20 lg:mt-20 lg:mb-24 mx-5"}>

                <motion.div
                    initial={"hidden"}
                    whileInView={"rest"}
                    viewport={{ once: true }}
                    whileHover={"hover"}
                    whileTap={"pressed"}
                    variants={imgVariants}
                    drag dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
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

              <motion.h3
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{ once: true }}
                  transition={{duration: 0.5}}
                  className={`font-serif mt-16 text-5xl text-center font-bold mb-8`}>
                More about me
              </motion.h3>

              <motion.p
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{ once: true }}
                  transition={{duration: 0.5}}
                  className={`font-sans text-lg text-center font-medium`}>
                I love language and linguistics. I currently take French as a supplementary module at university but also love learning small bits of Italian and
                Spanish (which I got to use quite a bit during my exchange), as well as random phrases I learn from friends in other languages.
              </motion.p>
            </div>
          </div>
        </section>

        {/*<section className={"relative flex flex-col bg-linear-to-b from-slate-950 from-[30%] to-indigo-950 to-[100%] text-white items-center"}>*/}
        {/*  <motion.div*/}
        {/*      initial={{ y: -300 }} // starts invisible*/}
        {/*      whileInView={{ y: 0 }} // becomes visible when h2 is in view*/}
        {/*      viewport={{ amount: 0.2 }}*/}
        {/*      transition={{ duration: 1 }}*/}
        {/*      className="absolute inset-0 h-1/2 pointer-events-none border-t-2 border-t-indigo-500 inset-shadow-[0_300px_300px_-300px] inset-shadow-indigo-600"*/}
        {/*  />*/}

        {/*  <div className={"relative z-10 px-10 py-20 max-w-4xl w-full"}>*/}
        {/*    <motion.h2*/}
        {/*        initial={{opacity: 0, y: 20}}*/}
        {/*        whileInView={{opacity: 1, y: 0}}*/}
        {/*        transition={{duration: 0.5}}*/}
        {/*        viewport={{ once: true }}*/}
        {/*        className={`font-serif mb-16 text-6xl text-left font-bold`}>*/}
        {/*      My Work*/}
        {/*    </motion.h2>*/}

        {/*    <motion.p*/}
        {/*        initial={{opacity: 0, y: 20}}*/}
        {/*        whileInView={{opacity: 1, y: 0}}*/}
        {/*        transition={{duration: 0.5}}*/}
        {/*        viewport={{ once: true }}*/}
        {/*        className={`font-sans text-xl text-left font-medium max-w-xl mb-4`}>*/}
        {/*      Two areas which particularly interest me*/}
        {/*      are <strong>App Development</strong> and <strong>Machine Learning</strong>.*/}
        {/*    </motion.p>*/}

        {/*    <motion.p*/}
        {/*        initial={{opacity: 0, y: 20}}*/}
        {/*        whileInView={{opacity: 1, y: 0}}*/}
        {/*        transition={{duration: 0.5}}*/}
        {/*        viewport={{ once: true }}*/}
        {/*        className={`font-sans text-xl text-left font-medium max-w-xl mb-16`}>*/}
        {/*      Between life and work at uni, I have worked on a number of projects. Below are some of my highlighted projects:*/}
        {/*    </motion.p>*/}

        {/*    <Carousel cards={HomeCarouselCards} />*/}

        {/*    <motion.p*/}
        {/*        initial={{opacity: 0, y: 20}}*/}
        {/*        whileInView={{opacity: 1, y: 0}}*/}
        {/*        viewport={{ once: true }}*/}
        {/*        transition={{duration: 0.5}}*/}
        {/*        className={`font-sans text-lg text-center font-medium mt-8`}>*/}
        {/*      For a long time I&#39;ve taken a special interest in front-end; I learnt <Hyperlink chevron={false} href={"https://react.dev/"}>React</Hyperlink> by myself and developed*/}
        {/*      my skills in several styling languages through independent projects.*/}
        {/*    </motion.p>*/}

        {/*    <motion.p*/}
        {/*        initial={{opacity: 0, y: 20}}*/}
        {/*        whileInView={{opacity: 1, y: 0}}*/}
        {/*        viewport={{ once: true }}*/}
        {/*        transition={{duration: 0.5}}*/}
        {/*        className={`font-sans text-lg text-center font-medium mt-8`}>*/}
        {/*      This website uses <Hyperlink href={"https://tailwindcss.com/"} chevron={false}>Tailwind CSS</Hyperlink> for*/}
        {/*      it&#39;s styling, <Hyperlink href={"https://burnfm.com"} chevron={false}>my recoding of Burn FM</Hyperlink> now uses a blend of Tailwind and pure CSS, and its admin*/}
        {/*      panel (in development) uses <Hyperlink href={"https://www.radix-ui.com"} chevron={false}>Radix Themes</Hyperlink>.*/}
        {/*    </motion.p>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section className={"overflow-clip relative self-center flex flex-col h-full w-full items-center bg-black"}>
          <motion.div
              initial={{ y: -300 }} // starts invisible
              whileInView={{ y: 0 }} // becomes visible when h2 is in view
              viewport={{ amount: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 h-1/2 pointer-events-none border-t-2 border-t-white/80 inset-shadow-[0_300px_300px_-300px] inset-shadow-white/90"
          />
          <div className="max-w-6xl p-8 z-10">
            <h2 className="text-5xl mt-8 mb-16 leading-tight text-white">My <strong>Software <br/> Development</strong> Projects</h2>
            <div className="max-md:space-y-6 min-md:grid h-full w-full gap-6 grid-cols-15 grid-rows-15 max-lg:grid-rows-12 text-gray-300 font-medium">

              <div className="group col-span-10 row-span-3 max-lg:col-span-15 max-lg:row-span-2 bg-black border-2 border-gray-700 flex max-md:flex-col">
                <Image src={website_photo} alt={"Photo from personal website"} height={200} width={300} className="h-full w-[320px] max-md:w-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter] duration-200"/>

                <div className="p-6 space-y-2 min-md:border-l-2 max-md:border-t-2 border-gray-700">
                  <h3 className="text-xl mb-2 text-white">Personal Website <span className="text-sm">(You are here)</span></h3>
                  <p>This website is written in TypeScript using Next.js and acts as both a means to highlight my work, and a platform to explore web design and modern animation & styling tools.</p>
                  <p>All components are custom-built and styled by me.</p>
                </div>
              </div>

              <div className="group col-span-5 row-span-10 max-lg:col-span-7 max-lg:row-span-6 bg-black border-2 border-gray-700 flex flex-col grow-0 justify-between">
                <div className="p-6 space-y-2">
                  <h3 className="text-xl mb-2 text-white">EPSRC Internship Android App</h3>
                  <p>This year, I was offered the EPSRC internship where I spent the summer working for an Associate Professor at the University of Birmingham, independently producing an Android app with the intention of it being used in school.</p>
                  <p>The app is split into UI, Domain, & Data layers:</p>
                  <ul className="pl-5 list-disc">
                    <li>The UI uses Jetpack Compose with ViewModels and composables.</li>
                    <li>Domain logic is organised by Use Case.</li>
                    <li>Data access is organised into repositories and data sources.</li>
                  </ul>
                  <p>Realtime-updates from Cloud Firestore are used throughout the app. This ensures that data remains up-to-date on all devices.</p>
                </div>
                <div className="border-t-2 border-t-gray-700">
                  <Image src={epsrc_app_photo_1} alt={"Photo from Derm'IA project"} height={100} width={300} className="inline w-1/2 object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter] duration-200 border-r-2 border-gray-700"/>
                  <Image src={epsrc_app_photo_2} alt={"Photo from Derm'IA project"} height={100} width={300} className="inline w-1/2 object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter] duration-200"/>
                </div>
              </div>

              <div className="group col-span-8 row-span-6 max-lg:col-span-8 max-lg:row-span-4 bg-black border-2 border-gray-700 flex max-lg:flex-col max-lg:justify-between">
                <div className="p-6 space-y-2 flex flex-col basis-full">
                  <h3 className="text-xl mb-2 text-white">Derm’IA Mole Scanner</h3>
                  <p>During my exchange in France, I took part in PLD-SMART: an intensive 2-week team project where we built an app with a focus on positive societal impact.</p>
                  <p>Derm’IA is a website which lets users track moles they may have on their skin. It’s containerised with Docker, uses a React frontend, a Flask API and connects to a mysql database with SQLAlchemy.</p>
                  <p>Our app was voted 2nd in an industrial vote and 3rd in a peer vote.</p>
                </div>

                <div className="min-lg:w-[80%] min-lg:flex min-lg:flex-col bg-white border-l-2 max-lg:border-t-2 border-gray-700">
                  <Image src={dermia_photo_1} alt={"Photo from Derm'IA project"} height={200} width={300} className="w-full h-1/2 max-lg:inline max-lg:w-1/2 max-lg:h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter] duration-200 min-lg:border-b-2 max-lg:border-r-2 border-gray-700"/>
                  <Image src={dermia_photo_2} alt={"Photo from Derm'IA project"} height={200} width={300} className="w-full h-1/2 max-lg:inline  max-lg:w-1/2 max-lg:h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter] duration-200"/>
                </div>
              </div>

              <div className="max-md:hidden group col-span-2 row-span-7 max-lg:col-span-8 max-lg:row-span-2 bg-black border-2 border-gray-700 min-lg:flex flex-col justify-around items-center max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:justify-items-center">
                <Image src={nextjs_icon} alt={"Next.js icon"} className="h-16 w-16 brightness-90 group-hover:brightness-100 transition-[filter] duration-200"/>
                <SpringBootIcon className="text-white group-hover:text-[#6db33f] h-16 w-16 brightness-90 group-hover:brightness-100 transition-[filter,color] duration-200"/>
                <AngularIcon className="text-white group-hover:text-[#E90464] h-16 w-16 grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter,color] duration-200"/>
                <Image src={jetpack_compose_icon} alt={"Jetpack Compose icon"} height={200} width={300} className="h-16 w-16 grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter] duration-200"/>
              </div>

              <div className="group col-span-8 row-span-6 max-lg:col-span-15 max-lg:row-span-4 bg-black border-2 border-gray-700 flex flex-col">
                <div className="border-b-2 border-b-gray-700">
                  <Image src={tracktracker_photo_1} alt={"Photo from TrackTracker project"} height={64} width={64} className="inline w-1/2 object-cover h-full grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter] duration-200 border-r-2 border-gray-700"/>
                  <Image src={tracktracker_photo_2} alt={"Photo from TrackTracker project"} height={64} width={64} className="inline w-1/2 object-cover h-full grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter] duration-200"/>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl mb-2 text-white">TrackTracker Spotify Listening Analyser</h3>
                  <p>TrackTracker is my 2nd year team project which was completed over a semester in a team of 6.</p>
                  <p>It connects to your Spotify account and keeps track of all the songs you listen to. As you listen, the app generates stats and figures for you to browse and share with friends. You can also make befriend other users on the platform. The app calculates how similar your song tastes are with your friends, and gives updates on their stats.</p>
                  <p>The app was built using SpringBoot with an Angular frontend and a JPA data persistence layer. It connects to your Spotify account via OAuth 2.o using the Spotify API.</p>
                </div>
              </div>

              <div className="group col-span-7 row-span-5 max-lg:col-span-15 max-lg:row-span-2 bg-black border-2 border-gray-700 flex">
                <Image src={burn_fm_photo} alt={"Photo from personal website"} height={200} width={300} className="w-40 max-lg:w-28 object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter] duration-200 min-h-0"/>

                <div className="p-6 space-y-2 border-l-2 border-l-gray-700">
                  <h3 className="text-xl mb-2 text-white">Burn FM Recoded</h3>
                  <p>At the beginning of 2024, I offered to rebuild my university’s radio station website: burnfm.com. Since then, I've continued to develop and improve the site, adding many new features.</p>
                  <p>The website now offers a built-in player, on-demand playback, the weekly schedule, as well as the catalogue of all past shows that Burn has broadcast in recent years.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
