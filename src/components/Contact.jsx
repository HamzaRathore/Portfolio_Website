import React, { useEffect } from 'react'
// import AnimatedSection from './AnimatedSection';
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div name="contact" className='bg-gradient-to-b from-yellow-400 via-black to-gray-700 p-4 text-white pt-36'>
       {/* <AnimatedSection direction="right"> */}
      <div className='flex flex-col p-4 justify-center w-full mx-auto h-full' data-aos="fade-up"
                data-aos-delay="200">
        <div className='items-center justify-center flex flex-col '>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
            <p className='py-6'>Submit the form to get in touch with me </p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/allljrla" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name='name' placeholder='Enter your name' required  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '/>
                <input type="email" name='email' placeholder='Enter your email' required  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4 '/>
                 <textarea name="message"placeholder='Enter Your Message' id="" rows="10" required className='p-2 border-2 bg-transparent rounded-md text-white focus:outline-none'></textarea>
                 <button className='text-white bg-gradient-to-b from bg-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets Talk</button>
            </form>
        </div>
      </div>
      {/* </AnimatedSection> */}
    </div>
  )
}

export default Contact
