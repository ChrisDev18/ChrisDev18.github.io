import {ChevronRightIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function Hyperlink({href, className, children, chevron=true, internal=false}: {href: string, className?: string, chevron?: boolean, children: React.ReactNode, internal?: boolean}) {
  return (
      internal ?
      <Link
          href={href}
          className={`
  group relative inline-flex items-center font-bold no-underline underline-offset-2 
  before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] 
  before:bg-black/40 dark:before:bg-white/40 before:-z-10 
  before:transition-all before:duration-300 before:ease-in-out 
  
  hover:before:bg-yellow-400 focus-visible:before:bg-yellow-400 active:before:bg-yellow-600 
  hover:text-black focus-visible:text-black transition-[color]
  hover:before:bottom-0 hover:before:h-full focus-visible:before:bottom-0 focus-visible:before:h-full focus-visible:outline-hidden
` + className }>
        { children } {chevron && <ChevronRightIcon />}
      </Link>
          : <a
              href={href}
              className={`
  group relative inline-flex items-center font-bold no-underline underline-offset-2 
  before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] 
  before:bg-black/40 dark:before:bg-white/40 before:-z-10 
  before:transition-all before:duration-300 before:ease-in-out 
  
  hover:before:bg-yellow-400 focus-visible:before:bg-yellow-400 active:before:bg-yellow-600 
  hover:text-black focus-visible:text-black transition-[color]
  hover:before:bottom-0 hover:before:h-full focus-visible:before:bottom-0 focus-visible:before:h-full focus-visible:outline-hidden
` + className }>
            { children } {chevron && <ChevronRightIcon />}
          </a>

  );
}