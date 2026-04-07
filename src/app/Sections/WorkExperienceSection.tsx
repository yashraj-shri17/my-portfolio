"use client";
import React from "react";
import { motion } from "framer-motion";
import { workExperience } from "../data";
import { BsGithub, BsGlobe } from "react-icons/bs";

const WorkExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="px-6 md:px-20 lg:px-40 py-24 bg-secondary">
      {/* Section Header - Matches AboutMe & Projects style */}
      <div className="flex items-center justify-start gap-4 pr-4 w-full mb-12">
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-black font-mono tracking-tighter w-fit">
          Work Experience
        </div>
        <div className="border border-white w-1/3"></div>
      </div>

      <div className="flex flex-col gap-8">
        {workExperience.map((exp, index) => (
          <div key={exp.id} className="font-mono tracking-tighter">
            {/* Main Role Card - Matches AboutMe Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white text-secondary rounded-xl p-8 md:p-10 mb-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black">{exp.role}</h3>
                  <div className="text-lg md:text-xl font-bold opacity-80">@ {exp.company}</div>
                </div>
                <div className="text-xl font-black bg-primary px-4 py-1 text-white rounded-lg">
                  {exp.period}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-white px-3 py-1 rounded-md text-xs font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Sub-projects in Bento Grid layout - Matches AboutMe Bento Style */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {exp.projects.map((project, pIdx) => (
                <motion.div
                  key={pIdx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * pIdx, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`rounded-xl p-6 md:p-8 flex flex-col justify-between ${
                    pIdx % 2 === 0 ? "bg-primary text-white" : "bg-white text-secondary"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl md:text-2xl font-black">{project.name}</h4>
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-full transition-all duration-300 ${
                                pIdx % 2 === 0 ? "bg-white text-primary hover:bg-secondary" : "bg-primary text-white hover:bg-secondary"
                            }`}
                          >
                            <BsGithub size={20} />
                          </a>
                        )}
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-full transition-all duration-300 ${
                              pIdx % 2 === 0 ? "bg-white text-primary hover:bg-secondary" : "bg-primary text-white hover:bg-secondary"
                            }`}
                          >
                            <BsGlobe size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className={`text-sm md:text-base leading-relaxed mb-6 font-medium ${
                        pIdx % 2 === 0 ? "text-white/90" : "text-gray-700"
                    }`}>
                      {project.description}
                    </p>
                    
                    {project.details && (
                      <ul className="space-y-3">
                        {project.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-3 text-xs md:text-sm leading-relaxed font-bold">
                            <span className={pIdx % 2 === 0 ? "text-white" : "text-primary"}>•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
