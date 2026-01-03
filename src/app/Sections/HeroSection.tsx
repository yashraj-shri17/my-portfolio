"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { motion } from "framer-motion";
import { FaFileAlt, FaHandshake } from "react-icons/fa";
import { titles } from "../data";
import Link from "next/link";


const HeroSection = () => {
  const [viewCount, setViewCount] = useState<number | null>(null);
  // Fetch profile view count on mount
  useEffect(() => {
    fetch("/api/views")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === "number") setViewCount(data.count);
      });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const currentTitle = titles[currentIndex];

    if (isDeleting) {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
          setTypingSpeed(75);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setTypingSpeed(150);
      }
    } else {
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isDeleting, currentIndex, typingSpeed]);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <motion.div
      className="h-[100vh] w-screen"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      <div className="fixed top-0 w-full z-50 py-4 font-mono font-bold tracking-tighter">
        <div className="px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="bg-secondary/75 backdrop-blur-xs rounded-full py-2 md:py-3 px-6 md:px-10 flex items-center justify-between text-white">
            <div
              className="cursor-pointer font-bold"
              onClick={() => scrollToSection("hero")}
            >
              <Image
                src="/YashrajLogo.png"
                alt="Logo"
                height={100}
                width={100}
              />
            </div>

            {/* Desktop Navigation - Text Links */}
            <div className="hidden lg:flex items-center space-x-6">
              {[
                "about",
                "skills",
                "projects",
                "achievements",
                "certifications",
              ].map((item) => (
                <button
                  key={item}
                  title={item}
                  onClick={() => scrollToSection(item)}
                  className="font-medium hover:text-primary transition-colors cursor-pointer duration-200 ease-in-out"
                >
                  {item
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </button>
              ))}
            </div>

            {/* Desktop Icons - Resume, NeuralMinds, Contact */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection("resume")}
                className="hover:text-primary transition-colors cursor-pointer p-1 duration-200 ease-in-out"
                aria-label="Resume"
                title="Resume"
              >
                <FaFileAlt size={18} />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors cursor-pointer p-1 duration-200 ease-in-out"
                aria-label="Contact"
                title="Contact"
              >
                <FaHandshake size={18} />
              </button>
              <button
                onClick={() => scrollToSection("neural-minds")}
                className="hover:scale-110 transition-all cursor-pointer p-1 duration-200 ease-in-out"
                aria-label="Neural Minds"
                title="Neural Minds"
              >
                <Image
                  src="/NMicon.png"
                  alt="NM logo"
                  width={25}
                  height={100}
                />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-xl"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <motion.div
              className="mt-2 bg-secondary/75 backdrop-blur-sm rounded-2xl py-4 px-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {[
                  "about",
                  "skills",
                  "projects",
                  "achievements",
                  "certifications",
                ].map((item) => (
                  <button
                    key={item}
                    title={item}
                    onClick={() => scrollToSection(item)}
                    className="font-medium duration-200 ease-in-out text-left py-2 border-b border-white/20 text-white"
                  >
                    {item
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </button>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex space-x-4 pt-2 text-white text-sm"
                >
                  <button
                    onClick={() => scrollToSection("resume")}
                    className="flex items-center gap-2"
                    aria-label="Resume"
                    title="Resume"
                  >
                    <FaFileAlt size={18} />
                    <span>Resume</span>
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="flex items-center gap-2"
                    aria-label="Contact"
                    title="Contact"
                  >
                    <FaHandshake size={18} />
                    <span>Contact</span>
                  </button>
                  <button
                    onClick={() => scrollToSection("neural-minds")}
                    className="flex items-center gap-2"
                    aria-label="Neural Minds"
                    title="Neural Minds"
                  >
                    <Image
                      src="/NMicon.png"
                      alt="NM logo"
                      width={25}
                      height={100}
                    />
                    <span>NeuralMinds</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <motion.div
        className="bg-white h-full rounded-b-[30px] md:rounded-b-[50px] lg:rounded-b-[75px] relative font-mono tracking-tighter font-black pt-16"
        initial={{ borderRadius: "0px" }}
        whileInView={{
          borderBottomLeftRadius: "75px",
          borderBottomRightRadius: "75px",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
        id="hero"
      >
        {/* Center Image - Hidden on small screens */}
        <motion.div
          className="flex absolute bottom-0 w-full md:justify-center justify-end"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 60 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image
              src="/HeroSectionImg.png"
              alt="Yashraj Shrivastava"
              width={325}
              height={200}
              className="hidden md:block"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
          >
            <Image
              src="/HeroSectionImg.png"
              alt="Yashraj Shrivastava"
              width={300}
              height={200}
              className="md:hidden block"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Buttons */}
        <div className="w-full absolute bottom-3 md:bottom-4 flex justify-center px-4">
          <div className="bg-secondary/75 backdrop-blur-xs rounded-full py-2 px-3 md:px-4 flex items-center justify-center gap-2 w-fit">
            <Link
              href="https://drive.google.com/file/d/16f6HShDcNFJ3cROQJBLoACY1X8Af2KXT/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer group"
            >
              <div className="border-2 border-transparent bg-primary text-white rounded-full px-6 md:px-10 py-1.5 md:py-2 flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base">
                Resume
                <CgArrowTopRight
                  size={18}
                  className="hidden md:inline group-hover:ml-1 group-hover:rotate-45 duration-200 ease-in-out transition-all"
                />
                <CgArrowTopRight size={14} className="md:hidden" />
              </div>
            </Link>
            <div
              className="border-2 border-white text-white rounded-full px-6 md:px-10 py-1.5 md:py-2 cursor-pointer text-sm md:text-base hover:bg-white/25 duration-200 ease-in-out transition-all"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-8 md:px-12 lg:px-20 pt-8 md:pt-10 lg:pt-12 gap-6 md:gap-4">
          {/* Left Section */}
          <div className="flex flex-col items-start gap-2">
            <div className="bg-primary text-white rounded-full px-4 md:px-6 lg:px-8 py-0.5 md:py-1 font-bold text-base md:text-lg lg:text-xl">
              <span className="md:block hidden">hello</span>
              <div className="block md:hidden text-lg leading-tight">
                <span className="text-white">{displayText}</span>
                <span className="animate-pulse text-white">|</span>
              </div>
            </div>
            <motion.div
              className="text-4xl lg:text-6xl leading-tight md:leading-snug lg:leading-16"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            >
              <span className="font-medium">I am</span>
              <br />
              Yashraj
              <br />
              Shrivastava
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex flex-col items-start md:items-end gap-2 text-left md:text-right">
            <div className="bg-primary text-white rounded-full px-4 md:px-6 lg:px-8 py-0.5 md:py-1 font-bold text-base md:text-lg lg:text-xl">
              sometimes
            </div>
            <motion.div
              className="text-4xl lg:text-6xl leading-tight md:leading-snug lg:leading-16"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            >
              <span className="font-medium">I am a</span>
              <br />
              <span className="whitespace-pre-line">
                {displayText}
              </span>
              <span className="animate-pulse text-primary">|</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Profile View Count - less prominent, bottom right */}
      {viewCount !== null && (
        <div className="fixed bottom-4 right-4 z-40 bg-white/80 text-primary px-4 py-2 rounded-full shadow-md text-sm font-semibold backdrop-blur-sm">
          Profile Views: {viewCount}
        </div>
      )}
    </motion.div>
  );
};

export default HeroSection;
