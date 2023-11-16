import AboutMe from "./Selections/AboutMe";
import ProjectsPage from "./Selections/ProjectsPage/ProjectsPage";
import Contact from "./Selections/Contact"
import Welcome from './Selections/Welcome'
// import { motion } from "framer-motion";

const Dashboard = () => {

  return (
    <section className='flex flex-col bg-scroll overflow-y-scroll'>
      <Welcome/>
      <AboutMe />
      <ProjectsPage/>
      <Contact />
    </section>
  )
}

export default Dashboard;