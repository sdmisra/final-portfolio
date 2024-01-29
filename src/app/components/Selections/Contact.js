'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import icon from '/public/EmailPost.png'
import Footer from '../Footer'

const Contact = () => {
  return (
    <section className="flex flex-col items-center mt-22 md:mt-52 text-teal-800">
    <motion.section 
    className='h-auto flex w-full justify-center mt-12 py-6 rounded'
    >
    <div className="bg-slate-800/25 drop-shadow-lg backdrop-blur-sm md:rounded-[6rem] p-4">
      <h1 id='contact' className="text-xs md:text-base m-2 md:m-6 bg-slate-200 rounded p-2 border-slate-50/75">
        Have a project that needs another pair of hands on the keyboard?
      </h1>
      <motion.a href="mailto:shane.misra@gmail.com" className="flex flex-col items-center">
        <Image className="opacity-80"src={icon} width={125} height={125} alt='email button'/>
        <motion.span className="bg-slate-200 rounded p-1"
        whileHover={{scale:1.10, transition: {duration:.50},}}
        whileTap={{ scale: 0.9 }}
        >
        Send me an email!
        </motion.span>
      </motion.a>
    </div>
    </motion.section>
    <Footer />
    </section>
  )
}

export default Contact;