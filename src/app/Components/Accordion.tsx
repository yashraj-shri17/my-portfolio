"use client";

import { useState } from "react";
import Image from "next/image";

interface AccordionItem {
  id: number;
  title: string;
  keywords: string[];
  description: string;
  imageUrl?: string;
}

const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="border border-gray-300 rounded-lg overflow-hidden"
        >
          {/* Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-md sm:text-xl font-bold text-left pr-4 sm:pr-0 leading-tight">
              {String(item.id).padStart(2, "0")}. {item.title}
            </span>
            <svg
              className={`w-6 h-6 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="bg-primary text-white pb-2 sm:pb-0 pt-6 sm:pt-8">
              <div className="sm:w-3/5 flex flex-col gap-2 px-6 sm:px-10">
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {item.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-black px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-md sm:text-xl font-medium leading-tight">{item.description}</p>
              </div>

              <div className="justify-end hidden sm:flex">
                {item.imageUrl && (
                  <div className="mt-4 bg-white rounded-md w-1/4">
                    <Image
                      src={item.imageUrl}
                      alt={`${item.title} logo`}
                      width={200}
                      height={200}
                      className="rounded-md -mt-16 ml-6" 
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
