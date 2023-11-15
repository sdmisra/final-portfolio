import Image from 'next/image'
import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectDetails  from './ProjectDetails'
import { useState } from 'react'
import ProjectArray  from '@/app/assets/projectArray'

const ProjectsPage = ()=> {
  const [selectedProject, setSelectedProject] = useState(null)
  const projects = ProjectArray

  const selectProject = (project) => {
    setSelectedProject(project);
  }

  return (
    <section className='border-2 flex flex-col justify-center  h-auto w-full bg-slate-500/50 my-12 py-6' id='projects'>
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
    </section>
  )
}

export default ProjectsPage;