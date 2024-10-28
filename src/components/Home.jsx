import React from "react";
import my from "../assets/MyImage.jpg";
import AnimatedSection from './AnimatedSection';
import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-yellow-400 via-black to-gray-700 pt-20">
      <AnimatedSection direction="left">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
        <div className="flex flex-col justify-center h-full mr-16">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">I'm a Front End Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Specializing in creating seamless, interactive user experiences with
            HTML, CSS, Tailwind, JavaScript, and React.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-black to to-gray-700 cursor-pointer ">Portfolio
                <span className="group-hover:rotate-90 duration-300">
                    <MdKeyboardArrowRight size={25}/>
                </span>
            </button>
          </div>
        </div>
        <div>
            <img src={my} alt="My personal image" className="rounded-2xl mx-auto w-[750px] h-[600px] shadow-[0_0_20px_4px_rgba(253,224,71,0.6)] mt-14" />
        </div>
      </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;