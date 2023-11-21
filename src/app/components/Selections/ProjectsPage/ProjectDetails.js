import 'devicon';

const ProjectDetails = ({project}) => {
  const {tech, abstract} = project

  const projectStack = tech.map((item, index)=><i className={`devicon-${item}-plain icon`} key={index}></i>)

  return (
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl bg-slate-200/75 border-4 border-slate-100/50 rounded drop-shadow-sm p-2 my-2'>Abstract:</h1>
        <p className='flex flex-col bg-slate-200/75 rounded justify-center border-2 border-slate-100 px-4 py-2 m-4'>{abstract}</p>
        <h3 className='project-heading'>Tech Stack Used:</h3>
        <span className='flex mx-2 my-4 p-2 text-6xl bg-slate-200/75 rounded drop-shadow-lg border-2 border-slate-100'>
          {projectStack}
        </span>
      </div>
  )
}

export default ProjectDetails;