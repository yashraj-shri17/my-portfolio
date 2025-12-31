"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { SiLangchain } from "react-icons/si";
import {
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiOpenai,
  SiFlask,
  SiStreamlit,
  SiFastapi,
  SiTableau,
  SiGit,
} from "react-icons/si";

const AboutMe = () => {
  return (
    <section id="about" className="px-6 md:px-20 lg:px-40">
      {/* Section Header */}
      <div className="flex items-center justify-start gap-4 pr-4 w-full mb-8 md:pt-24">
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-black font-mono tracking-tighter w-fit">
          About Me
        </div>
        <div className="border border-white w-1/3"></div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-4 lg:grid-cols-3 gap-4 font-mono tracking-tighter">
        {/* Card 1: Education & Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white text-secondary rounded-xl p-4 md:p-6 col-span-4 lg:col-span-2 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg md:text-xl font-black mb-3">
              Education & Background
            </h3>
            <p className="text-xs md:text-sm leading-relaxed">
              I&lsquo;m Yashraj Shrivastava, a 22-year-old aspiring Data
              Scientist and AI enthusiast currently pursuing my Bachelor&lsquo;s in
              Data Science & Applications at IIT Madras, based in Bengaluru.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-secondary/20">
            <span className="text-xs font-medium">
              Passionate about building real-world AI solutions.
            </span>
          </div>
        </motion.div>

        {/* Card 2: Mentorship */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-primary text-white rounded-xl p-4 md:p-6 flex flex-col justify-between col-span-4 
          lg:col-span-1"
        >
          <div>
            <h3 className="text-lg md:text-xl font-black mb-3">Mentorship</h3>
            <div className="space-y-2 text-xs md:text-sm">
              <div>
                <span className="font-black text-2xl">800+</span>
                <p className="text-xs mt-0.5">Students mentored</p>
              </div>
              <div className="pt-2 border-t border-white/20">
                <p className="text-xs leading-relaxed">
                  Teaching JEE, Aptitude, and Intro to Data Science through
                  EdTech platforms
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: AI Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white text-secondary rounded-xl p-4 md:p-6 col-span-2 lg:col-span-1 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg md:text-xl font-black mb-3">AI Projects</h3>
            <div className="space-y-2 text-xs">
              <div className="pb-2 border-b border-secondary/20">
                <span className="font-bold">SmartJobMatcher</span>
                <p className="text-[10px] mt-0.5">AI-powered job matching</p>
              </div>
              <div className="pb-2 border-b border-secondary/20">
                <span className="font-bold">Momenta</span>
                <p className="text-[10px] mt-0.5">Audio Deepfake Detection</p>
              </div>
              <div className="pb-2 border-b border-secondary/20">
                <span className="font-bold">AstroBot</span>
                <p className="text-[10px] mt-0.5">Space-themed AI assistant</p>
              </div>
              <div className="pb-2">
                <span className="font-bold">TruthTell</span>
                <p className="text-[10px] mt-0.5">Fact-checking & NLP tool</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 5: NeuralMinds */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white text-secondary rounded-xl p-4 md:p-6 col-span-2 lg:col-span-1 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg md:text-xl font-black mb-3">NeuralMinds</h3>
            <p className="text-xs leading-relaxed mb-3">
              Founder of NeuralMinds — a YouTube channel focused on making AI,
              Machine Learning, and Data Science accessible to beginners and
              enthusiasts alike.
            </p>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-secondary/20">
            <div>
              <span className="font-black text-xl">200+</span>
              <p className="text-[10px]">Subscribers</p>
            </div>
            <div>
              <span className="font-black text-xl">50+</span>
              <p className="text-[10px]">Videos</p>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Technical Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-primary text-white rounded-xl p-4 md:p-6 col-span-4 lg:col-span-1 flex flex-col"
        >
          <h3 className="text-lg md:text-xl font-black mb-4">
            Technical Stack
          </h3>
          <div className="grid grid-cols-3 gap-x-3 gap-y-2.5 md:gap-x-4 md:gap-y-3 text-xs flex-1">
            <div className="flex items-center gap-2 min-h-[24px]">
              <SiPython size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">Python</span>
            </div>
            <div className="flex items-center gap-2 min-h-[24px]">
              <SiCplusplus size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">C/C++</span>
            </div>
            <div className="flex items-center gap-2 min-h-[24px]">
              <FaJava size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">Java</span>
            </div>

            <div className="flex items-center gap-2 min-h-[24px]">
              <SiPostgresql size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">SQL</span>
            </div>
            <div className="flex items-center gap-2 min-h-[24px]">
              <SiPandas size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">Pandas</span>
            </div>
            <div className="flex items-center gap-2 min-h-[24px]">
              <SiNumpy size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">NumPy</span>
            </div>

            <div className="flex items-center gap-2 min-h-[24px]">
              <SiScikitlearn size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">Scikit-learn</span>
            </div>
            <div className="flex items-center gap-2 min-h-[24px]">
              <SiTensorflow size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">TensorFlow</span>
            </div>
            <div className="flex items-center gap-2 min-h-[24px]">
              <SiFlask size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">Flask</span>
            </div>

            <div className="flex items-center gap-2 min-h-[24px]">
              <SiStreamlit size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">Streamlit</span>
            </div>
            <div className="flex items-center gap-2 min-h-[24px]">
              <SiFastapi size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">FastAPI</span>
            </div>
            <div className="flex items-center gap-2 min-h-[24px]">
              <SiOpenai size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">OpenAI</span>
            </div>

            <div className="flex items-center gap-2 min-h-[24px]">
              <FaChartSimple size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">Power BI</span>
            </div>
            <div className="flex items-center gap-2 min-h-[24px]">
              <SiTableau size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">Tableau</span>
            </div>
            <div className="flex items-center gap-2 min-h-[24px]">
              <SiGit size={18} className="flex-shrink-0" />
              <span className="font-bold truncate">Git</span>
            </div>

            <div className="col-span-3 grid grid-cols-3 gap-x-3 md:gap-x-4">
              <div className="flex items-center gap-2 min-h-[24px]">
                <SiLangchain size={18} className="flex-shrink-0" />
                <span className="font-bold">LangChain</span>
              </div>
              <div className="flex items-center gap-2 min-h-[24px]">
                <SiLangchain size={18} className="flex-shrink-0" />
                <span className="font-bold">LangGraph</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 6: Quote / Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-primary text-white rounded-xl p-4 md:p-6 col-span-4 lg:col-span-3 flex flex-col justify-center items-center text-center"
        >
          <blockquote className="text-lg md:text-xl lg:text-2xl font-black leading-tight">
            &ldquo;Building smarter AI, one project and one learner at a
            time.&ldquo;
          </blockquote>
          <div className="mt-4 w-12 h-0.5 bg-white rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
