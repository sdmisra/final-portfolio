import Image from 'next/image';
import profile from '/public/ShaneProfile.jpg';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.section 
    className='flex justify-evenly bg-slate-700/25 h-full w-2/4 py-12 mt-6 ml-6 backdrop-blur-sm rounded' 
    id='welcome'
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{
      delay: 1,
      type: 'tween',
      duration: 3
    }}
    >
      <Image alt='This websites creator and subject matter, Shane Misra' src={profile} height={400} className='aspect-auto rounded'
      />
      <motion.div
      initial={{ opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{
        delay: 3,
        type: 'tween',
        duration: 2 
      }}>
      <h1>Hello and welcome!</h1>
      <p>
        Brief introductory text here:
      </p>
      </motion.div>
    </motion.section>
  )
}
export default Welcome;