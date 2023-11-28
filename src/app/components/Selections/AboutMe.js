'use client'
import React from 'react'
import 'devicon';
import {motion} from 'framer-motion';
import Link from 'next/link'
import Image from 'next/image'
import WordsCarousel from './wordsCarousel';
import resumeIcon from '/public/resume-icon.png'

const AboutMe = () => {

  return (
    <section className="flex flex-col items-center mt-20 md:mt-40 mb-8 md:mb-20 pt-8" id='aboutme'>
      <motion.div className='sm:hidden md:block sticky top-24 w-full h-32 md:h-48 z-10'
      initial={{opacity: 0, x: -35 }}
      whileInView={{opacity: 1, x: 0 }}
      transition={{
        delay: .25,
        type: 'tween',
        duration: .85
      }}>
        <h2 className="w-1/4 md:w-[12%] text-base md:text-2xl text-slate-300 bg-slate-800/80 backdrop-blur-sm border-x border-x-slate-300 rounded drop-shadow-lg p-1 md:p-2 my-2 ml-2">About Me:</h2>
      </motion.div>
    <motion.section className='flex flex-col md:flex-row justify-evenly items-center bg-slate-700/20 my-12 w-[95vw] md:w-4/5 py-6 p-1 md:p-6 md:rounded-[6rem] drop-shadow'
    initial={{opacity:0 }}
    whileInView={{opacity: 1}}
    viewport={{ once: true }}
    transition={{
      delay: .45,
      type: 'tween',
      duration: 1.65
    }}>
    <div className='h-auto w-full md:w-2/5 my-2 md:my-4 text-sm md:text-base flex flex-col justify-center items-center text-emerald-950'>
      <motion.p
        className='w-[95%] m-2 bg-slate-200/90  rounded p-2'
        initial={{ opacity: 0, y: -35 }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ delay: .85, duration: 1.25 }}
       >
      Most recently, my career centered around speciality cheeses in a high volume retail setting. It was challenging work throughout the holidays and the COVID19 pandemic particularly, but I find those experiences have helped me to anticipate the needs of the end user of my software in very practical ways.
      </motion.p>
      <motion.p
        className='m-2 bg-slate-200/90 rounded p-2'
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ delay: 1, duration: 1.25 }}
       >
      I find I thrive in collaborative environments in which I can ask questions, reach out for perspective and context, and learn from every mistake to grow steadily.
      </motion.p>
      <motion.p className='m-2 bg-slate-200/90 rounded p-2'
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ delay: 1.25, duration: 1.5 }}
      >
      Please do not hestitate to reach out if you are looking for a software developer for projects and opportunities large or small. 
      </motion.p>
      <motion.span className="w-2/3 flex justify-evenly items-center"
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          delay: 2,
          type: 'tween',
          duration: 1.5 }}
      >
        <Link href="https://www.linkedin.com/in/shanemisra/" target="_blank" rel="noreferrer noopener" className="text-6xl">
          <motion.div whileHover={{ scale: 1.1 }}transition={{ type: "spring", stiffness: 250, damping: 10 }}>
            <i className="devicon-linkedin-plain bg-slate-200/75" title="My LinkedIn"></i>
          </motion.div>
        </Link>
        <Link href="/ShaneMisra.pdf"className="">
          <motion.div whileHover={{ scale: 1.1 }}transition={{ type: "spring", stiffness: 250, damping: 10 }} className="flex flex-col items-center">
            <Image src={resumeIcon} alt="a link to my resume as a PDF file" height={60} title="My Resume"/>
            <h4 className="px-1 text-slate-100/50 bg-emerald-950/75 rounded">Resume</h4>
          </motion.div>
        </Link>
        <Link href="https://github.com/sdmisra" target="_blank" rel="noreferrer noopener" className="text-6xl">
          <motion.div whileHover={{ scale: 1.1 }}transition={{ type: "spring", stiffness: 250, damping: 10 }}>
            <i className="devicon-github-original bg-slate-200/75 rounded-full" title="My GitHub"></i>
          </motion.div>
        </Link>
      </motion.span>
    </div>
      <motion.div 
      className='flex flex-col pt-4 justify-center items-center w-[90vw] md:w-1/2 bg-slate-800/80 rounded-[2.5rem] drop-shadow-md md:min-h-full'
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0, }}
      transition={{ delay: 3, duration: 2.5 }}>
      <WordsCarousel />
      </motion.div>
    </motion.section>
    </section>
  )
}

export default AboutMe;