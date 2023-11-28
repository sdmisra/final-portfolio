'use client'
import Image from 'next/image';
import profile from '/public/ShaneProfile.jpg';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <section className="flex justify-center w-full" id='welcome'>
      <motion.section 
      className='flex justify-evenly flex-col md:flex-row md:w-4/5 items-center bg-slate-800/20 py-6 md:py-12 my-6 md:my-24 px-0 md:px-6 rounded md:rounded-[12rem] drop-shadow-md' 
      initial={{opacity:0}}
      viewport={{ once: true }}
      whileInView={{opacity: 1}}
      transition={{
        delay: .35,
        type: 'tween',
        duration: 1.25
      }}>
        <Image alt='This websites creator and subject matter, Shane Misra' src={profile} className='aspect-auto rounded-[12rem] m-4 drop-shadow-md w-4/5 md:w-2/5' priority={true}/>
        <motion.div
        className="w-2/3"
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          delay: 1.25,
          type: 'tween',
          duration: 1.25 
        }}>
        <div className= "flex flex-col items-center text-emerald-950">
          <h1 className="flex justify-center text-3xl md:text-6xl py-4 px-8 mb-2 md:mb-8 bg-slate-200/90  rounded-lg drop-shadow-md">Hello!</h1>
          <motion.p className='w-[90vw] md:w-4/5 my-2 md:my-4 text-sm md:text-base bg-slate-200/90 rounded p-2'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ delay: 2, duration: 2.15 }}>
            Welcome to my portfolio - it was a dream of mine to get into web development, so thank you for your time while you check it out.
          </motion.p>
          <motion.p className="w-[90vw] md:w-4/5 my-2 md:my-4 text-sm md:text-base bg-slate-200/90 rounded p-2 drop-shadow-md"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ delay: 2.75, duration: 2 }}>
            My work so far in this field has a foundation in Frontend technologies, with an emphasis on the React framework. I am passionate about creating applications and tools that empower their users to grow and discover more about the world around us.
          </motion.p>
          <motion.p className='w-[90vw] md:w-4/5 my-2 md:my-4 text-sm md:text-base bg-slate-200/90 rounded p-2 drop-shadow-md'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ delay: 3.25, duration: 1.85 }}>
            Please keep scrolling to learn more about me and the work I have done so far as a Software Engineer!
          </motion.p>
        </div>
        </motion.div>
      </motion.section>
    </section>
  )
}
export default Welcome;