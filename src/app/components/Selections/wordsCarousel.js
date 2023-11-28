'use client'
import {useState, useEffect} from 'react';
import wordsArray from '@/app/assets/wordsArray'
import { motion } from 'framer-motion'

const WordsCarousel = () => {
  let [Index, setIndex] = useState(0)

  const wordsOfSupport = wordsArray.recommendations.map((element, index)=> {
    return (
      <motion.p className="text-xs m-2 md:mt-8 py-2 md:py-4 p-1 md:p-2 bg-slate-200/90 rounded-lg md:text-lg"
      key={`feedback-${index}`}
      initial={{opacity: 1.25}}
      viewport={{ once: true }}
      whileInView={{opacity: .25}}
      transition={{
        delay: 8,
        type: 'tween',
        duration: 16
      }}>
        {element}
      </motion.p>
    )
  })

  const increaseIndex = () => {
    Index === 4 ? setIndex(0) : setIndex(Index + 1)
  }

  const decreaseIndex = () => {
    Index === 0 ? setIndex(4) : setIndex(Index - 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if(Index === 4) {
        setIndex(0)
      } else {
        setIndex(Index + 1)
      }
    }, 24000)
    return ()=> clearTimeout(timer)
  }, [Index])

  return (
    <>
    <div className="flex flex-col justify-center items-center mx-4 py-4"> 
      <h1 className="absolute top-0 left-0 items-center m-2 p-1 text-xs md:p-4 md:text-xl text-slate-200/90 drop-shadow-md md:pb-2 md:mb-6">Kind words from colleagues:</h1>
      {wordsOfSupport[Index]}
    </div>
    <span className="md:absolute md:bottom-0 flex justify-evenly h-14 w-2/3 text-5xl text-slate-200/80 drop-shadow-xl">
      <motion.button onClick={()=> {decreaseIndex()}}
      whileHover={{scale: 1.15, transition: { duration: 1.15 },}}
      whileTap={{ opacity: 1, scale: 1.35 }}
      >{`<`}
      </motion.button>
      <motion.button onClick={()=> {increaseIndex()}}
      whileHover={{scale: 1.15, transition: { duration: 1.15 },}}
      whileTap={{ opacity: 1, scale: 1.35 }}
      >{`>`}
      </motion.button>
    </span>
    </>
  )
}

export default WordsCarousel;