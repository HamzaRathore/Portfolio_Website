import React from 'react'
import gym from '../assets/portfolio/gym.png'
import car from '../assets/portfolio/rent-car.png'
import commerce from '../assets/portfolio/e-commerce.png'
import grocery from '../assets/portfolio/Grocery.png'
import baywatch from '../assets/portfolio/BayWatch.png'
import weather from '../assets/portfolio/reactWeather.jpg'
import AnimatedSection from './AnimatedSection'

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: gym,
            href: 'https://github.com/HamzaRathore/Gym_Website',
        },
        {
            id: 2,
            src: car,
            href: 'https://github.com/HamzaRathore/Rent-a-car',
            link: 'https://auto-rental-car.netlify.app/',
        },
        {
            id: 3,
            src: commerce,
            href: 'https://github.com/HamzaRathore/e-commerce-redux-toolkit',
            link: 'https://e-commerce-redux-toolkit.netlify.app/',
        },
        {
            id: 4,
            src: grocery,
            href: 'https://github.com/HamzaRathore/Grocery-Store-Website',
            link: 'https://online-grocery-store-website.netlify.app/',
        },
        {
            id: 5,
            src: baywatch,
            href: 'https://github.com/HamzaRathore/BayWatch-movie-website',
            link: 'https://baywatch.netlify.app/',
        },
        {
            id: 6,
            src: weather,
            href: 'https://github.com/HamzaRathore',
        },
    ]

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-yellow-400 via-black to-gray-700 w-full text-white md:h-screen pt-20"
        >
            <AnimatedSection direction="right">
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                            Portfolio
                        </p>
                        <p className="py-6">Check Out some of my work right here</p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-14 sm:px-0 justify-center">
                         {portfolios.map(({ id, src, href, link }) => (
                            <div
                                key={id}
                                className="shadow-md shadow-gray-500 rounded-lg w-80   duration-300 hover:scale-105"
                            >
                                <img
                                    src={src}
                                    alt=""
                                    className="rounded-md"
                                />
                                <div className="flex items-center justify-center">
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-28 rounded-lg px-8 py-3 m-4 duration-200 hover:scale-105 hover:bg-gradient-to-r from-black to-gray-700 cursor-pointer hover:text-white"
                                    >
                                        Code
                                    </a>
                                    {link && (
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-28 rounded-lg px-8 py-3 m-4 duration-200 hover:scale-105 hover:bg-gradient-to-r from-black to-gray-700 cursor-pointer hover:text-white"
                                        >
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
}

export default Portfolio
