"use client"

import insa_campus from "/public/insa_lyon_campus.jpg";
import {raleway, robotoSlab} from "@/app/fonts";
import Hero from "@/app/components/Hero";
import CourseCards from "@/app/components/CourseCards";
import {motion, useScroll, useTransform} from "motion/react";
import {useRef} from "react";
import {if3, if4, if5} from "@/app/studies/module_information";

export default function InsaPage() {
  const ref3 = useRef(null);
  const scroll3 = useScroll({ target: ref3, offset: ["start end", "end start"] });
  const y3 = useTransform(scroll3.scrollYProgress, [0, 0.5, 1], [-100, -50, 0]);

  // const ref4 = useRef(null);
  // const scroll4 = useScroll({ target: ref4, offset: ["start end", "end start"] });
  // const y4 = useTransform(scroll4.scrollYProgress, [0, 0.5, 1], [-100, -50, 0]);
  //
  // const ref5 = useRef(null);
  // const scroll5 = useScroll({ target: ref5, offset: ["start end", "end start"] });
  // const y5 = useTransform(scroll5.scrollYProgress, [0, 0.5, 1], [-100, -50, 0]);

  return (
      <div className="flex-grow flex flex-col bg-neutral-100 text-gray-900 dark:bg-neutral-900 dark:text-white">
        <header className="relative">
          <Hero title={"INSA Lyon"} img={insa_campus} />
        </header>

        <section className={"flex flex-col bg-emerald-50 dark:bg-lime-950 items-center z-20"}>
          <div className={"flex flex-col p-10 py-12 lg:py-16 gap-8 max-w-4xl w-full"}>
            <div className={"flex flex-col gap-4"}>

              <p className={`${raleway.className} font-medium`}>
                INSA Lyon (Institut National des Sciences Appliquées de Lyon) is one of the top engineering schools
                in France.
              </p>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                It follows the Grande-École system whereby students take 2 years of general engineering preparatory
                classes known as prépa. After this, the school divides into specialty departments (Informatique for me).
              </p>

              <h2 className={`${robotoSlab.className} mt-8 text-4xl text-left font-bold`}>
                Modules
              </h2>

              <p className={`${raleway.className} font-medium`}>
                As an exchange student, I have the privilege of picking whichever modules I like from the department
                (regardless of the year). This means that the modules I take span from 3rd to 5th year.
              </p>

              <p className={`${raleway.className} font-medium`}>
                The majority of my modules are taught in French (with the exception of my 5th year classes).
              </p>

              <span className={"flex flex-wrap justify-between items-center mt-4"}>
                <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                  Semester 1
                </h3>

                <span className={`${raleway.className} font-medium text-lime-800 dark:text-white opacity-70 max-w-2xl`}>
                  Click on a module to learn more
                </span>
              </span>

              <div ref={ref3}>
                <div className="py-4 pl-8 relative flex flex-col ">
                  <motion.p style={{y: y3}} className={`absolute -left-2 top-1/2 -translate-y-1/2 ${raleway.className} lining-nums text-8xl font-semibold opacity-50`}>
                    3
                  </motion.p>

                  <CourseCards items={if3} className="relative" />
                </div>



                <hr/>


                <div className="py-4 pl-8 relative flex flex-col overflow-y-clip">
                  <motion.p style={{y: y3}} className={`absolute -left-2 top-1/2 -translate-y-1/2 ${raleway.className} lining-nums text-8xl font-semibold opacity-50`}>
                    4
                  </motion.p>

                  <CourseCards items={if4} className="relative" />
                </div>

                <hr/>

                <div className="py-4 pl-8 relative flex flex-col overflow-y-clip">
                  <motion.p style={{y: y3}} className={`absolute -left-2 top-1/2 -translate-y-1/2 ${raleway.className} lining-nums text-8xl font-semibold opacity-50`}>
                    5
                  </motion.p>

                  <CourseCards items={if5} className="relative" />
                </div>
              </div>

              {/*<h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>*/}
              {/*  Semester 2*/}
              {/*</h3>*/}

            </div>
          </div>
        </section>

      </div>
  )
}