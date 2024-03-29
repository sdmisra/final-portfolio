import 'devicon';
import { motion } from 'framer-motion'

const ProjectDetails = ({project}) => {
  const {tech, abstract, link, github} = project

  const projectStack = tech.map((item, index)=>{
    if (item === 'html5' || item === 'css3' || item === 'python' || item === 'django') {
    return (
      <i className={`devicon-${item}-plain-wordmark icon`} key={index} alt={tech[index]} title={tech[index]}></i>
    )}
    if (item === 'react') {
    return (
      <i className={`devicon-${item}-original-wordmark icon`} key={index} alt={tech[index]} title={tech[index]}></i>
      )}
    return (
      <i className={`devicon-${item}-plain icon`} key={index} alt={tech[index]} title={tech[index]}></i>
  )
  })

  return (
      <div className='flex flex-col items-center text-teal-950'>
        <h1 className='text-base md:text-2xl bg-slate-300/90 rounded drop-shadow-md p-1 md:p-2 my-2'>Abstract:</h1>
        <p className='flex flex-col bg-slate-200/80 text-xs md:text-lg indent-6 w-[90vw] md:w-2/3 justify-center px-4 py-2 m-4 rounded-lg drop-shadow-lg'>{abstract}</p>
        <h3 className='underline text-slate-100/75'>Tech Stack Used:</h3>
        <motion.span 
        className='flex w-4/5 md:w-3/5 justify-between mx-2 my-2 md:my-4 p-2 text-4xl md:text-6xl rounded-lg bg-slate-100/60'>
          {projectStack}
        </motion.span>
        <span className="flex justify-evenly w-2/3 md:w-1/3 text-sm md:text-xl p-2 text-slate-100/75">
          <a href={link} className="text-teal-900 p-1 bg-slate-300/75 hover:border-slate-500 hover:bg-slate-200/75 rounded-lg">Deployed App</a>
          <a href={github} className="text-teal-900 p-1 bg-slate-300/75 hover:border-slate-500 hover:bg-slate-200/75  rounded-lg">GitHub Repo</a>
        </span>
      </div>
  )
}

export default ProjectDetails;