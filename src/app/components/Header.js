'use client'
import React from 'react'
import { motion } from 'framer-motion';

const Header = ({setSelection})=> {
  return (
    <motion.header 
    className='sticky top-0 w-full border-b-4 bg-slate-200'
    initial={{opacity:0, "border-bottom-width": "0px" }}
    whileInView={{opacity: 1}}
    transition={{
      delay: 1,
      type: 'tween',
      duration: 3
    }}
    >
      <div className='flex justify-evenly pt-2'>
        <a className='h-8' href='#welcome' >
          Home
        </a>
        <a className='h-8' href='#aboutme' >
          About Me
        </a>
        <a className='h-8' href='#projects' >
          Projects
        </a>
        <a className='h-8' href='#contact' >
          Contact
        </a>
      </div>
    </motion.header>
  )
}

export default Header;