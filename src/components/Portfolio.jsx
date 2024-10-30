import React from 'react'
import gym from '../assets/portfolio/gym.png'
import car from '../assets/portfolio/rent-car.png'
import donut from '../assets/portfolio/donut-shop.png'
import portfolio from '../assets/portfolio/port.png'
import spotify from '../assets/portfolio/Spotify-clone.png'
import weather from '../assets/portfolio/reactWeather.jpg'
import AnimatedSection from './AnimatedSection';
const Portfolio = () => {

    const portfolios=[
        {
            id:1,
            src:gym,
            href:'https://github.com/HamzaRathore/Gym_Website'
        },
        {
            id:2,
            src:car,
            href:'https://github.com/HamzaRathore/Rent-a-car'
        },
        {
            id:3,
            src:donut,
            href:'https://github.com/HamzaRathore'
        },
        {
            id:4,
            src:portfolio,
            href:'https://github.com/HamzaRathore/Portfolio_Website'
        },
        {
            id:5,
            src:spotify,
            href:'https://github.com/HamzaRathore/Spotify-Clone'
        },
        {
            id:6,
            src:weather,
            href:'https://github.com/HamzaRathore/Weather-app'
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-yellow-400 via-black to-gray-700 w-full text-white md:h-screen pt-20'>
     <AnimatedSection direction="right">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check Out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {portfolios.map(({id,src,href})=>(
            
             <div
             key={id}
              className='shadow-md shadow-gray-500 rounded-lg'> 
                
             <img src={src} alt="" className='rounded-md duration-300 hover:scale-105' />
             <div className='flex items-center justify-center'>
                 
                 <a href={href} className='w-28 rounded-lg px-8 py-3 m-4 duration-200 hover:scale-105 hover:bg-gradient-to-r from-black to to-gray-700 cursor-pointer hover:text-white '>Code</a>
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
