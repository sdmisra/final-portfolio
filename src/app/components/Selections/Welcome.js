import Image from 'next/image';
import profile from '/public/ShaneProfile.jpg';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <section className="flex justify-center h-auto">
    <motion.section 
    className='flex justify-evenly bg-slate-700/25 h-full w-2/4 py-12 px-2 mt-8 backdrop-blur-sm rounded drop-shadow-md' 
    id='welcome'
    initial={{opacity:0}}
    whileInView={{opacity: 1, border: '1px slategrey solid'}}
    transition={{
      delay: .75,
      type: 'tween',
      duration: 3
    }}
    >
      <div className="w-1/3">
        <Image alt='This websites creator and subject matter, Shane Misra' src={profile} className='aspect-auto rounded m-4 drop-shadow-xl'
      />
      </div>
      <motion.div
      className="w-2/3"
      initial={{ opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{
        delay: 3,
        type: 'tween',
        duration: 2 
      }}>
      <h1 className="text-4xl mx-6 mb-8">Hello!</h1>
      <p className='m-6 bg-slate-200/75 rounded p-2'>
        Welcome to my humble portfolio - it is no exaggeration that having visitors to this page is a dream come true for me, so thank you for taking the time to check it out.
      </p>
      <p className="m-6 bg-slate-200/75 rounded p-2">
        My work so far in this field has a foundation in Frontend technologies, with an emphasis on the React framework. I am passionate about creating applications and tools that enable their users to learn and discover more about the world around us.
      </p>
      <p className='m-6 bg-slate-200/75 rounded p-2'>
        Please keep scrolling to learn more about me and the work I have done so far as a Software Engineer!
      </p>
      </motion.div>
    </motion.section>
    </section>
  )
}
export default Welcome;