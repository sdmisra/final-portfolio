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
      <div className='flex flex-col items-center text-emerald-950'>
        <span className="flex justify-evenly w-1/3 text-xl p-2 text-slate-100/75">
          <a href={link} className="text-emerald-900 border-2 p-1 bg-slate-300/75 border-slate-100/25 hover:border-slate-500 hover:bg-slate-200/75 rounded-lg">Deployed App</a>
          <a href={github} className="text-emerald-900 border-2 p-1 bg-slate-300/75 border-slate-100/25 hover:border-slate-500 hover:bg-slate-200/75  rounded-lg">GitHub Repo</a>
        </span>
        <h1 className='text-4xl bg-slate-200/75 border-4 border-slate-100/50 rounded drop-shadow-sm p-2 my-2'>Abstract:</h1>
        <p className='flex flex-col text-sm indent-6 w-2/3 bg-slate-200/75 rounded justify-center border-2 border-slate-100 px-4 py-2 m-4'>{abstract}</p>
        <h3 className='project-heading text-slate-100/75 underline'>Tech Stack Used:</h3>
        <motion.span 
        className='flex w-3/5 justify-between mx-2 my-4 p-2 text-6xl bg-slate-200/75 rounded drop-shadow-lg border-2 border-slate-100'>
          {projectStack}
        </motion.span>
      </div>
  )
}

export default ProjectDetails;