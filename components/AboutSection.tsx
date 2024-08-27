import React, { CSSProperties } from "react";

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
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            
            <p className="text-center text-xl text-grey mb-4 md:text-left">
        Hello, I am Abhishek, Software Developer. I graduated from Mumbai University,
        Majoring in Artificial intelligence and Data Science. I am passionate
        about creating meaningful software solutions that solve real-world
        {/* problems and enhance user experiences. Collaboration is at the core of
        my work, and I thoroughly enjoy working with fellow developers to tackle
        challenging projects and transform ideas into reality. */}
      </p>
      <p className="text-center text-xl font-family: times new roman mb-4 md:text-left">
  My work primarily revolves around 
  <span className="text-gray-800 dark:text-white underline decoration-blue-600 font-bold"> Web development</span>, 
  <span className="text-gray-800 dark:text-white underline decoration-blue-600 font-bold">Machine learning</span>, and 
  <span className="text-gray-800 dark:text-white underline decoration-blue-600 font-bold">Android development</span>. 
  I find delight in leveraging technology to innovate and push boundaries in these areas.
</p>
      <p className="text-center text-xl font-family: times new roman  mb-4 md:text-left">
        I am excited to explore new opportunities and see where they take me.
      </p>
      <p className="text-center text-xl font-family: times new roman  mb-4 md:text-left">
        When not working, you can find me doing photography, reading, experimenting with cooking or cycling.
      </p>

          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-3xl font-bold mb-6">Technologies I have worked with:</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => (
                <span className="hover:scale-110 inline-block transition-transform" key={idx}>
                  <p
                    className="bg-blue-200 px-4 py-2 mr-2 mt-2 text-blue-900 rounded-full font-semibold hover:bg-blue-400"
                  >
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
