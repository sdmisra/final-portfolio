'use client'
import Image from 'next/image';
import profile from '/public/ShaneProfile.jpg';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <section className="flex justify-center w-full">
    <motion.section 
    className='flex justify-evenly items-center bg-slate-700/25 w-4/5 py-12 my-12 px-6 backdrop-blur-sm rounded drop-shadow-md' 
    id='welcome'
    initial={{opacity:0}}
    whileInView={{opacity: 1, border: '1px slategrey solid'}}
    transition={{
      delay: .75,
      type: 'tween',
      duration: 3
    }}
    >
        <Image alt='This websites creator and subject matter, Shane Misra' src={profile} className='aspect-auto rounded m-4 drop-shadow-xl w-1/3'
      />
      <motion.div
      className="w-2/3"
      initial={{ opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{
        delay: 3,
        type: 'tween',
        duration: 2 
      }}>
      <div className= "flex flex-col items-center">
        <h1 className=" flex justify-center text-4xl mb-8">Hello!</h1>
        <motion.p className='w-4/5 my-4 bg-slate-200/75 rounded p-2'
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ delay: 5, duration: 2 }}>
          Welcome to my humble portfolio - it is no exaggeration that having visitors to this page is a dream come true for me, so thank you for taking the time to check it out.
        </motion.p>
        <motion.p className="w-4/5 my-4 bg-slate-200/75 rounded p-2"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ delay: 7, duration: 3 }}>
          My work so far in this field has a foundation in Frontend technologies, with an emphasis on the React framework. I am passionate about creating applications and tools that enable their users to learn and discover more about the world around us.
        </motion.p>
        <motion.p className='w-4/5 my-4 bg-slate-200/75 rounded p-2'
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ delay: 10, duration: 2 }}>
          Please keep scrolling to learn more about me and the work I have done so far as a Software Engineer!
        </motion.p>
      </div>
      </motion.div>
    </motion.section>
    </section>
  )
}
export default Welcome;