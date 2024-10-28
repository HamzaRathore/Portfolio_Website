import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-white py-10">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-6 md:mb-0 text-center md:text-left">
        <h3 className="text-5xl font-signature ml-2 text-white">Hamza</h3>
          <p className="text-gray-400">Front-End Developer</p>
          <p className="text-gray-400">+92 3104484406</p>
          <p className="text-gray-400">hamzarathore0000@gmail.com</p>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
          <Link
            to="home"
            smooth
            duration={500}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            to="experience"
            smooth
            duration={500}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <div className="flex space-x-4 mt-6 md:mt-0 justify-center">
          <a
            href="https://github.com/HamzaRathore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <BsFillPersonLinesFill size={24} />
          </a>
          <a
            href="https://linkedin.com/in/hamza-rathore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;