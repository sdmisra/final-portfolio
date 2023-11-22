import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='sticky bottom-0 h-8 pb-2 my-8 w-3/5 border-t-4 border-b-2 bg-slate-200/90 border-emerald-900/25 rounded-full hover:bg-slate-100/90'>
      <h2 className='absolute -top-8 text-slate-100/75'>Deployed Project Links:</h2>
      <motion.div className='flex justify-evenly items-center'>
        <motion.a href='https://avian-anthems.vercel.app' 
        whileHover={{scale: 1.15, transition: { duration: 1.15 },}}
        whileTap={{ opacity: 1, scale: .85 }}
        className='footer-link' 
        target="_blank" 
        rel="noreferrer noopener">
          Avian Anthems
        </motion.a>
        <motion.a href='https://mars-chronicles.vercel.app'
        whileHover={{scale: 1.15, transition: { duration: 1.15 },}}
        whileTap={{ opacity: 1, scale: .85 }} 
        className='footer-link' 
        target="_blank" 
        rel="noreferrer noopener">
          Mars Chronicles
        </motion.a>
        <motion.a href='https://hyper-loom-explorer.vercel.app'
        whileHover={{scale: 1.15, transition: { duration: 1.15 },}}
        whileTap={{ opacity: 1, scale: .85 }} 
        className='footer-link' 
        target="_blank"
        rel="noreferrer noopener">
          Hyper Loom
        </motion.a>
      </motion.div>
    </footer>
  )
}
export default Footer