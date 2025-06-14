"use client"; 
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profileimg.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold bg mt-6 md:mt-0 md:text-6xl">
            Hi, I&#39;m{" "}
            <span className="font-semibold animated-gradient text-8xl hover:scale-110 inline-block transition-transform bg-blue-200 px-4 py-2 mr-2 mt-2 text-blue-900 rounded-full font-semibold hover:bg-blue-400 animate-pulse">
              Abhishek{" "}
            </span>
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-blue-600">
              Full Stack Developer{" "}
            </span>
            and{" "}
            <span className="font-semibold text-blue-600">
              Machine Learning enthusiast{" "}
            </span>
            based in Mumbai, IN.
            <br />
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-blue-600 rounded shadow hover:bg-blue-800"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>

          <a
            href="/Abhishekresume.pdf"
            className="text-neutral-100 font-semibold px-6 py-3 bg-blue-600 rounded shadow hover:bg-blue-800 ml-4"
            target="_blank" // Optional: opens the resume in a new tab
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 mb-1">
        <a href="https://github.com/abmath113" rel="noreferrer" target="_blank">
          <AiOutlineGithub
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={30}
          />
        </a>
        <a
          href="https://twitter.com/abmath113"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineTwitter
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={30}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/abmath113/"
          rel="noreferrer"
          target="_blank"
          className="text-neutral-500 dark:text-neutral-100 hover:text-blue-500"
        >
          <AiOutlineLinkedin
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={30}
          />
        </a>
        <a
          href="https://www.instagram.com/shotbyabhishake/"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineInstagram
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={30}
          />
        </a>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
