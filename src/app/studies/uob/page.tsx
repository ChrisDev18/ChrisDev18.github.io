"use client"

import uob_campus from "/public/uob_campus.webp";
import {raleway, robotoSlab} from "@/app/fonts";
import Hero from "@/app/components/Hero";
import CourseCards from "@/app/components/CourseCards";
import Link from "next/link";
import {y1_items, y2_items} from "@/app/studies/module_information";
import {ChevronRightIcon} from "@radix-ui/react-icons";
import Hyperlink from "@/app/components/Hyperlink";

export default function UoBPage() {
  return (
      <div className="flex-grow flex flex-col bg-neutral-100 text-gray-900 dark:bg-neutral-900 dark:text-white">
        <header className="relative">
          <Hero title={"University of Birmingham"} img={uob_campus}/>
        </header>

        <section className={"flex flex-col bg-emerald-50 dark:bg-lime-950 items-center z-20"}>
          <div className={"flex flex-col px-10 py-16 gap-8 max-w-4xl w-full"}>
            <div className={"flex flex-col gap-4"}>
              <h2 className={`${robotoSlab.className} text-4xl text-left font-bold`}>
                Modules
              </h2>

              <p className={`${raleway.className} font-medium max-w-2xl`}>
                I have studied the following modules at the University of Birmingham:
              </p>

              <span className={"flex flex-wrap justify-between items-center mt-4"}>
                <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                  Year 1
                </h3>

                <span className={`${raleway.className} font-medium text-lime-800 dark:text-white opacity-70 max-w-2xl`}>
                  Click on a module to learn more
                </span>
              </span>

              <CourseCards items={y1_items} />

              <span className={"flex flex-wrap justify-between items-center mt-4"}>
                <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl`}>
                  Year 2
                </h3>

                <span className={`${raleway.className} font-medium text-lime-800 dark:text-white opacity-70 max-w-2xl`}>
                  Click on a module to learn more
                </span>
              </span>

              <CourseCards items={y2_items} />

              <h3 className={`${raleway.className} text-xl font-semibold max-w-2xl mt-4`}>
                Year 3 - Exchange Year
              </h3>

              <p className={`${raleway.className} font-medium`}>
                My third year is being spend studying abroad in France. For more information, see the <Hyperlink href={"/studies/insa"} internal>
                INSA Lyon page
              </Hyperlink>
              </p>
            </div>
          </div>
        </section>

      </div>
  )
}