import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='sticky bottom-0 h-12 border-t-4 bg-slate-200 border-emerald-900/25'>
      <motion.div className='flex justify-evenly items-center'>
        <a href='https://avian-anthems.vercel.app' className='footer-link' target="_blank" rel="noreferrer noopener">
          Avian Anthems
        </a>
        <a href='https://mars-chronicles.vercel.app' className='footer-link' target="_blank" rel="noreferrer noopener">
          Mars Chronicles
        </a>
        <a href='https://hyper-loom-explorer.vercel.app' className='footer-link' target="_blank" rel="noreferrer noopener">
          Hyper Loom
        </a>
      </motion.div>
    </footer>
  )
}
export default Footer