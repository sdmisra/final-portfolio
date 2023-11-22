import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='sticky bottom-0 h-6 md:h-8 my-8 w-4/5 md:w-2/5 border-y-4 bg-slate-200/90 border-emerald-900/50 rounded-lg md:rounded-full hover:bg-slate-100/90'>
      <h2 className='absolute -top-8 -left-8 md:-top-8 md:-left-16 text-sm md:text-base text-slate-100/75'>Deployed Project Links:</h2>
      <motion.div className='flex justify-evenly items-center text-xs md:text-base'>
        <motion.a href='https://avian-anthems.vercel.app' 
        whileHover={{scale: 1.15, transition: { duration: 1.15 },}}
        whileTap={{ opacity: 1, scale: .85 }}
        className='footer-link border-x-2 md:border-x-4 border-emerald-900/25 px-1' 
        target="_blank" 
        rel="noreferrer noopener">
          Avian Anthems
        </motion.a>
        <motion.a href='https://mars-chronicles.vercel.app'
        whileHover={{scale: 1.15, transition: { duration: 1.15 },}}
        whileTap={{ opacity: 1, scale: .85 }} 
        className='footer-link border-x-2 md:border-x-4 border-emerald-900/25 px-1' 
        target="_blank" 
        rel="noreferrer noopener">
          Mars Chronicles 
        </motion.a>
        <motion.a href='https://hyper-loom-explorer.vercel.app'
        whileHover={{scale: 1.15, transition: { duration: 1.15 },}}
        whileTap={{ opacity: 1, scale: .85 }} 
        className='footer-link border-x-2 md:border-x-4 border-emerald-900/25 px-1' 
        target="_blank"
        rel="noreferrer noopener">
          Hyper Loom
        </motion.a>
      </motion.div>
    </footer>
  )
}
export default Footer