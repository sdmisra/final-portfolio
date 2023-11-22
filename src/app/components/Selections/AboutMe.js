'use client'
import React from 'react'
import 'devicon';
import {motion} from 'framer-motion';
import Link from 'next/link'
import WordsCarousel from './wordsCarousel';

const AboutMe = () => {

  return (
    <section className="flex flex-col items-center mt-40 mb-20 pt-8" id='aboutme'>
    <motion.section className='flex justify-evenly bg-slate-700/50 my-12 w-4/5 py-6 backdrop-blur-sm p-6 rounded drop-shadow'
    initial={{opacity:0 }}
    whileInView={{opacity: 1, border: '1px slategrey solid'}}
    viewport={{ once: true }}
    transition={{
      delay: .85,
      type: 'tween',
      duration: 2
    }}>
    <div className='h-auto w-2/5 flex flex-col justify-center items-center text-emerald-950'>
      <motion.p
        className='m-2 bg-slate-200/75 border-2 border-slate-300/25 rounded p-2'
        initial={{ opacity: 0, y: -35 }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ delay: 2.5, duration: 2 }}
       >
      Most recently, my career centered around speciality cheeses in a high volume retail setting. It was challenging work throughout the holidays and the COVID19 pandemic particularly, but I find those experiences have helped me to anticipate the needs of the end user of my software in very practical ways.
      </motion.p>
      <motion.p
        className='m-2 bg-slate-200/75 border-2 border-slate-300/25 rounded p-2'
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ delay: 4.5, duration: 1.5 }}
       >
      I find I thrive in collaborative environments in which I can ask questions, reach out for perspective and context, and learn from every mistake to grow steadily.
      </motion.p>
      <motion.p className='m-2 bg-slate-200/75 border-2 border-slate-300/25 rounded p-2'
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ delay: 6.5, duration: 1.5 }}
      >
      Please do not hestitate to reach out if you are looking for a software developer for projects and opportunities large or small. 
      </motion.p>
      <motion.span className="w-2/3 flex justify-evenly items-center"
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          delay: 7.5,
          type: 'tween',
          duration: 1.5 }}
      >
        <Link href="https://www.linkedin.com/in/shanemisra/" target="_blank" rel="noreferrer noopener" className="text-6xl">
          <motion.div whileHover={{ scale: 1.1 }}transition={{ type: "spring", stiffness: 250, damping: 10 }}>
            <i className="devicon-linkedin-plain bg-slate-200/75" ></i>
          </motion.div>
        </Link>
        <Link href="https://github.com/sdmisra" target="_blank" rel="noreferrer noopener" className="text-6xl">
          <motion.div whileHover={{ scale: 1.1 }}transition={{ type: "spring", stiffness: 250, damping: 10 }}>
            <i className="devicon-github-original bg-slate-200/75 rounded-full"></i>
          </motion.div>
        </Link>
      </motion.span>
    </div>
    <motion.div 
    className='flex justify-center w-2/5 border-b-2 border-slate-200 border-double bg-slate-400 rounded-sm drop-shadow-md'
    initial={{ opacity: 0, x: 150 }}
    whileInView={{ opacity: 1, x: 0, }}
    transition={{ delay: 9, duration: 3 }}>
    <WordsCarousel />
    </motion.div>
    </motion.section>
    </section>
  )
}

export default AboutMe;