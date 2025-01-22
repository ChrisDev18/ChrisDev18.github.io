"use client"

import Hero from "@/app/components/Hero";
import exist_hero from "/public/exist-hero.png";
import {raleway} from "@/app/fonts";
import {motion} from "motion/react";
import Link from "next/link";
import Image from "next/image";
import burn_img1 from "/public/burnfm1.png";
import burn_admin1 from "/public/burnfm/burnadmin1.png";
import {ChevronRightIcon} from "@radix-ui/react-icons";

export default function ExistPage() {
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
          <Hero title={"EXIST 2024 Challenge"} img={exist_hero}/>
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

              <h2 className={`${raleway.className} text-3xl font-semibold max-w-2xl`}>Overview</h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                The EXIST challenge seeks to advance research on sexism detection through two core challenges: sexism
                identification and intention classification.
                The first challenge involves determining whether a given text contains sexist content, while the second
                deals with the motivations behind such expressions.
              </p>

              <Link href={"https://nlp.uned.es/exist2024/"}
                    className={`${raleway.className} flex items-center justify-start gap-1 text-xl text-center font-semibold rounded hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}>
                Learn more about EXIST <ChevronRightIcon/>
              </Link>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                To address these tasks, we leverage state-of-the-art natural language processing techniques, including
                fine-tuning the XLM-RoBERTa model and applying zero-shot learning with Gemini.
              </p>

              <h2 className={`${raleway.className} text-3xl font-semibold max-w-2xl mt-8`}>Our approach</h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                Modifications have been made to the implementation of solutions proposed by some
                of the competition participants. In particular, two distinct classification models are proposed.
              </p>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                The first employs a fine-tuned version of RoBERTa, while the second utilises Google&#39;s Gemini for
                zero-shot classification. Both solutions demonstrate convincing performance in both single-label and
                multi-label classification.
              </p>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                The code for our project is freely available at:
              </p>

              <Link href={"https://github.com/lorenzocal/exist2024"}
                    className={`${raleway.className} flex items-center justify-start gap-1 text-xl text-center font-semibold rounded hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}>
                https://github.com/lorenzocal/exist2024 <ChevronRightIcon/>
              </Link>


              <h2 className={`${raleway.className} text-3xl font-semibold max-w-2xl mt-8`}>
                Fine-tuning an XLM-RoBERTa model
              </h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                The Hugging Face Transformers framework provides APIs and tools to download and train state-of-the-art
                pretrained models.
              </p>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                We used the XLMRobertaForSequenceClassification class which is an XLM-RoBERTa
                transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
                output).
              </p>

              <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                Preprocessing input datasets
              </h3>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                The Hugging Face API for training the transformer model requires data to be in a certain format. This
                means that in order to pass it to the model for fine-tuning, the data must be pre-processed.
              </p>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                Two major steps had to be done:
              </p>

              <ul className={`${raleway.className} font-medium max-w-2xl`}>
                <li>
                  1. Tokenizing the text using the pretrained XLM-Roberta model
                </li>
                <li>
                  2. Mapping each example from JSON to a dictionary: &#123;“input_ids”, “label”&#125;
                  Where input_ids is a list of XLM-RoBERTa tokenizer’s representation for each word in a tweet, and label
                  is the label assigned to each example: 1 for “YES”, 0 for “NO”.
                </li>

              </ul>



            </div>
          </div>
        </section>

      </div>
  );
}