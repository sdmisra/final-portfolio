'use client'
import React from 'react'
// import { usePathname } from 'next/navigation'
// import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = ()=> {
  // const pathname = usePathname();

  return (
    <section className="absolute top-0 w-full z-10">
    <motion.header 
    className='h-8 bg-slate-200 border-b-2 border-emerald-900/25'
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{
      delay: 1,
      type: 'tween',
      duration: 4
    }}
    >
      <div className='flex justify-evenly text-md md:text-lg'>
        <motion.a className='h-2 md:h-6 text-emerald-950 hover:text-emerald-700/75'
        href='#welcome'
        whileHover={{scale: 1.15, transition: { duration: 1.15 },}}
        whileTap={{ scale: 0.9 }} 
        >Home</motion.a>
        <motion.a className='h-2 md:h-6 text-emerald-950 hover:text-emerald-700/75' 
        href='#aboutme'
        whileHover={{scale: 1.15, transition: { duration: 1.15 },}}
        whileTap={{ scale: 0.9 }} 
        >About Me</motion.a>
        <motion.a className='h-2 md:h-6 text-emerald-950 hover:text-emerald-700/75' 
        href='#projects'
        whileHover={{scale: 1.15,transition: { duration: 1.15 },}}
        whileTap={{ scale: 0.9 }} 
        >Projects</motion.a>
        <motion.a 
        className='h-2 md:h-6 text-emerald-950 hover:text-emerald-700/75' 
        href='#contact'
        whileHover={{scale: 1.15,transition: { duration: 1.15 },}}
        whileTap={{ scale: 0.9 }} 
        >Contact</motion.a>
      </div>
    </motion.header>
    </section>
  )
}

export default Header;