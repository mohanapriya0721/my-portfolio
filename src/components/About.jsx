import React from 'react'
import pic from '../assets/222.jpeg'
const About = () => {
  return (
    <section id='About'className='flex flex-col md:flex-row text-center p-5 px-5 bg-black text-white '>
        <div className='py-10 w-1/2 md:w-1/4'>
          <img src={pic} className='border-2 border-amber-200 rounded-4xl ' />
        </div>
        <div className='w-1/2 md:w-1/1 flex justify-center'>
          <div className='flex flex-col justify-center px-5'>
            <h1 className='text-3xl font-bold hover:text-orange-300 border-b-2 border-amber-500 w-[200px] mb-5 ml-5'>ABOUT ME</h1>
            <p className='text-md pb-5 '>I'm <span className='text-orange-300'>Mohanapriya S</span>, I have done My Schooling in Anna Adarsh.</p>
            <p className='text-md pb-5 '>And I done My Bachelor degree of Computer Science Engineering in Jerusalem college of Engineering Batch of[2021-2025].</p>
            <p className='text-md pb-5 '>As aspiring Frontend Developer passionate about crafting responsive and user-friendly.With skills in HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwindcss, I focus on writing clean and efficient code.</p> 
            <p className='text-md pb-5 '>I Enjoy solving problems and bringing creative ideas to life through design and functionality.I strive to continuously learn, improve, and create impactful digital experiences.
          </p>
          </div>
      </div>
    </section>
  )
}

export default About
