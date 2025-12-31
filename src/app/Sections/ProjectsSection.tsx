"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { generativeAIProjects, machineLearningProjects } from "../data";
import Link from "next/link";

export interface Project {
  name: string;
  subheading: string;
  description: string;
  tech: string;
  github: string;
  imgUrl: string;
}
const StepsCard = ({
  i,
  project,
  progress,
  range,
  targetScale,
}: {
  i: number;
  project: Project;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="sticky flex items-center justify-center w-full mb-4"
      style={{ top: `calc(4rem + ${i * 30}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="relative flex flex-col md:flex-row h-auto w-full origin-top rounded-xl bg-white shadow-2xl overflow-hidden"
      >
        
        <div className="w-full md:w-[35%] bg-primary p-8 md:p-12 flex items-center justify-center relative min-h-[250px] md:min-h-[400px]">
          <div>
            <Image
              src={project.imgUrl}
              alt={project.name + "Thubmnail"}
              width={250}
              height={100}
              className="rounded-xl border-2 border-white shadow-xl"
            />
          </div>
          <Link
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer group"
          >
            <div className="absolute bottom-6 right-6 bg-white rounded-full p-4 shadow-lg hover:-rotate-45 hover:scale-105 duration-300 ease-in-out transition-all cursor-pointer">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 p-8 md:p-12 flex flex-col gap-2">
          <div className="font-mono text-2xl font-black tracking-tighter">
            Project {String(i + 1).padStart(2, "0")}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-mono tracking-tighter leading-tight">
            {project.name}
          </h1>

          <h2 className="text-base md:text-lg font-mono tracking-tight text-gray-700">
            {project.subheading}
          </h2>

          <p className="text-sm font-mono tracking-tight leading-relaxed text-gray-800 mb-2">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.split(", ").map((tech, idx) => (
              <span
                key={idx}
                className="bg-primary text-black px-4 py-1.5 rounded-full text-xs md:text-sm font-mono font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm md:text-base font-mono font-semibold text-secondary hover:text-primary transition-colors w-fit group"
          >
            <span>View on GitHub</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"genai" | "ml">("genai");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const currentProjects =
    activeTab === "genai" ? generativeAIProjects : machineLearningProjects;

  const containerHeight = activeTab === "genai" ? "200vh" : "100vh";

  return (
    <main className="w-screen" id="projects">
      <div className="w-full font-mono tracking-tighter px-6 md:px-20 lg:px-40 flex flex-col gap-4 sm:gap-8 md:pt-24">
        {/* Header */}
        <div className="flex flex-col gap-8 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-start gap-4 w-full">
              <div className="text-white text-2xl sm:text-4xl lg:text-5xl font-black w-fit">
                My Projects
              </div>
              <div className="border border-white w-1/5 md:w-1/3"></div>
            </div>

            {/* Tab Pills */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setActiveTab("genai")}
                className={`px-4 py-2 rounded-full font-mono font-semibold text-sm tracking-tight transition-all duration-300 cursor-pointer ${
                  activeTab === "genai"
                    ? "bg-primary text-secondary"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Generative AI & LLM
              </button>
              <button
                onClick={() => setActiveTab("ml")}
                className={`px-4 py-2 rounded-full font-mono font-semibold text-sm tracking-tight transition-all duration-300 cursor-pointer ${
                  activeTab === "ml"
                    ? "bg-primary text-secondary"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Machine Learning
              </button>
            </div>
          </div>

          {/* Projects Container */}
          <div
            ref={container}
            className="relative"
            style={{ minHeight: containerHeight }}
          >
            {currentProjects.map((project, i) => {
              const targetScale = 1 - (currentProjects.length - i) * 0.05;
              const start = i / currentProjects.length;
              const end = (i + 1) / currentProjects.length;

              return (
                <StepsCard
                  key={`${activeTab}-${i}`}
                  i={i}
                  project={project}
                  progress={scrollYProgress}
                  range={[start, end]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsSection;
