import React from 'react'
import pic from '../assets/666.jpeg'
import { FaInstagram, FaLinkedinIn, } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Hero = () => {
  
  const config={
    subtitle: 'As a React Developer.'
  }
  return (
    <section id='Hero' className='flex flex-col text-white md:flex-row px-5 py-32 bg-black justify-center'>
      <div className='w-1/2 flex flex-col font-sans'>
        <h1 className='text-5xl'>Hello,<br />I'm Mohanapriya,<br />
          <span className='text-2xl text-pink-400'>{config.subtitle}</span>
        </h1>
        <div className='flex py-10'>
          <a href='https://www.instagram.com/___moni_21?igsh=aDIzdDRseDN0eWx2' className='pr-5  hover:text-pink-800'><FaInstagram size={40} /></a>
          <a href='https://www.linkedin.com/in/mohanapriya200421' className='pr-5 hover:text-pink-800'><FaLinkedinIn size={40} /></a>
        </div>
      </div>
      <div className='w-1/2 md:w-1/4'>
        <img src={pic} className=' h-auto rounded-4xl border-2 border-red-300' />
      </div>
    </section>
  )
}

export default Hero
