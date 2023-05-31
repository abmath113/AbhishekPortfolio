import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "SQL" },
  { skill: "React" },
  { skill: "Next.Js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "Github" },
  { skill: "Jupyter Notebooks" },
  { skill: "Android Studio" },
  { skill: "Google Colab" },
  { skill: "Firebase" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="my-10 text-center font-bold text-4xl">
  <span className="hover:scale-110 inline-block transition-transform">
    About Me
  </span>
  <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
</h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Abhishek and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer student
              based in Mumbai,MH.
            </p>
            <br />
            <p>
            I am a Junior at Mumbai University, Majoring in Artificial Intelligence and Data Science. I am exploring and mastering various domains of computer science and languages like C++, Java,HTML,CSS, PYTHON. I am a keen learner and eager to communicate and network.

I am also a Photography and Consumer tech enthusiast and Physics Philosophy aficionado. When not working I spent time playing Chess.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-blue-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <span className="hover:scale-110 inline-block transition-transform">
                  <p
                    key={idx}
                    className="bg-blue-200 px-4 py-2 mr-2 mt-2 text-blue-900 rounded-full font-semibold hover:bg-blue-400"
                  >
                    {item.skill}
                  </p>
                  </span>
                )
              })}
            </div>
            {/* <Image
              // src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
