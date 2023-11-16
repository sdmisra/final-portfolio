import React from 'react'
import 'devicon';
import {motion} from 'framer-motion';
import Link from 'next/link'

const AboutMe = () => {
  return (
    <motion.section className='flex justify-between bg-slate-700/50 my-12 w-2/3 py-6 backdrop-blur-sm p-6 rounded ml-12 drop-shadow'
    initial={{opacity:0 }}
    whileInView={{opacity: 1, border: '1px slategrey solid'}}
    transition={{
      delay: 1.15,
      type: 'tween',
      duration: 3
    }}>
    <div className='h-auto w-3/5' id='aboutme'>
      <p className='m-2 bg-slate-200/75 rounded p-2'>
      Most recently, my career centered around speciality cheeses in a high volume retail setting. While challenging work throughout the holidays and the COVID19 pandemic particularly, I find those experiences have helped inform my considerations of the end user of my software in very practical ways.
      </p>
      <p className='m-2 bg-slate-200/75 rounded p-2'>
      I am very eager to continue learning, and I find I thrive in a collaborative environment in which I can ask questions, reach out for perspective and context, and acknowledge my errors in a proactive way.

      Please don't hestitate to reach out if you are looking for a software developer for projects and opportunities large and small.
      </p>
      <span className="w-full flex justify-center">
        <Link href="https://www.linkedin.com/in/shanemisra/" target="_blank" rel="noreferrer noopener" className="text-6xl">
        <i className="devicon-linkedin-plain"></i>
        </Link>
        <Link href="https://github.com/sdmisra" target="_blank" rel="noreferrer noopener" className="text-6xl">
        <i className="devicon-github-original"></i>
        </Link>
      </span>
    </div>
    <motion.div 
    className='flex justify-center w-2/5 border-2'
    initial={{ opacity: 0, x: 120 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 5, duration: 1 }}>
    This is a carousel of testimonials from LinkedIn
    </motion.div>
    </motion.section>
  )
}

export default AboutMe;