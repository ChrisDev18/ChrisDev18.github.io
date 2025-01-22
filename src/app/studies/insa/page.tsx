"use client"

import insa_campus from "/public/insa_lyon_campus.jpg";
import {raleway, robotoSlab} from "@/app/fonts";
import Hero from "@/app/components/Hero";

export default function InsaPage() {

  return (
      <div className="flex-grow flex flex-col bg-neutral-100 text-gray-900 dark:bg-neutral-900 dark:text-white">
        <header className="relative">
          <Hero title={"INSA Lyon"} img={insa_campus} />
        </header>

        <section className={"flex flex-col bg-emerald-50 dark:bg-lime-950 items-center z-20"}>
          <div className={"flex flex-col px-10 py-16 gap-8 max-w-4xl w-full"}>
            <div className={"flex flex-col gap-6"}>
              <h2 className={`${robotoSlab.className} text-4xl text-left font-bold`}>
                Modules
              </h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                As an exchange student, I get to pick all of my modules and learn content from years 3 to 5. I have
                studied the following modules at INSA Lyon:
              </p>

              <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                Year 3 content (eqv. final year BSc)
              </h3>

              <ul className={`${raleway.className} font-medium max-w-2xl`}>
                <li>Linear Algebra & Matrix Calculus</li>
                <li>Signal Processing & Fourier Analysis</li>
                <li>Introduction to Object Oriented Programming in C++</li>
              </ul>

              <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                Year 4 content (eqv. beginner MSci)
              </h3>

              <ul className={`${raleway.className} font-medium max-w-2xl`}>
                <li>Network Programming</li>
                <li>Semantic Web</li>
              </ul>

              <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                Year 5 content (eqv. final year MSci)
              </h3>

              <ul className={`${raleway.className} font-medium max-w-2xl`}>
                <li>Text Mining</li>
                <li>Machine Learning and Data Analytics</li>
                <li>Android Mobile Development</li>
              </ul>

            </div>
          </div>
        </section>

      </div>
  )
}