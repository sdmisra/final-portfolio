'use client'
import AboutMe from "./Selections/AboutMe";
import ProjectsPage from "./Selections/ProjectsPage/ProjectsPage";
import Contact from "./Selections/Contact"
import Welcome from './Selections/Welcome'

const Dashboard = ({selection}) => {
  console.log(selection);

  return (
    <section className='flex flex-col bg-scroll border-2 overflow-y-scroll'>
      <Welcome/>
      <AboutMe />
      <ProjectsPage/>
      <Contact />
    </section>
  )
}

export default Dashboard;