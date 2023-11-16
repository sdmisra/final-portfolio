import 'devicon';

const ProjectDetails = ({project}) => {
  const {tech, abstract} = project

  const projectStack = tech.map((item, index)=><i className={`devicon-${item}-plain icon`} key={index}></i>)

  return (
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl'>Abstract:</h1>
        <p className='project-abstract'>{abstract}</p>
        <h3 className='project-heading'>Tech Stack Used:</h3>
        <span className='text-6xl'>
          {projectStack}
        </span>
      </div>
  )
}

export default ProjectDetails;