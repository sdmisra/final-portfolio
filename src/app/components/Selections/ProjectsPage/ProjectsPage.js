import Image from 'next/image'
import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectDetails  from './ProjectDetails'
import { useState, useEffect } from 'react'
import ProjectArray  from '@/app/assets/projectArray'
import { motion } from 'framer-motion';

const ProjectsPage = ()=> {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = ProjectArray

  const selectProject = (project) => {
    selectedProject === project ? setSelectedProject(null) : setSelectedProject(project);
  }

  useEffect(()=> {
  }, [selectedProject])

  return (
    <section className=" flex justify-center my-60 text-emerald-950" id='projects'>
    <motion.section className='flex flex-col justify-center items-center h-46 w-4/5 bg-slate-700/50 my-32 py-6 rounded drop-shadow-sm'
    initial={{opacity:0 }}
    whileInView={{opacity: 1, border: '1px slategrey solid'}}
    transition={{
      delay: .25,
      type: 'tween',
      duration: .85
    }}>
    <div className='flex justify-evenly w-full'>
      <ProjectCard project={projects['anthems']} select={()=>selectProject('anthems')}/>
      <ProjectCard project={projects['chronicles']} select={()=>{selectProject('chronicles')}}/>
      <ProjectCard project={projects['hyperloom']} select={()=>{selectProject('hyperloom')}}/>
    </div>
      {!selectedProject ? <h1 className="border-2 bg-slate-100/75 border-slate-100/25 rounded drop-shadow p-2 mt-6">Please choose a project above for details!</h1> : 
    <motion.section 
      className='flex flex-col items-center max-w-[1000px] max-h-[1200px]'
      initial={{ opacity: 0, y: 50}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 2 }}
    >
      <motion.a 
        href={`${projects[selectedProject].link}`} target="_blank" rel="noreferrer noopener"
        className="flex justify-center w-3/4"
        initial={{opacity: .75}}
        whileHover={{opacity: .95 , transition: { duration: 1.65 },}}>
          <Image 
          src={projects[selectedProject].previewImg} 
          alt={selectedProject} 
          className='aspect-video rounded mb-4'
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