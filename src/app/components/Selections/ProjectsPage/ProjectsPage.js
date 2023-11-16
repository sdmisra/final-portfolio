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
    <section className="my-40">
    <motion.section className='flex flex-col justify-center items-center  h-auto w-full bg-slate-700/50 my-12 py-6 backdrop-blur-sm rounded drop-shadow-md' id='projects'
    initial={{opacity:0 }}
    whileInView={{opacity: 1, border: '1px slategrey solid'}}
    transition={{
      delay: 1,
      type: 'tween',
      duration: 3
    }}>
    <div className='flex justify-evenly w-full'>
      <ProjectCard project={projects['anthems']} select={()=>selectProject('anthems')}/>
      <ProjectCard project={projects['chronicles']} select={()=>{selectProject('chronicles')}}/>
      <ProjectCard project={projects['hyperloom']} select={()=>{selectProject('hyperloom')}}/>
    </div>
      {!selectedProject ? <h1 className="border-2 bg-slate-400/50 border-slate-100/25 rounded drop-shadow p-2 mt-6">Please choose a project above for details!</h1> : 
    <motion.section 
      className='flex flex-col items-center w-full max-h-[1500px]'
      initial={{ opacity: 0, y: 50}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 2 }}
    >
      <Image 
      src={projects[selectedProject].previewImg} 
      alt={selectedProject} 
      className='w-2/3 aspect-video rounded mb-4'
      quality={60}>
      </Image>
      </motion.section>}
      {selectedProject && <ProjectDetails project={projects[selectedProject]}/>}
    </motion.section>
    </section>
  )
}

export default ProjectsPage;