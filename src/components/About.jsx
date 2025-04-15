import React from "react";
import AnimatedSection from './AnimatedSection';

const About = () => {
  const paragraphs = [
    {
      id: 1,
      text: "Hello! I'm Hamza Rathore, a passionate MERN Stack Developer with a Bachelor's degree in Software Engineering (BSSE) from the University of Central Punjab. My journey into development started during my academic years, where I discovered a love for crafting intuitive and modern web applications.",
    },
    {
      id: 2,
      text: "I specialize in building full-stack applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js. On the frontend, I use technologies like Tailwind CSS, TypeScript, and Next.js to design responsive and interactive user experiences.",
    },
    {
      id: 3,
      text: "During my academic career, I worked on various projects that strengthened my problem-solving skills and deepened my understanding of both frontend and backend technologies. These experiences helped me build clean, efficient, and scalable web solutions.",
    },
    {
      id: 4,
      text: "I'm constantly learning and exploring new tools, frameworks, and design patterns to stay aligned with modern development practices. I enjoy collaborating with others, transforming ideas into working applications, and contributing to meaningful digital solutions.",
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
      className="w-full min-h-screen bg-gradient-to-b from-gray-700 via-black to-yellow-400 text-white md:pt-20 pt-20 pb-16 "
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
