"use client"

import Hero from "@/app/components/Hero";
import imdb_hero from "/public/imdb-hero.png";
import {raleway} from "@/app/fonts";
import {motion} from "motion/react";
import Link from "next/link";
import Image from "next/image";
import burn_img1 from "/public/burnfm1.png";
import burn_admin1 from "/public/burnfm/burnadmin1.png";
import {ChevronRightIcon} from "@radix-ui/react-icons";

export default function ImdbAnalysisPage() {
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
          <Hero title={"IMDB Review Sentiment Analysis"} img={imdb_hero}/>
        </header>

        <section className={"flex flex-col items-center z-20 bg-neutral-100 dark:bg-neutral-900"}>

          {/*<div className={"flex justify-center my-20 bg-gray-700 w-full"}>*/}
          {/*  <motion.div*/}
          {/*      initial={"hidden"}*/}
          {/*      whileInView={"rest"}*/}
          {/*      viewport={{once: true}}*/}
          {/*      variants={imgVariants}*/}
          {/*      className={"relative -my-5 pointer-events-none"}*/}
          {/*  >*/}
          {/*    <Link href={""}>*/}
          {/*      <motion.div variants={imgVariants}*/}
          {/*                  whileHover={"hover"}*/}
          {/*                  whileTap={"pressed"}*/}
          {/*                  drag dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}*/}
          {/*                  className={"relative"}>*/}
          {/*        <Image*/}
          {/*            src={burn_admin1}*/}
          {/*            alt={"A picture of INSA Lyon's campus"}*/}
          {/*            width={500} height={400}*/}
          {/*            className={"relative object-cover pointer-events-none -right-4 top-0"}*/}
          {/*        />*/}
          {/*      </motion.div>*/}
          {/*    </Link>*/}

          {/*    <Link href={""}>*/}
          {/*      <motion.div variants={insa_logoVariants}*/}
          {/*                  className={"absolute -left-4 -bottom-10"}*/}
          {/*                  drag dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}>*/}
          {/*        <Image*/}
          {/*            src={burn_img1}*/}
          {/*            alt={"A picture of The University of Birmingham's campus"}*/}
          {/*            width={800} height={200}*/}
          {/*            className={"rotate-2 w-1/2 object-cover"}*/}
          {/*        />*/}
          {/*      </motion.div>*/}
          {/*    </Link>*/}


          {/*  </motion.div>*/}
          {/*</div>*/}

          <div className={"flex flex-col px-10 py-16 gap-8 max-w-3xl w-full"}>
            <div className={"flex flex-col gap-6"}>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                This was the first assigned project during my 5th year Text Mining module at INSA Lyon. The goal was to
                build a sentiment analysis model for IMDB movie reviews with little-to-no experience of NLP techniques.
                The model should be able to which can categorise reviews as either positive or negative. I worked in a
                group of 4.
              </p>

              <h2 className={`${raleway.className} text-3xl font-semibold max-w-2xl mt-8`}>Our approach</h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                We decided to use a simple logistic regression model as a baseline. We then experimented with more
                complex models such as LSTM, Decision Tree Classifier, BERT pretrained model and SpaCy Textcat.
              </p>

              <ul className={`${raleway.className} font-medium max-w-2xl`}>
                <li>Logistic Regression</li>
                <li>Decision Tree Classifier | Simple</li>
                <li>Long-Short-Term-Memory (LSTM) Neural Network</li>
                <li>BERT pretrained model</li>
                <li>SpaCy TextCategorizer</li>
              </ul>


              {/*<h2 className={`${raleway.className} text-3xl font-semibold max-w-2xl mt-8`}>*/}
              {/*  SpaCy&#39;s TextCategorizer model*/}
              {/*</h2>*/}

              {/*<p className={`${raleway.className} font-medium max-w-2xl`}>*/}
              {/*  My approach was with SpaCy’s TextCategorizer model. I had a little experience with using this framework*/}
              {/*  and knew this was a categorisation problem.*/}
              {/*</p>*/}

            </div>
          </div>
        </section>

      </div>
  );
}