import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// @ts-ignore
import { Link } from 'react-scroll';


function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4 z-50 shadow-md shadow-gray-900">
      <div>
        <h1 className="text-5xl font-signature ml-2 text-white">Hamza</h1>
      </div>
     
     {/* For Big Screen */}
     {/*Tailwind default is sm,so hidden make it disapear on big screen */}
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:underline hover:text-gray-300 "
          >
           <Link 
           to= {link} 
           smooth 
           duration={500}
           spy={true} 
           activeClass="text-white"
           >
            {link}
             </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
              onClick={()=>(
                setNav(false)
              )} 
           to= {link} 
           smooth 
           duration={500}
           spy={true} 
           activeClass="text-white"
           >
            {link}
             </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
