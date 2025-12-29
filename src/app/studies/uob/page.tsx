"use client"

import uob_campus from "/public/uob_campus.webp";
import {raleway, robotoSlab} from "@/app/fonts";
import Hero from "@/app/components/Hero";
import CourseCards from "@/app/components/CourseCards";
import {y1_items, y2_items, y4_items} from "@/app/studies/module_information";
import Hyperlink from "@/app/components/Hyperlink";
import CourseCard from "@/app/components/CourseCard";
import {
  LucideArrowRightLeft,
  LucideAudioWaveform,
  LucideFileCode,
  LucideGrid3x3,
  LucideScanText, LucideSmartphone, LucideTrendingUpDown,
  LucideWaypoints
} from "lucide-react";
import {Carousel} from "@/app/components/Carousel";

export default function UoBPage() {
  return (
      <div className="grow flex flex-col text-gray-900 bg-neutral-900 dark:text-white">
        <header className="relative mb-20">
          <Hero title={"University of Birmingham"} subtitle={"My studies"} subsection={"My Studies"} img={uob_campus}/>
        </header>

        <section className={"flex flex-col items-start z-20"}>
          <div className={"flex flex-col p-8 md:p-16 2xl:px-24 gap-8 max-w-5xl w-full bg-emerald-50 dark:bg-lime-950 "}>
            <div className={"flex flex-col gap-4"}>
              <h2 className={`${robotoSlab.className} text-4xl text-left font-bold`}>
                Modules
              </h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                I have studied the following modules at the University of Birmingham:
              </p>

              <span className={"flex flex-wrap justify-between items-center mt-8"}>
                <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                  Year 1
                </h3>

                <span className={`${raleway.className} font-medium text-lime-800 dark:text-white opacity-70 max-w-2xl`}>
                  Click on a module to learn more
                </span>
              </span>

              <Carousel items={[
                <CourseCard
                    key={1}
                    title={"Data Structures and Algorithms"}
                    description={"Matrix Eigenvalues and Vectors. Characteristic and Minimal Polynomials. Procedural generation."}
                    Icon={LucideGrid3x3}
                />,
                <CourseCard
                    key={2}
                    title={"Object Oriented Programming"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideAudioWaveform}
                />,
                <CourseCard
                    key={3}
                    title={"Mathematical and Logical Foundations"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideFileCode}
                />,
                <CourseCard
                    key={4}
                    title={"Artificial Intelligence 1"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideArrowRightLeft}
                />,
                <CourseCard
                    key={5}
                    title={"Theories of Computation"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideWaypoints}
                />,
                <CourseCard
                    key={6}
                    title={"Full-Stack Development"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideScanText}
                />
              ]} />

              {/*<CourseCards items={y1_items} />*/}

              <span className={"flex flex-wrap justify-between items-center mt-8"}>
                <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                  Year 2
                </h3>

                <span className={`${raleway.className} font-medium text-lime-800 dark:text-white opacity-70 max-w-2xl`}>
                  Click on a module to learn more
                </span>
              </span>

              <Carousel items={[
                <CourseCard
                    key={1}
                    title={"Operating Systems"}
                    description={"Matrix Eigenvalues and Vectors. Characteristic and Minimal Polynomials. Procedural generation."}
                    Icon={LucideGrid3x3}
                />,
                <CourseCard
                    key={2}
                    title={"Software Engineering & Professional Practice"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideAudioWaveform}
                />,
                <CourseCard
                    key={3}
                    title={"Functional Programming"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideFileCode}
                />,
                <CourseCard
                    key={4}
                    title={"Artificial Intelligence 2"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideArrowRightLeft}
                />,
                <CourseCard
                    key={5}
                    title={"Team Project"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideWaypoints}
                />,
                <CourseCard
                    key={6}
                    title={"Security & Networks"}
                    description={"Fourier Analysis, applying convolutions to images in the spacial and temporal domains."}
                    Icon={LucideScanText}
                />
              ]} />


              {/*<CourseCards items={y2_items} />*/}

              <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl mt-8`}>
                Year 3 - Exchange Year
              </h3>

              <p className={`${raleway.className} font-medium`}>
                My third year is being spend studying abroad in France. For more information, see the <Hyperlink href={"/studies/insa"} internal>
                INSA Lyon page
              </Hyperlink>
              </p>

              <span className={"flex flex-wrap justify-between items-center mt-8"}>
                <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                  Year 4
                </h3>

                <span className={`${raleway.className} font-medium text-lime-800 dark:text-white opacity-70 max-w-2xl`}>
                  Click on a module to learn more
                </span>
              </span>

              <CourseCards items={y4_items} />
            </div>
          </div>
        </section>

      </div>
  )
}