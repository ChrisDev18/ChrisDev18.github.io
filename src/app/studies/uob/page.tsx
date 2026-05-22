"use client"

import uob_campus from "@/app/assets/uob_campus.webp";
import Hero from "@/app/components/Hero";
import Hyperlink from "@/app/components/Hyperlink";
import CourseCard from "@/app/components/CourseCard";
import {
  LucideAppWindow, LucideBot, LucideBox, LucideBrainCircuit,
  LucideChartSpline, LucideChevronUp,
  LucideClipboardPenLine, LucideFileKey2,
  LucideGitGraph, LucideLandPlot, LucideMonitorCog,
  LucideMusic4, LucideShieldCheck, LucideSquareFunction,
  LucideVariable, LucideView, LucideWaypoints
} from "lucide-react";
import {Carousel} from "@/app/components/Carousel";
import {motion} from "motion/react";

export default function UoBPage() {
  return (
      <div className="grow flex flex-col text-gray-900 bg-neutral-900 dark:text-white">
        <header className="relative">
          <Hero title={"University of Birmingham"} subtitle={"My studies"} subsection={"My Studies"} img={uob_campus}/>
        </header>

        <section className={"overflow-clip relative bg-white dark:bg-black items-center flex flex-col z-10"}>
          <motion.div
              initial={{ y: -300 }} // starts invisible
              whileInView={{ y: 0 }} // becomes visible when h2 is in view
              viewport={{ amount: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 h-1/2 pointer-events-none border-t-2 border-t-sky-500 inset-shadow-[0_300px_300px_-300px] inset-shadow-sky-600"
          />
          <LucideChevronUp size={30} className={"z-20 mt-4"} />

          <div className={"z-10 flex flex-col p-8 md:p-16 2xl:px-24 max-w-6xl w-full"}>
            <div className={"flex flex-col"}>
              <h2 className={`mt-8 mb-4 font-serif text-4xl text-left font-bold`}>
                Modules
              </h2>

              <span className={"flex flex-wrap justify-between items-center mt-8"}>
                <h3 className={`font-sans text-xl font-semibold max-w-2xl`}>
                  4th Year
                </h3>

                <span className={`font-sans font-medium dark:text-white opacity-70 max-w-2xl`}>
                  Scroll through to learn more
                </span>
              </span>

              <Carousel items={[
                <CourseCard
                    key={2}
                    title={"Neural Computation"}
                    description={"Perceptrons & MLPs, Neural Networks, CNNs, Auto-Encoders, Generative Models, Language Models."}
                    Icon={LucideBrainCircuit}
                />,
                <CourseCard
                    key={3}
                    title={"Computer Vision and Imaging"}
                    description={"Spatial Filtering, Edge and Shape Detection, Image Classification and Segmentation, Object Detection, Optical Flow and Motion Analysis"}
                    Icon={LucideView}
                />,
                <CourseCard
                    key={4}
                    title={"Natural Language Processing"}
                    description={"N-Gram Modelling, Naïve Bayes Classification, Attention, Transformer Language Models, LLM design"}
                    Icon={LucideBot}
                />,
                <CourseCard
                    key={1}
                    title={"Prog. Languages and Compilers"}
                    description={"Lambda Calculus, Operational Semantics, Type inference & checking. Compilation of Procedural Programs"}
                    Icon={LucideSquareFunction}
                />,
                <CourseCard
                    key={5}
                    title={"Algorithms and Complexity"}
                    description={"Algorithm Paradigms (Greedy, Dynamic, Divide and Conquer), Complexity Analysis: (P vs NP, Karp Reductions), Boolean Circuits"}
                    Icon={LucideMonitorCog}
                />,
                <CourseCard
                    key={6}
                    title={"Dependable and Distributed Systems"}
                    description={"Dependability, Fault Tolerance, (Byzantine) Consensus, Physical and Logical Clocks, Reliable Broadcast"}
                    Icon={LucideShieldCheck}
                />
              ]} />
            </div>

              <h3 className={`mb-4 font-sans text-xl font-semibold max-w-2xl mt-8`}>
                3rd Year - Exchange Year
              </h3>

              <p className={`text-lg font-medium`}>
                My third year was spent studying abroad in France. For more information about the modules I studied there, see the <Hyperlink href={"/studies/insa"} internal>
                INSA Lyon page
              </Hyperlink>
              </p>

            <span className={"flex flex-wrap justify-between items-center mt-8"}>
                <h3 className={`font-sans text-xl font-semibold max-w-2xl`}>
                  2nd Year
                </h3>

                <span className={`font-sans font-medium dark:text-white opacity-70 max-w-2xl`}>
                  Scroll through to learn more
                </span>
              </span>

            <Carousel items={[
              <CourseCard
                  key={2}
                  title={"Software Engineering & Professional Practice"}
                  description={"Team project designing an ecological app. Requirements Engineering, Design, Development and Testing, UML modelling"}
                  Icon={LucideClipboardPenLine}
              />,
              <CourseCard
                  key={5}
                  title={"Web Application Team Project"}
                  description={"Team Project developing and deploying a Spotify Listening Analysis web app. Springboot, Angular, GitLab"}
                  Icon={LucideMusic4}
              />,
              <CourseCard
                  key={3}
                  title={"Functional Programming"}
                  description={"Introduction to Haskell. Types, Polymorphism, Type Classes, List Comprehensions, Recursion, Higher-Order Functions, Custom Data Types"}
                  Icon={LucideSquareFunction}
              />,
              <CourseCard
                  key={4}
                  title={"Artificial Intelligence 2"}
                  description={""}
                  Icon={LucideLandPlot}
              />,
              <CourseCard
                  key={1}
                  title={"Operating Systems"}
                  description={""}
                  Icon={LucideMonitorCog}
              />,
              <CourseCard
                  key={6}
                  title={"Security & Networks"}
                  description={""}
                  Icon={LucideFileKey2}
              />
            ]} />

            <span className={"flex flex-wrap justify-between items-center mt-8"}>
                <h3 className={`font-sans text-xl font-semibold max-w-2xl`}>
                  1st Year
                </h3>

                <span className={`font-sans font-medium dark:text-white opacity-70 max-w-2xl`}>
                  Scroll through to learn more
                </span>
              </span>

            <Carousel items={[
              <CourseCard
                  key={1}
                  title={"Data Structures and Algorithms"}
                  description={""}
                  Icon={LucideGitGraph}
              />,
              <CourseCard
                  key={2}
                  title={"Object Oriented Programming"}
                  description={""}
                  Icon={LucideBox}
              />,
              <CourseCard
                  key={3}
                  title={"Mathematical and Logical Foundations"}
                  description={""}
                  Icon={LucideVariable}
              />,
              <CourseCard
                  key={4}
                  title={"Artificial Intelligence 1"}
                  description={""}
                  Icon={LucideChartSpline}
              />,
              <CourseCard
                  key={5}
                  title={"Theories of Computation"}
                  description={""}
                  Icon={LucideWaypoints}
              />,
              <CourseCard
                  key={6}
                  title={"Full-Stack Development"}
                  description={""}
                  Icon={LucideAppWindow}
              />
            ]} />
          </div>
        </section>

      </div>
  )
}