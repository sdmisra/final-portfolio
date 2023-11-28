import AboutMe from "./Selections/AboutMe";
import ProjectsPage from "./Selections/ProjectsPage/ProjectsPage";
import Contact from "./Selections/Contact"
import Welcome from './Selections/Welcome'
// import { motion } from "framer-motion";

const Dashboard = () => {

  return (
    <section className='flex flex-col bg-scroll border-l-2 border-emerald-900/25 overflow-y-scroll sm:overflow-x-hidden'>
      <Welcome/>
      <ProjectsPage/>
      <AboutMe />
      <Contact />
    </section>
  )
}

export default Dashboard;