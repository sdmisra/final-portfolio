import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section 
    className='h-auto flex w-full justify-center bg-slate-700/25 my-12 py-6 rounded drop-shadow-md'
    >
      <h1 id='contact' className="m-6 bg-slate-100 rounded p-2">
        Have a project that needs another pair of hands on the keyboard? 
      </h1>
    </motion.section>
  )
}

export default Contact;