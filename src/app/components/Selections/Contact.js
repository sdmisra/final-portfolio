'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import icon from '/public/emailicon.png'

const Contact = () => {
  return (
    <section className="mt-40">
    <motion.section 
    className='h-auto flex w-full justify-center my-12 py-6 rounded drop-shadow-md'
    >
    <div className="bg-slate-800/25 drop-shadow-md rounded border-2 border-slate-50/25 p-4">
      <h1 id='contact' className="m-6 bg-slate-200 rounded p-2">
        Have a project that needs another pair of hands on the keyboard?
      </h1>
      <a href="mailto:shane.misra@gmail.com" className="flex flex-col items-center">
        <Image src={icon} alt='email button'/>
        <span className="bg-slate-200 rounded p-2">
        Send me an email!
        </span>
      </a>
    </div>
    </motion.section>
    </section>
  )
}

export default Contact;