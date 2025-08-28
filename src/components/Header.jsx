import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const [menu,setMenu]=useState(false);
    return (
        <div>
            <header className='flex justify-between px-5 p-4 bg-black text-white'>
                <p className='font-extrabold text-3xl hover:text-amber-600'>PORTFOLIO</p>
                <div className='flex items-center px-2 gap-2'>
                <a href='/Resume.pdf' className='text-center w-20 h-10 border-2 rounded-2xl hover:border-amber-600'>Resume</a>
                <nav className='hidden md:block'>
                  <ul className='flex text-xl'>
                    <li><a href='/' className='hover:text-amber-600'>Home</a></li>
                    <li><a href='#About' className='hover:text-amber-600'>About</a></li>
                    <li><a href='#Project' className='hover:text-amber-600'>Projects</a></li>
                    <li><a href='#Contact' className='hover:text-amber-600'>Contact</a></li>
                </ul>
                </nav>
                {menu && <nav className='block md:hidden '>
                  <ul onClick={()=> setMenu(!menu)}className='flex flex-col mobile-nav'>
                    <li><a href='/' className='hover:text-amber-600'>Home</a></li>
                    <li><a href='#About' className='hover:text-amber-600'>About</a></li>
                    <li><a href='#Project' className='hover:text-amber-600'>Projects</a></li>
                    <li><a href='#Contact' className='hover:text-amber-600'>Contact</a></li>
                </ul>
                </nav>}
                <button onClick={()=> setMenu(!menu) } className='block md:hidden hover:text-amber-600'><GiHamburgerMenu className='h-5 w-6'/></button>
             </div>
            </header>
            
            <hr/>
        </div>
    )
}

export default Header
