import React, { useState } from 'react';
import IconButton from './IconButton';
import Image, {getImageProps} from "next/image";
import {raleway} from "@/app/fonts";
import {ChevronLeftIcon, ChevronRightIcon, PersonIcon} from "@radix-ui/react-icons";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {AnimatePresence, motion} from 'motion/react';
import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  bg_img?: StaticImport | string; // Background image for the carousel
  img?: {src: StaticImport | string, landscape: boolean}; // Image for the project (can be used inside the card)
  link?: string; // Link to the project
  members: number; // Number of members in the project
}

interface CarouselProps {
  title: string; // Title of the carousel
  projects: Project[]; // List of projects to display
}

export default function Carousel({ title, projects }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
      <div className="relative -z-10">
        {/* Background Blur */}
        {currentProject.bg_img &&
          <AnimatePresence>
            <motion.div
              key={currentProject.title} // Key ensures animation on change
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.5}}
              style={{willChange: "filter"}}
              className="absolute top-0 bottom-0 left-0 right-0 blur-3xl object-cover -z-10 opacity-80"
            >
              <Image src={currentProject.bg_img} alt={"Blurred ambient background"} className={"w-full h-full"} />
            </motion.div>
          </AnimatePresence>
        }


        {/* Carousel Header */}
        <div className="flex justify-between mt-10 items-center gap-8">
          <h3 className={`${raleway.className} text-left lg:text-xl font-semibold`}>
            {title}
          </h3>
          <div className="flex gap-2">
            <IconButton onClick={handlePrev}>
              <ChevronLeftIcon/>
            </IconButton>
            <IconButton onClick={handleNext}>
              <ChevronRightIcon />
            </IconButton>
          </div>
        </div>

        {/* Active Project Card */}
        <div className="relative -z-10 py-4 lg:py-8 -mx-4 lg:-mx-10">
          <Link href={currentProject.link ?? ""}
                className="block border-2 border-white border-opacity-10 w-full pl-4 pr-64 lg:pl-10 py-6 lg:py-10 bg-white bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-[2%]">

            <h3 className={`${raleway.className} text-2xl text-left font-semibold mb-2`}>
              {currentProject.title}
            </h3>
            <p className={`${raleway.className} text-left font-medium mb-6`}>
              {currentProject.description}
            </p>

            <span className={`${raleway.className} flex gap-2 w-min text-nowrap items-center border font-medium py-1 px-3 text-sm rounded-full mb-6`}>
              {currentProject.members === 1 ? <>
                <PersonIcon/>Solo Project
              </> : <>
                Group Project - {currentProject.members} people
              </>}
            </span>

            <p className={`${raleway.className} text-left font-medium opacity-50`}>Read more</p>
            {currentProject.img &&
              <Image src={currentProject.img.src}
                     alt={currentProject.title}
                     width={400} height={400}
                     className={`absolute bottom-0 right-5 drop-shadow-xl 
                     ${currentProject.img.landscape ? 'h-auto w-1/3 -right-2' : ' h-3/4 w-auto'}`}
              />
            }
          </Link>
        </div>
      </div>
  );
}
