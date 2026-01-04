"use client"

import insa_campus from "@/app/assets/insa_lyon_campus2.jpg";
import Hero from "@/app/components/Hero";
import CourseCard from "@/app/components/CourseCard";
import {
  LucideAudioWaveform, LucideBrainCog, LucideChartColumn,
  LucideChevronUp, LucideCodeXml, LucideCog, LucideDraftingCompass,
  LucideFileCode, LucideGlobe,
  LucideGrid3x3, LucideScanHeart,
  LucideScanText, LucideSmartphone, LucideTrees, LucideTrendingUpDown, LucideUsers,
  LucideWaypoints
} from "lucide-react";
import {Carousel} from "@/app/components/Carousel";
import {motion} from "motion/react";
import Hyperlink from "@/app/components/Hyperlink";

export default function InsaPage() {
  return (
      <div className="grow flex flex-col text-gray-900 bg-neutral-900 dark:text-white">
        <header className="relative">
          <Hero title={"INSA Lyon"} subtitle={"Study Abroad"} subsection={"My Studies"} img={insa_campus} />
        </header>

        <section className={"bg-white dark:bg-black overflow-clip relative flex flex-col z-10 items-center"}>
          <motion.div
              initial={{ y: -300 }} // starts invisible
              whileInView={{ y: 0 }} // becomes visible when h2 is in view
              viewport={{ amount: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 h-1/2 pointer-events-none border-t-2 border-t-yellow-500 inset-shadow-[0_300px_300px_-300px] inset-shadow-yellow-600"
          />
          <LucideChevronUp size={30} className={"z-20 mt-4"} />

          <div className={"z-10 flex flex-col p-8 md:p-16 2xl:px-24 max-w-6xl w-full"}>

            <div className={"flex flex-col"}>
              <p className={`text-lg font-medium`}>
                INSA Lyon (Institut National des Sciences Appliquées de Lyon) is a
                French <Hyperlink chevron={false} href={"https://en.wikipedia.org/wiki/Grande_%C3%A9cole"}>
                Grande École</Hyperlink> specialising
                in engineering. The first two years provide a broad foundation in general engineering,
                known as the prépa. In the following three years, students specialise in specific departments
              </p>


              <h2 className={`font-serif mt-12 mb-4 text-4xl text-left font-bold`}>
                Modules
              </h2>

              <p className={`text-lg font-medium mb-2`}>
                I entered into the Computer Science department formally as a 3rd year, though I was able to take
                any modules I wanted from 3rd, 4th and 5th year.
              </p>

              <p className={`text-lg font-medium`}>
                Each module has an indicator in the top right for its year group as well as language of instruction.
              </p>

              <span className={"flex flex-wrap justify-between items-center mt-8"}>
                <h3 className={`text-xl font-semibold max-w-2xl`}>
                  Semester 1
                </h3>

                <span className={`font-medium dark:text-white opacity-70 max-w-2xl`}>
                  Scroll through to learn more
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
                    key={6}
                    title={"Text Mining"}
                    description={"Text scraping and preprocessing. Syntactic and semantic text analysis and comparison. Language models."}
                    Icon={LucideScanText}
                    year={"5th Year"}
                    language={"EN"}
                />,
                <CourseCard
                    key={7}
                    title={"Machine Learning & Data Analytics"}
                    description={"Regression and Deep Learning (CNN, GAN, RNN). Analysing large datasets to extract patterns for use in ML."}
                    Icon={LucideTrendingUpDown}
                    year={"5th Year"}
                    language={"EN"}
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
                    key={5}
                    title={"Semantic Web"}
                    description={"Querying structured data with SPARQL. Using RDF graphs, semantic queries, and DBpedia."}
                    Icon={LucideWaypoints}
                    year={"4th Year"}
                    language={"EN"}
                />,
                <CourseCard
                    key={8}
                    title={"Android Mobile Development"}
                    description={"Producing a frontend mobile app using Jetpack Compose, following the CLEAN architecture."}
                    Icon={LucideSmartphone}
                    year={"5th Year"}
                    language={"FR"}
                />,
                <CourseCard
                    key={3}
                    title={"Introduction to C++"}
                    description={"Defining and following specifications. Virt. methods, abstract classes, data encapsulation and access control"}
                    Icon={LucideFileCode}
                    year={"3rd Year"}
                    language={"FR"}
                />
              ]} />

              <span className={"flex flex-wrap justify-between items-center mt-8"}>
                <h3 className={`text-xl font-semibold max-w-2xl`}>
                  Semester 2
                </h3>

                <span className={`font-medium dark:text-white opacity-70 max-w-2xl`}>
                  Scroll through to learn more
                </span>
              </span>

              <Carousel items={[
                <CourseCard
                    key={7}
                    title={"SMART Team Project"}
                    description={"Intensive 2 week project in team of 7 to make a functioning web app."}
                    Icon={LucideScanHeart}
                    year={"4th Year"}
                    language={"FR"}
                />,
                <CourseCard
                    key={1}
                    title={"Data Management for the Web"}
                    description={"NoSQL databases & MongoDB. XML, XPath and XSL. JavaScript and DOM."}
                    Icon={LucideCodeXml}
                    year={"3rd Year"}
                    language={"EN"}
                />,
                <CourseCard
                    key={2}
                    title={"Software Engineering"}
                    description={"Requirements Engineering, Software Design, Development and Testing. UML modelling. Git version control."}
                    Icon={LucideDraftingCompass}
                    year={"3rd Year"}
                    language={"EN"}
                />,
                <CourseCard
                    key={7}
                    title={"Dynamic Web Project"}
                    description={"Explorative project in pair to produce a web app using React, ExpressJS, and MongoDB."}
                    Icon={LucideGlobe}
                    year={"3rd Year"}
                    language={"EN"}
                />,
                <CourseCard
                    key={3}
                    title={"Probabilities"}
                    description={"Combinations & Permutations. Binomial, Poisson, Normal and Exp. Distributions. Bayesian Theorem."}
                    Icon={LucideChartColumn}
                    year={"3rd Year"}
                    language={"FR"}
                />,
                <CourseCard
                    key={4}
                    title={"Machine Learning"}
                    description={"Linear Models, SVMs, SGD and Regularisation. Classification and Regression problems in Python."}
                    Icon={LucideBrainCog}
                    year={"4th Year"}
                    language={"EN"}
                />,
                <CourseCard
                    key={5}
                    title={"Environmental and Societal Challenges"}
                    description={"Impacts of computing on society, law, health and ethics. Studying GDPR and producing a Privacy Impact Assessment."}
                    Icon={LucideTrees}
                    year={"4th Year"}
                    language={"FR"}
                />,
                <CourseCard
                    key={6}
                    title={"Compiler Project"}
                    description={"Design and implement a C subset compiler in C++ with ANTLR4, testing and agile sprints"}
                    Icon={LucideCog}
                    year={"4th Year"}
                    language={"FR"}
                />,
              ]} />

            </div>
          </div>

        </section>

      </div>
  )
}