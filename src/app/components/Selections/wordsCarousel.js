import {useState, useEffect} from 'react';
import wordsArray from '@/app/assets/wordsArray'
import { motion } from 'framer-motion'

const WordsCarousel = () => {
  const [Index, setIndex] = useState(0)

  const wordsOfSupport = wordsArray.recommendations.map((element, index)=> {
    console.log(element)
    return (
      <motion.p className="m-2 px-2 rounded-sm"
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
    <div className="flex justify-center items-center mx-4 py-4"> 
      <h1 className="absolute top-0 left-0 items-center m-2 p-4 bg-slate-300/75 rounded-sm drop-shadow-md">Words from previous teammates:</h1>
      {wordsOfSupport[Index]}
    </div>
  )
}

export default WordsCarousel;