"use client"

import Hero from "@/app/components/Hero";
import exist_hero from "@/app/assets/exist-hero.png";
import {raleway} from "@/app/fonts";
import Hyperlink from "@/app/components/Hyperlink";

export default function ExistPage() {

  return (
      <div className={"flex flex-col grow bg-neutral-100 text-neutral-900 dark:text-white"}>
        <header>
          <Hero title={"EXIST 2024 Challenge"} subsection={"My Work"} img={exist_hero}/>
        </header>

        <section className={"flex flex-col items-center z-20 bg-neutral-100 dark:bg-neutral-900"}>
          <div className={"flex flex-col px-10 py-16 gap-8 max-w-3xl w-full"}>
            <div className={"flex flex-col gap-6"}>

              <h2 className={`font-sans text-3xl font-semibold max-w-2xl`}>Overview</h2>

              <p className={`font-sans font-medium max-w-2xl`}>
                The EXIST challenge seeks to advance research on sexism detection through two core challenges: sexism
                identification and intention classification.
                The first challenge involves determining whether a given text contains sexist content, while the second
                deals with the motivations behind such expressions.
              </p>

              <span>

                 <Hyperlink href={"https://nlp.uned.es/exist2024/"} className={`text-xl font-sans`}>
                  Learn more about EXIST
                 </Hyperlink>

              </span>

              <p className={`font-sans font-medium max-w-2xl`}>
                To address these tasks, we leverage state-of-the-art natural language processing techniques, including
                fine-tuning the XLM-RoBERTa model and applying zero-shot learning with Gemini.
              </p>

              <h2 className={`font-sans text-3xl font-semibold max-w-2xl mt-8`}>Our approach</h2>

              <p className={`font-sans font-medium max-w-2xl`}>
                Modifications have been made to the implementation of solutions proposed by some
                of the competition participants. In particular, two distinct classification models are proposed.
              </p>

              <p className={`font-sans font-medium max-w-2xl`}>
                The first employs a fine-tuned version of RoBERTa, while the second utilises Google&#39;s Gemini for
                zero-shot classification. Both solutions demonstrate convincing performance in both single-label and
                multi-label classification.
              </p>

              <p className={`font-sans font-medium max-w-2xl`}>
                The code for our project is freely available at:
              </p>

              <span>
                <Hyperlink href={"https://github.com/lorenzocal/exist2024"} className={`text-xl font-sans`}>https://github.com/lorenzocal/exist2024</Hyperlink>
              </span>

              <h2 className={`font-sans text-3xl font-semibold max-w-2xl mt-8`}>
                Fine-tuning an XLM-RoBERTa model
              </h2>

              <p className={`font-sans font-medium max-w-2xl`}>
                The Hugging Face Transformers framework provides APIs and tools to download and train state-of-the-art
                pretrained models.
              </p>

              <p className={`font-sans font-medium max-w-2xl`}>
                We used the XLMRobertaForSequenceClassification class which is an XLM-RoBERTa
                transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
                output).
              </p>

              <h3 className={`font-sans text-xl font-semibold max-w-2xl`}>
                Preprocessing input datasets
              </h3>

              <p className={`font-sans font-medium max-w-2xl`}>
                The Hugging Face API for training the transformer model requires data to be in a certain format. This
                means that in order to pass it to the model for fine-tuning, the data must be pre-processed.
              </p>

              <p className={`font-sans font-medium max-w-2xl`}>
                Two major steps had to be done:
              </p>

              <ul className={`font-sans font-medium max-w-2xl`}>
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