import React from "react";
import my from "../assets/MyImage-1.png";
import AnimatedSection from './AnimatedSection';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-yellow-400 via-black to-gray-700 pt-28 overflow-hidden">
      <AnimatedSection direction="left">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
          <div className="flex flex-col justify-center h-full md:mr-16">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Front End Developer</h2>
            <p className="text-gray-400 py-4 max-w-md">
              Specializing in creating seamless, interactive user experiences with
              HTML, CSS, Tailwind, JavaScript, and React.
            </p>
            <div>
              <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-black to-gray-700 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={25} />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center  ">
            <img 
              src={my} 
              alt="My personal image" 
              className="rounded-2xl w-[490px] sm:w-[550px] md:w-[650px] lg:w-[870px] h-[450px] lg:h-[600px] lg:-mt-4 " 
              style={{maxWidth: '750px', maxHeight: '600px' }} 
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
