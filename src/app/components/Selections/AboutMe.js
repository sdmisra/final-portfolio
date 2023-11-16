'use client'
import React from 'react'
import 'devicon';
import {motion} from 'framer-motion';
import Link from 'next/link'

const AboutMe = () => {
  return (
    <section className="my-40">
    <motion.section className='flex justify-between bg-slate-700/50 my-12 w-2/3 py-6 backdrop-blur-sm p-6 rounded ml-12 drop-shadow'
    initial={{opacity:0 }}
    whileInView={{opacity: 1, border: '1px slategrey solid'}}
    transition={{
      delay: 2.5,
      type: 'tween',
      duration: 2
    }}>
    <div className='h-auto w-3/5' id='aboutme'>
      <motion.p
        className='m-2 bg-slate-200/75 rounded p-2'
        initial={{ opacity: 0, y: -35 }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ delay: 4, duration: 2 }}
       >
      Most recently, my career centered around speciality cheeses in a high volume retail setting. It was challenging work throughout the holidays and the COVID19 pandemic particularly, but I find those experiences have helped me to anticipate the needs of the end user of my software in very practical ways.
      </motion.p>
      <motion.p
        className='m-2 bg-slate-200/75 rounded p-2'
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ delay: 6, duration: 2 }}
       >
      I find I thrive in collaborative environments in which I can ask questions, reach out for perspective and context, and learn from every mistake to grow steadily.
      </motion.p>
      <motion.p className='m-2 bg-slate-200/75 rounded p-2'
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ delay: 9, duration: 2 }}
      >
      Please do not hestitate to reach out if you are looking for a software developer for projects and opportunities large or small. 
      </motion.p>
      <motion.span className="w-full flex justify-center"
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          delay: 10,
          type: 'tween',
          duration: 2 }}
      >
        <Link href="https://www.linkedin.com/in/shanemisra/" target="_blank" rel="noreferrer noopener" className="text-6xl">
        <i className="devicon-linkedin-plain"></i>
        </Link>
        <Link href="https://github.com/sdmisra" target="_blank" rel="noreferrer noopener" className="text-6xl">
        <i className="devicon-github-original"></i>
        </Link>
      </motion.span>
    </div>
    <motion.div 
    className='flex justify-center w-2/5 border-b-2 border-slate-200 border-double'
    initial={{ opacity: 0, x: 150 }}
    animate={{ opacity: 1, x: 0, }}
    transition={{ delay: 12, duration: 3 }}>
    Kind words from my previous teams:
    </motion.div>
    </motion.section>
    </section>
  )
}

export default AboutMe;