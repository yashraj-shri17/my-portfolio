"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workExperience } from "../data";
import { BsGithub, BsGlobe, BsChevronDown } from "react-icons/bs";

const WorkExperienceSection: React.FC = () => {
  // Store expanded state for each experience item (by ID)
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="px-6 md:px-20 lg:px-40 py-24 bg-secondary">
      {/* Section Header - Matches AboutMe & Projects style */}
      <div className="flex items-center justify-start gap-4 pr-4 w-full mb-12">
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-black font-mono tracking-tighter w-fit">
          Work Experience
        </div>
        <div className="border border-white w-1/3"></div>
      </div>

      <div className="flex flex-col gap-6">
        {workExperience.map((exp) => {
          const isExpanded = !!expandedIds[exp.id];

          return (
            <div key={exp.id} className="font-mono tracking-tighter">
              {/* Main Role Box / Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white text-secondary rounded-xl p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl border border-white/10"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black">{exp.role}</h3>
                    <div className="text-lg md:text-xl font-bold opacity-80 flex flex-wrap items-center gap-x-2 mt-1">
                      <span>@ {exp.company}</span>
                      {exp.location && (
                        <span className="text-sm md:text-base font-semibold opacity-70">
                          • {exp.location}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-sm md:text-base font-black bg-primary px-4 py-1.5 text-white rounded-lg whitespace-nowrap shadow-sm">
                    {exp.period}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary text-white px-3 py-1 rounded-md text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Dropdown Toggle Button */}
                <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                  <span className="text-xs md:text-sm font-bold text-gray-500">
                    {exp.projects.length} {exp.projects.length === 1 ? "Project / Focus Area" : "Projects / Focus Areas"}
                  </span>

                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-white hover:bg-primary rounded-lg text-xs md:text-sm font-black transition-all duration-300 cursor-pointer group"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? "Hide Details" : "View Details & Projects"}</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BsChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                    </motion.div>
                  </button>
                </div>
              </motion.div>

              {/* Collapsible Dropdown Details */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden mt-4"
                  >
                    <div className={`grid grid-cols-1 ${exp.projects.length > 1 ? "lg:grid-cols-2" : ""} gap-6 pb-4`}>
                      {exp.projects.map((project, pIdx) => (
                        <div
                          key={pIdx}
                          className={`rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-lg ${
                            pIdx % 2 === 0 ? "bg-primary text-white" : "bg-white text-secondary border border-gray-200"
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
                                      pIdx % 2 === 0 ? "bg-white text-primary hover:bg-secondary hover:text-white" : "bg-primary text-white hover:bg-secondary"
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
                                      pIdx % 2 === 0 ? "bg-white text-primary hover:bg-secondary hover:text-white" : "bg-primary text-white hover:bg-secondary"
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
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
