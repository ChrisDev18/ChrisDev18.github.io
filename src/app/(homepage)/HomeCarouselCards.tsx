import { GlowPill } from "@/app/components/GlowPill";
import {UserIcon, UsersIcon} from "lucide-react";
import Lottie from "lottie-react";
import AudioAnimation from "@/app/assets/AudioWaves.json";
import SpotifyAnimation from "@/app/assets/SpotifyAudio.json";
import DermiaAnimation from "@/app/assets/DermiaAnimation.json";
import { raleway } from "@/app/fonts";
import React from "react";
import {motion} from "motion/react";

export const HomeCarouselCards = [
  {
    shadowColor: "#bf00ff",
    contents: (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            key={0}
            className="relative z-0 h-full flex flex-col p-8 justify-between items-start overflow-clip">
          <div>
            <h4 className={`${raleway.className} font-medium text-3xl mt-2 mb-4`}>Burn FM</h4>
            <p className={`${raleway.className} font-medium text-lg leading-snug max-w-md`}>
              Recoding Burn FM’s website and creating a simple website admin panel using React and Next.js
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <GlowPill color={"#d9b6ff"}>
              <UserIcon size={20} /> <span>Solo Project</span>
            </GlowPill>
            <GlowPill color={"#3cebfb"}>
              <span>React</span>
            </GlowPill>
            <GlowPill color={"#e1e1e1"}>
              <span>Next.js</span>
            </GlowPill>
          </div>

          {/*<p className={`${raleway.className} font-medium text-white/75`}>Click to read more</p>*/}

          <Lottie
              animationData={AudioAnimation}
              className="-z-10 absolute -top-16 -bottom-16 right-0 my-auto"
              loop={true}
          />
        </motion.div>
    )
  },
  {
    shadowColor: "#ff6d79",
    contents: (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            key={0}
            className="relative z-0 h-full flex flex-col p-8 justify-between items-start overflow-clip">
          <div>
            <h4 className={`${raleway.className} font-medium text-3xl mt-2 mb-4`}>
              Derm&#39;IA
            </h4>
            <p className={`${raleway.className} font-medium text-lg leading-snug max-w-md`}>
              A web app that analyses uploaded images of moles to assess potential severity and risk.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <GlowPill color={"#ff6d79"}>
              <UsersIcon size={20} /> <span>8 people</span>
            </GlowPill>
            <GlowPill color={"#3cebfb"}>
              <span>React</span>
            </GlowPill>
            <GlowPill color={"#e1e1e1"}>
              <span>Express.js</span>
            </GlowPill>
            <GlowPill color={"#ff8c76"}>
              <span>PyTorch</span>
            </GlowPill>
          </div>

          {/*<p className={`${raleway.className} font-medium text-white/75`}>Click to read more</p>*/}

          <Lottie
              animationData={DermiaAnimation}
              className="-z-10 absolute top-8 bottom-8 right-8 my-auto max-sm:top-auto max-sm:h-48"
              loop={true}
          />
        </motion.div>
    )
  },
  {
    shadowColor: "#47d242",
    contents: (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            key={1}
            className="relative z-0 h-full flex flex-col p-8 justify-between items-start overflow-clip">
          <div>
            <h4 className={`${raleway.className} font-medium text-3xl mt-2 mb-4`}>
              TrackTracker
            </h4>
            <p className={`${raleway.className} font-medium text-lg leading-snug max-w-md`}>
              A full-stack web app that analyses your Spotify listening habits and those of your friends.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <GlowPill color={"#7dd877"}>
              <UsersIcon size={20} /> <span>7 people</span>
            </GlowPill>
            <GlowPill color={"#ff7474"}>
              <span>Angular</span>
            </GlowPill>
            <GlowPill color={"#9aff95"}>
              <span>SpringBoot</span>
            </GlowPill>
          </div>

          {/*<p className={`${raleway.className} font-medium text-white/75`}>Click to read more</p>*/}

          <Lottie
              animationData={SpotifyAnimation}
              className="rotate-45 -z-10 absolute -top-8 -bottom-8 -right-96 my-auto max-sm:-rotate-45"
              loop={true}
          />
        </motion.div>
    )
  }
];