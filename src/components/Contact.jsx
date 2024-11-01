import React from 'react'
import AnimatedSection from './AnimatedSection';
const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-yellow-400 via-black to-gray-700 p-4 text-white pt-36'>
       <AnimatedSection direction="right">
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
            <p className='py-6'>Submit the form to get in touch with me </p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/allljrla" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name='name' placeholder='Enter your name'  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '/>
                <input type="text" name='email' placeholder='Enter your email'  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4 '/>
                 <textarea name="message"placeholder='Enter Your Message' id="" rows="10" className='p-2 border-2 bg-transparent rounded-md text-white focus:outline-none'></textarea>
                 <button className='text-white bg-gradient-to-b from bg-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets Talk</button>
            </form>
        </div>
      </div>
      </AnimatedSection>
    </div>
  )
}

export default Contact
