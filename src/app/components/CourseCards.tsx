import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Markdown from "react-markdown";
import {raleway} from "@/app/fonts";

export interface CourseItem {
  id: string;
  title: string;
  content: string;
}

export default function CourseCards({items, className}: {items: CourseItem[], className?: string}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<CourseItem | null>(null);

  function handleClick(item: CourseItem) {
    setSelectedId(item.id);
    setSelectedItem(item);
  }

  return (
      <div className={`grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 ${className}`}>
        {items.map((item) => (
            <motion.button
                transition={{duration: 0.5, ease: [0, 0.71, 0.2, 1.01]}}
                key={item.id}
                layoutId={`card-${item.id}`}
                onClick={() => handleClick(item)}
                className={"text-left bg-neutral-950 p-5 text-white cursor-pointer outline outline-2 outline-transparent hover:underline focus-visible:underline hover:outline-black focus-visible:outline-black dark:hover:outline-white dark:focus-visible:outline-white hover:outline-offset-[6px] focus-visible:outline-offset-[6px] transition-[outline,outline-offset]"}
            >
              <motion.h2 className={`${raleway.className} text-xl font-medium`}>{item.title}</motion.h2>
            </motion.button>
        ))}

        <AnimatePresence>
          {selectedId && selectedItem && (
              <motion.button
                  onClick={() => setSelectedId(null)}
                  className={"fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50"}
                  initial={{ backgroundColor: "rgb(50 50 50 0)", backdropFilter: "blur(0px)", }}
                  animate={{ backgroundColor: "rgb(50 50 50 0.5)", backdropFilter: "blur(20px)", }}
                  exit={{ backgroundColor: "rgb(50 50 50 0)", backdropFilter: "blur(0px)", }}
                  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01]}}
              >
                <motion.div
                    layoutId={`card-${selectedId}`}
                    onClick={(e) => e.stopPropagation()}
                    className={"bg-neutral-950 m-10 p-5 text-left text-white shadow-md max-w-(--breakpoint-sm) flex grow flex-col justify-between"}
                    transition={{duration: 0.5, ease: [0, 0.71, 0.2, 1.01]}}
                >
                  <div>
                    <h2 className={`${raleway.className} text-3xl mt-2 mb-6 font-semibold`}>{selectedItem.title}</h2>
                    <Markdown components={{
                      h1: ({ node, ...props }) => <h3 className={`${raleway.className} text-xl font-semibold`} {...props} />,
                      p: ({ node, ...props }) => <p className={`${raleway.className} font-medium my-2`} {...props} />,
                      ul: ({ node, ...props }) => <ul className={`${raleway.className} font-medium list-disc pl-6 space-y-2 mt-4 mb-4`} {...props} />,
                      ol: ({ node, ...props }) => <ol className={`${raleway.className} font-medium list-decimal pl-6 space-y-2 mt-4 mb-4`} {...props} />,
                      li: ({ node, ...props }) => <li {...props} />,
                    }}>
                      {selectedItem.content}
                    </Markdown>
                  </div>
                </motion.div>
              </motion.button>
          )}
        </AnimatePresence>
      </div>
  );
}
