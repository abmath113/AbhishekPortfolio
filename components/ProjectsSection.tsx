import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Anuvadak: ISL Translation",
    points: [
      "Developed an Android app to translate Indian Sign Language (ISL) to text in real time.",
      "Implemented palm detection and sign identification using Tensorflow, Mediapipe, and OpenCV.",
      "Utilized various deep learning algorithms, including LSTM, to train the model on over 3000 images.",
    ],
    image: "/thankfulthoughts.png",
    github: "https://github.com/abmath113/Anuvadak",
    link: "https://github.com/abmath113/Anuvadak",
  },
  {
    name: "Used Books Marketplace App",
    points: [
      "Created an Android app for college students to buy and sell used textbooks.",
      "Provided a platform for easy exchange of textbooks within the college community.",
    ],
    image: "/booksapp.jpg",
    github: "https://github.com/abmath113/Android-Marketplace-App",
    link: "https://github.com/abmath113/Android-Marketplace-App",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        <span className="hover:scale-110 inline-block transition-transform">
          Projects
        </span>
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <ul className="list-disc pl-6">
                      {project.points.map((point, index) => (
                        <li key={index} className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
