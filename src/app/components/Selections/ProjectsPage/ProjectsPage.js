import Image from 'next/image'
import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectDetails  from './ProjectDetails'
import { useState, useEffect } from 'react'
import ProjectArray  from '@/app/assets/projectArray'
import { motion } from 'framer-motion';

const ProjectsPage = ()=> {
  const projects = ProjectArray
  const [selectedProject, setSelectedProject] = useState('hyperloom');
  const nameArray = Object.keys(projects)
  let projectCards = nameArray.map((name, i)=>
  <ProjectCard project={projects[name]} select={()=>selectProject([name])} key={i}/>)

  const selectProject = (project) => {
    selectedProject === project ? setSelectedProject(null) : setSelectedProject(project);
  }

  return (
    <section className="flex flex-col justify-center items-center my-24 md:my-60 text-cyan-950" id='projects'>
    <motion.div className='sticky top-12 md:top-24 w-full h-32 md:h-48 z-10'
    initial={{opacity: 0, x: -35 }}
    whileInView={{opacity: 1, x: 0 }}
    transition={{
      delay: .25,
      type: 'tween',
      duration: .85
    }}>
      <span className="flex flex-col justify-evenly h-full m-2 md:m-4">
      <h2 className="w-[26%] md:w-[12%] text-xs md:text-2xl text-slate-300 bg-slate-800/80 backdrop-blur-sm border-x border-x-slate-300 rounded drop-shadow-lg p-1 md:p-2 my-2">Project Menu:</h2>
      {projectCards}
      </span>
    </motion.div>
    <motion.section className='flex flex-col justify-center items-center h-46 w-[95vw] md:w-[90vw] bg-slate-800/30 my-32 py-12 rounded-3xl md:rounded-[6rem] drop-shadow-sm'
    initial={{opacity: 0 }}
    whileInView={{opacity: 1 }}
    transition={{
      delay: .25,
      type: 'tween',
      duration: .85
    }}>
      {selectedProject && 
      <motion.h1 className="text-lg md:text-6xl p-2 md:p-4 md:px-8 bg-slate-100/90 rounded-sm md:rounded-full drop-shadow mt-6"
      initial={{opacity: 0, y: 75 }}
      whileInView={{opacity: 1, y: 0 }}
      transition={{
        delay: 1,
        type: 'tween',
        duration: 1.5
      }}>
      {projects[selectedProject].title}
      </motion.h1>
      }
      {!selectedProject ? <h1 className="border-2 bg-slate-100/75 border-slate-100/25 rounded drop-shadow p-2 mt-6">Please choose a project above for details!</h1> : 
    <motion.section 
      className='flex flex-col items-center max-w-[1000px] max-h-[1200px]'
      initial={{ opacity: 0, y: 50}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 2.5 }}
    >
      <motion.a 
        href={`${projects[selectedProject].link}`} target="_blank" rel="noreferrer noopener"
        className="flex justify-center mt-24 w-[92vw] md:w-[70vw]"
        initial={{opacity: .15}}
        animate={{opacity: .95}}
        >
          <Image 
          src={projects[selectedProject].previewImg} 
          alt={selectedProject} 
          className='aspect-video rounded-[2rem] mb-4'
          quality={20}>
          </Image>
      </motion.a>
      </motion.section>}
      {selectedProject && <ProjectDetails project={projects[selectedProject]}/>}
    </motion.section>
    </section>
  )
}

export default ProjectsPage