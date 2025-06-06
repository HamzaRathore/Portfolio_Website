import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import typeScript from "../assets/typescript.png";
import Next from "../assets/Next.png";
import Nodejs from "../assets/nodejs.png";
import Mongodb from "../assets/Mongodb.png";
import Expressjs from "../assets/Expressjs.png";
import Firebase from "../assets/firebase.png";
import AnimatedSection from './AnimatedSection';
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: typeScript,
      title: "TypeScript",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: Mongodb,
      title: "Mongodb",
      style: "shadow-green-600",
    },
    {
      id: 7,
      src: Expressjs,
      title: "Expressjs",
      style: "shadow-black",
    },
    {
      id: 8,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: Nodejs,
      title: "Nodejs",
      style: "shadow-green-600",
    },
    {
      id: 10,
      src: Next,
      title: "Next.Js",
      style: "shadow-gray-600",
    },
    {
      id: 11,
      src: Firebase,
      title: "Firebase",
      style: "shadow-orange-600",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-700 via-black to-yellow-400 w-full h-screen pt-40 md:pt-24 "
    >
      <AnimatedSection direction="left">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline p-2">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0  ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                `shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`
              }
            >
              <img src={src} alt="" className=" w-14 md:w-20 lg:w-20  mx-auto" />
              <p className="md:mt-4 mt-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
      </AnimatedSection>
    </div>
  );
};

export default Experience;
