import React from "react";
import AnimatedSection from './AnimatedSection';

const About = () => {
  const paragraphs = [
    {
      id: 1,
      text: "Hello! I'm Hamza Rathore, a passionate front-end developer with a Bachelor's degree in Software Engineering (BSSE) from the University of Central Punjab. My journey in technology began during my studies, where I developed a keen interest in creating intuitive and engaging user interfaces.",
    },
    {
      id: 2,
      text: "I specialize in utilizing modern web technologies such as CSS, Tailwind CSS, JavaScript, TypeScript, React and Next.js to build responsive and dynamic web applications. My goal is to craft seamless user experiences that not only look great but also function flawlessly.",
    },
    {
      id: 3,
      text: "During my academic career, I worked on various projects that honed my skills in both front-end development and problem-solving. I am continuously exploring new technologies and frameworks to enhance my capabilities and stay up-to-date with industry trends.",
    },
    {
      id: 4,
      text: "As a front-end developer, I thrive on transforming ideas into reality and collaborating with others to deliver high-quality digital solutions. I'm excited to take on new challenges and contribute to innovative projects that make a difference. I am continuously exploring new technologies and frameworks to enhance my capabilities and stay up-to-date with industry trends.",
    },
    {
      id: 5,
      text: "Feel free to reach out if you'd like to connect or discuss potential opportunities!",
      className: "italic font-medium text-gray-300",
    },
  ];

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-700 via-black to-yellow-400 text-white md:pt-32 pt-64 pb-16 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <AnimatedSection
              key={paragraph.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={200 + index * 100}
            >
              <div className="transform hover:scale-[1.01] transition-transform duration-300">
                <p className={`text-lg md:text-xl leading-relaxed text-gray-300 ${paragraph.className || ''}`}>
                  {paragraph.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded-full opacity-50" />
          </div>
        
      </div>
    </div>
  );
};

export default About;
