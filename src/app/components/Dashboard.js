'use client'
import AboutMe from "./Selections/AboutMe";
import ProjectsPage from "./Selections/ProjectsPage/ProjectsPage";

const Dashboard = ({selection}) => {
  console.log(selection);

  return (
    <section className='flex flex-col justify-center items-center bg-scroll h-full w-3/4 border-2 bg-slate-400/75 overflow-y-scroll'>
      <AboutMe />
      <ProjectsPage/>
    </section>
  )
}

export default Dashboard;