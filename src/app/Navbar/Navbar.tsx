import React from 'react';
import Hyperlink from "@/app/components/Hyperlink";
import "./gradient.css";
import BlurEffect from "@/app/components/BlurEffect";

export default function Navbar() {
  return (
      <div className="flex top-0 fixed w-full z-50 justify-center pointer-events-none">
        <BlurEffect className="h-28 exponential-gradient"
                    intensity={100}
                    position="top"/>

        <div className={"w-full max-w-6xl px-8 sm:px-16 py-6 z-10 relative flex gap-2 justify-between text-white pointer-events-none"}>
          <Hyperlink href={"/"} chevron={false} className="before:bg-white/40 pointer-events-auto" internal
                     aria-label="Navigate to Home">
            Chris Wilson
          </Hyperlink>

          <div className="flex gap-4 pointer-events-auto">
            <Hyperlink href={"/studies/uob"} chevron={false} className="before:bg-white/40 pointer-events-auto font-medium" internal
                       aria-label="Navigate to Home">
              Uni
            </Hyperlink>
            <Hyperlink href={"/studies/insa"} chevron={false} className="before:bg-white/40 pointer-events-auto font-medium" internal
                       aria-label="Navigate to Home">
              Study Abroad
            </Hyperlink>
          </div>
        </div>
      </div>
  );
}