'use client'
import AboutMe from "./Selections/AboutMe";
import ProjectsPage from "./Selections/ProjectsPage/ProjectsPage";
import Contact from "./Selections/Contact"
import Welcome from './Selections/Welcome'

const Dashboard = ({selection}) => {
  console.log(selection);

  return (
    <section className='flex flex-col justify-center items-center bg-scroll h-full w-full border-2 bg-slate-400/75 p-20 pb-10 overflow-y-scroll'>
      <Welcome/>
      <AboutMe />
      <ProjectsPage/>
      <Contact />
    </section>
  )
}

export default Dashboard;