import Image from 'next/image'
import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectDetails  from './ProjectDetails'
import { useState } from 'react'
import ProjectArray  from '@/app/assets/projectArray'
import { motion } from 'framer-motion';

const ProjectsPage = ()=> {
  const [selectedProject, setSelectedProject] = useState(null)
  const projects = ProjectArray

  const selectProject = (project) => {
    setSelectedProject(project);
  }

  return (
    <motion.section className='flex flex-col justify-center  h-auto w-full bg-slate-700/25 my-12 py-6 backdrop-blur-sm rounded' id='projects'
    initial={{opacity:0, "border-bottom-width": "0px" }}
    whileInView={{opacity: 1}}
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
    <section className='flex flex-col items-center w-full max-h-[1500px]'>
      {!selectedProject ? <h1>Please choose a project above for details!</h1> : 
      <Image 
      src={projects[selectedProject].previewImg} 
      alt={selectedProject} 
      className='w-2/3 aspect-video'>
      </Image>}
      {selectedProject && <ProjectDetails project={projects[selectedProject]}/>}
    </section>
    </motion.section>
  )
}

export default ProjectsPage;