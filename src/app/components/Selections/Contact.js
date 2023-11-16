import Image from 'next/image'
import { motion } from 'framer-motion'
import icon from '/public/emailicon.png'

const Contact = () => {
  return (
    <motion.section 
    className='h-auto flex w-full justify-center bg-slate-700/25 my-12 py-6 rounded drop-shadow-md'
    >
    <div>
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
  )
}

export default Contact;