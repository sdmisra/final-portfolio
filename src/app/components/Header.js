'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = ()=> {
  const pathname = usePathname();

  useEffect(()=> {
    console.log(pathname)
  })

  return (
    <motion.header 
    className='sticky top-0 w-full bg-slate-300/25 border-b-2 border-emerald-900/25'
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{
      delay: 1,
      type: 'tween',
      duration: 7
    }}
    >
      <div className='flex justify-evenly pt-2 '>
        <a className='h-8 ' href='#welcome' >
          Home
        </a>
        <a className='h-8 ' href='#aboutme' >
          About Me
        </a>
        <a className='h-8 ' href='#projects' >
          Projects
        </a>
        <a className='h-8 ' href='#contact' >
          Contact
        </a>
      </div>
    </motion.header>
  )
}

export default Header;