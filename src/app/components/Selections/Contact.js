'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import icon from '/public/emailicon.png'
import Footer from '../Footer'

const Contact = () => {
  return (
    <section className="flex flex-col items-center mt-22 md:mt-52 text-emerald-800">
    <motion.section 
    className='h-auto flex w-full justify-center mt-12 py-6 rounded drop-shadow'
    >
    <div className="bg-slate-800/25 drop-shadow-md md:rounded-[6rem] p-4">
      <h1 id='contact' className="text-xs md:text-base m-2 md:m-6 bg-slate-200 rounded p-2 border-slate-50/75">
        Have a project that needs another pair of hands on the keyboard?
      </h1>
      <motion.a href="mailto:shane.misra@gmail.com" className="flex flex-col items-center"
      whileHover={{scale: 1.05, transition: { duration: .65 },}}
      >
        <Image src={icon} alt='email button'/>
        <motion.span className="bg-slate-200 rounded p-2"
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