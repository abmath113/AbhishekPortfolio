import React, { CSSProperties } from "react";

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "Spring" },
  { skill: "Hibernate" },
  { skill: "TypeScript" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "SQL" },
  { skill: "PostgreSQL" },
  { skill: "React" },
  { skill: "Next.Js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "SVN" },
  { skill: "AWS" },
  { skill: "Jupyter Notebooks" },
  { skill: "Android Studio" },
  { skill: "Google Colab" },
  { skill: "Firebase" },
];

// const paragraphStyle = {
//   fontFamily: "'Avenir Light', Arial, sans-serif",
//   fontWeight: 300,
//   fontSize: "18px",
//   color: "#333",
//   lineHeight: 1.5,
// };
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
          <div className="md:w-1/2">
            <p className="text-center text-xl text-grey mb-4 md:text-left">
              Back in my second year of engineering, I entered a hackathon with
              almost zero programming knowledge. That night, I dove headfirst
              into the rabbit hole of programming, and to my surprise, my team
              ended up winning the runner-up prize.
            </p>
            <p className="text-center text-xl font-family: times new roman mb-4 md:text-left">
              Since then, I’ve explored Machine Learning, Web Development,
              Android Development, and everything in between. I completed my
              Bachelor’s in Artificial Intelligence and Data Science from Mumbai
              University
            </p>
            <p className="text-center text-xl font-family: times new roman  mb-4 md:text-left">
              Currently, I work as a Full Stack Software Developer, primarily
              using Spring Boot and React to build robust, real-world
              applications.
            </p>
            <p className="text-center text-xl font-family: times new roman  mb-4 md:text-left">
              When not working, you can find me doing photography, reading,
              experimenting with cooking or cycling.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-3xl font-bold mb-6">
              Technologies I have worked with:
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => (
                <span
                  className="hover:scale-110 inline-block transition-transform"
                  key={idx}
                >
                  <p className="bg-blue-200 px-4 py-2 mr-2 mt-2 text-blue-900 rounded-full font-semibold hover:bg-blue-400">
                    {item.skill}
                  </p>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
