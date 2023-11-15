const ProjectDetails = ({project}) => {
  const {tech, abstract} = project

  // const projectStack = tech.map((item, index)=><i className={`devicon-${item}-plain icon`} key={index}></i>)

  return (
      <div className='project-details'>
        <h3 className='project-heading'>Abstract:</h3>
        <p className='project-abstract'>{abstract}</p>
        <h3 className='project-heading'>Tech Stack Used:</h3>
        {/* <span className='tech-stack'>
          {projectStack}
        </span> */}
      </div>
  )
}

export default ProjectDetails;