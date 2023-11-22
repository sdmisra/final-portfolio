'use client'
import Image from 'next/image';
import profile from '/public/ShaneProfile.jpg';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <section className="flex justify-center w-full " id='welcome'>
      <motion.section 
      className='flex justify-evenly items-center bg-slate-700/50 w-4/5 py-12 my-12 px-6 rounded drop-shadow-md' 
      initial={{opacity:0}}
      viewport={{ once: true }}
      whileInView={{opacity: 1, border: '1px slategrey solid'}}
      transition={{
        delay: .35,
        type: 'tween',
        duration: 2
      }}
      >
          <Image alt='This websites creator and subject matter, Shane Misra' src={profile} className='aspect-auto rounded m-4 drop-shadow-xl w-1/3 border-2 border-slate-300/25'
        />
        <motion.div
        className="w-2/3"
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          delay: 1.75,
          type: 'tween',
          duration: 1.75 
        }}>
        <div className= "flex flex-col items-center text-emerald-950">
          <h1 className="flex justify-center text-3xl py-4 px-8 mb-8 bg-slate-200/90 border-2 border-emerald-800/75  rounded-lg">Hello!</h1>
          <motion.p className='w-4/5 my-4 bg-slate-200/90 border-2 border-emerald-800/75 rounded p-2'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ delay: 3, duration: 2.15 }}>
            Welcome to my humble portfolio - it is no exaggeration that having visitors to this page is a dream come true for me, so thank you for taking the time to check it out.
          </motion.p>
          <motion.p className="w-4/5 my-4 bg-slate-200/90 border-2 border-emerald-700/75  rounded p-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ delay: 4, duration: 2 }}>
            My work so far in this field has a foundation in Frontend technologies, with an emphasis on the React framework. I am passionate about creating applications and tools that enable their users to learn and discover more about the world around us.
          </motion.p>
          <motion.p className='w-4/5 my-4 bg-slate-200/90 border-2 border-emerald-700/75  rounded p-2'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ delay: 5, duration: 1.85 }}>
            Please keep scrolling to learn more about me and the work I have done so far as a Software Engineer!
          </motion.p>
        </div>
        </motion.div>
      </motion.section>
    </section>
  )
}
export default Welcome;