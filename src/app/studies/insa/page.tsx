"use client"

import insa_campus from "/public/insa_lyon_campus2.jpg";
import {raleway, robotoSlab} from "@/app/fonts";
import Hero from "@/app/components/Hero";
import CourseCards from "@/app/components/CourseCards";
import {motion, useScroll, useTransform} from "motion/react";
import {useRef} from "react";
import {if3s1, if3s2, if4s1, if4s2, if5s1} from "@/app/studies/module_information";
import CourseCard from "@/app/components/CourseCard";
import {
  LucideArrowRightLeft,
  LucideAudioWaveform, LucideBrainCog, LucideChartColumn, LucideCog, LucideDraftingCompass,
  LucideFileCode, LucideGlobe,
  LucideGrid3x3,
  LucideScanText, LucideSmartphone, LucideTrees, LucideTrendingUpDown, LucideUsers,
  LucideWaypoints
} from "lucide-react";
import {Carousel} from "@/app/components/Carousel";

export default function InsaPage() {
  const ref_s1_if3 = useRef(null);
  const scroll3 = useScroll({ target: ref_s1_if3, offset: ["start 80%", "end 20%"] });
  const y_s1_if3 = useTransform(scroll3.scrollYProgress, [0, 0.5, 1], [-30, -10, 10]);

  const ref_s1_if4 = useRef(null);
  const scroll4 = useScroll({ target: ref_s1_if4, offset: ["start 80%", "end 20%"] });
  const y_s1_if4 = useTransform(scroll4.scrollYProgress, [0, 0.5, 1], [-30, -10, 10]);

  const ref_s1_if5 = useRef(null);
  const scroll5 = useScroll({ target: ref_s1_if5, offset: ["start 80%", "end 20%"] });
  const y_s1_if5 = useTransform(scroll5.scrollYProgress, [0, 0.5, 1], [-30, -10, 10]);

  return (
      <div className="grow flex flex-col text-gray-900 bg-neutral-900 dark:text-white">
        <header className="relative mb-20">
          <Hero title={"INSA Lyon"} subtitle={"Study Abroad"} subsection={"My Studies"} img={insa_campus} />
        </header>

        <section className={"overflow-clip relative flex flex-col z-10"}>


          <div className={"bg-white dark:bg-black z-10 flex flex-col p-8 md:p-16 2xl:px-24 gap-8 max-w-6xl w-full"}>

            <div className={"flex flex-col gap-4"}>
              <p className={`${raleway.className} text-xl font-medium`}>
                INSA Lyon (Institut National des Sciences Appliquées de Lyon) is a &#34;Grande-école&#34; in France which has students take 2 years of general engineering preparatory
                classes known as &#34;prépa&#34;. After this, the school divides into specialty departments - Computer Science
                (a.k.a. Informatique) for me.
              </p>


              <h2 className={`${robotoSlab.className} mt-8 text-4xl text-left font-bold`}>
                Modules
              </h2>

              <p className={`${raleway.className} text-xl font-medium`}>
                As an exchange student, I was able to pick whichever modules I liked from the department.
                This means that the modules I took spanned from 3rd to 5th year.
              </p>

              <p className={`${raleway.className} text-xl font-medium`}>
                Each module has an indicator in the top right for which year group it was part of as well as what language it was taught in.
              </p>

              <span className={"flex flex-wrap justify-between items-center mt-8"}>
                <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                  Semester 1
                </h3>

                <span className={`${raleway.className} font-medium text-lime-800 dark:text-white opacity-70 max-w-2xl`}>
                  Click on a module to learn more
                </span>
              </span>

              <Carousel items={[
                <CourseCard
                    key={1}
                    title={"Linear Algebra and Image Synthesis"}
                    description={"Matrix Eigenvalues and Vectors. Characteristic and Minimal Polynomials. Procedural generation."}
                    Icon={LucideGrid3x3}
                    year={"3rd Year"}
                    language={"FR"}
                />,
                <CourseCard
                    key={2}
                    title={"Signal and Image Processing"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideAudioWaveform}
                    year={"3rd Year"}
                    language={"FR"}
                />,
                <CourseCard
                    key={3}
                    title={"Introduction to C++"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideFileCode}
                    year={"3rd Year"}
                    language={"FR"}
                />,
                <CourseCard
                    key={4}
                    title={"Network Programming"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideArrowRightLeft}
                    year={"4th Year"}
                    language={"FR"}
                />,
                <CourseCard
                    key={5}
                    title={"Semantic Web"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideWaypoints}
                    year={"4th Year"}
                    language={"EN"}
                />,
                <CourseCard
                    key={6}
                    title={"Text Mining"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideScanText}
                    year={"5th Year"}
                    language={"EN"}
                />,
                <CourseCard
                    key={7}
                    title={"Machine Learning & Data Analytics"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideTrendingUpDown}
                    year={"5th Year"}
                    language={"EN"}
                />,
                <CourseCard
                    key={8}
                    title={"Android Mobile Development"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideSmartphone}
                    year={"5th Year"}
                    language={"EN"}
                />
              ]} />

              <span className={"flex flex-wrap justify-between items-center mt-8"}>
                <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                  Semester 2
                </h3>

                <span className={`${raleway.className} font-medium text-lime-800 dark:text-white opacity-70 max-w-2xl`}>
                  Click on a module to learn more
                </span>
              </span>

              <Carousel items={[
                <CourseCard
                    key={1}
                    title={"Data Management for the Web"}
                    description={"Matrix Eigenvalues and Vectors. Characteristic and Minimal Polynomials. Procedural generation."}
                    Icon={LucideGlobe}
                    year={"3rd Year"}
                    language={"EN"}
                />,
                <CourseCard
                    key={2}
                    title={"Software Engineering"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideDraftingCompass}
                    year={"3rd Year"}
                    language={"EN"}
                />,
                <CourseCard
                    key={3}
                    title={"Probabilities"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideChartColumn}
                    year={"3rd Year"}
                    language={"FR"}
                />,
                <CourseCard
                    key={4}
                    title={"Machine Learning"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideBrainCog}
                    year={"4th Year"}
                    language={"EN"}
                />,
                <CourseCard
                    key={5}
                    title={"Environmental and Societal Challenges"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideTrees}
                    year={"4th Year"}
                    language={"FR"}
                />,
                <CourseCard
                    key={6}
                    title={"Compiler Project"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideCog}
                    year={"5th Year"}
                    language={"FR"}
                />,
                <CourseCard
                    key={7}
                    title={"SMART Team Project"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideUsers}
                    year={"5th Year"}
                    language={"FR"}
                />
              ]} />


              {/*<div>*/}
              {/*  <div ref={ref_s1_if3} className="py-4 pl-8 relative flex flex-col ">*/}
              {/*    <motion.p style={{y: y_s1_if3}} className={`absolute -left-2 top-1/2 -translate-y-1/2 ${raleway.className} lining-nums text-8xl font-semibold opacity-50`}>*/}
              {/*      3*/}
              {/*    </motion.p>*/}

              {/*    <CourseCards items={if3s1} className="relative" />*/}
              {/*  </div>*/}

              {/*  <hr className={"border-black border-t-2 dark:border-white dark:border-t-[1px]"}/>*/}

              {/*  <div ref={ref_s1_if4} className="py-4 pl-8 relative flex flex-col overflow-y-clip">*/}
              {/*    <motion.p style={{y: y_s1_if4}} className={`absolute -left-2 top-1/2 -translate-y-1/2 ${raleway.className} lining-nums text-8xl font-semibold opacity-50`}>*/}
              {/*      4*/}
              {/*    </motion.p>*/}

              {/*    <CourseCards items={if4s1} className="relative" />*/}
              {/*  </div>*/}

              {/*  <hr className={"border-black border-t-2 dark:border-white dark:border-t-[1px]"}/>*/}

              {/*  <div ref={ref_s1_if5} className="py-4 pl-8 relative flex flex-col overflow-y-clip">*/}
              {/*    <motion.p style={{y: y_s1_if5}} className={`absolute -left-2 top-1/2 -translate-y-1/2 ${raleway.className} lining-nums text-8xl font-semibold opacity-50`}>*/}
              {/*      5*/}
              {/*    </motion.p>*/}

              {/*    <CourseCards items={if5s1} className="relative" />*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/*<span className={"flex flex-wrap justify-between items-center mt-4"}>*/}
              {/*  <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>*/}
              {/*    Semester 2*/}
              {/*  </h3>*/}

              {/*  <span className={`${raleway.className} font-medium text-lime-800 dark:text-white opacity-70 max-w-2xl`}>*/}
              {/*    Click on a module to learn more*/}
              {/*  </span>*/}
              {/*</span>*/}

              {/*<div>*/}
              {/*  <div className="py-4 pl-8 relative flex flex-col ">*/}
              {/*    <motion.p style={{y: y_s1_if3}} className={`absolute -left-2 top-1/2 -translate-y-1/2 ${raleway.className} lining-nums text-8xl font-semibold opacity-50`}>*/}
              {/*      3*/}
              {/*    </motion.p>*/}

              {/*    <CourseCards items={if3s2} className="relative" />*/}
              {/*  </div>*/}

              {/*  <hr className={"border-black border-t-2 dark:border-white dark:border-t-[1px]"}/>*/}

              {/*  <div className="py-4 pl-8 relative flex flex-col overflow-y-clip">*/}
              {/*    <motion.p style={{y: y_s1_if3}} className={`absolute -left-2 top-1/2 -translate-y-1/2 ${raleway.className} lining-nums text-8xl font-semibold opacity-50`}>*/}
              {/*      4*/}
              {/*    </motion.p>*/}

              {/*    <CourseCards items={if4s2} className="relative" />*/}
              {/*  </div>*/}
              {/*</div>*/}

            </div>
          </div>

        </section>

      </div>
  )
}