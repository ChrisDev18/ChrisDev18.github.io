"use client"

import uob_campus from "/public/uob_campus.webp";
import {raleway, robotoSlab} from "@/app/fonts";
import Hero from "@/app/components/Hero";

export default function UoBPage() {
  return (
      <div className="flex-grow flex flex-col bg-neutral-100 text-gray-900 dark:bg-neutral-900 dark:text-white">
        <header className="relative">
          <Hero title={"University of Birmingham"} img={uob_campus} />
        </header>

        <section className={"flex flex-col bg-emerald-50 dark:bg-lime-950 items-center z-20"}>
          <div className={"flex flex-col px-10 py-16 gap-8 max-w-4xl w-full"}>
            <div className={"flex flex-col gap-6"}>
              <h2 className={`${robotoSlab.className} text-4xl text-left font-bold`}>
                Modules
              </h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                I have studied the following modules at the University of Birmingham:
              </p>

              <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>Year 1</h3>

              <ul className={`${raleway.className} font-medium max-w-2xl`}>
                <li>Data Structures & Algorithms</li>
                <li>Object Oriented Programming in Java</li>
                <li>Mathematical and Logical Foundations of Comp. Sci.</li>
                <li>Artificial Intelligence 1</li>
                <li>Theories of Computation</li>
                <li>Full-Stack Development</li>
              </ul>

              <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>Year 2</h3>

              <ul className={`${raleway.className} font-medium max-w-2xl`}>
                <li>Operating Systems</li>
                <li>Software Engineering & Professional Practice</li>
                <li>Functional Programming</li>
                <li>Artificial Intelligence 2</li>
                <li>Team Project</li>
                <li>Security & Networks</li>
              </ul>

              <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                Year 3 - Exchange Year (See INSA Lyon)
              </h3>

            </div>
          </div>
        </section>

      </div>
  )
}