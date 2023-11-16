export const ProjectCard = (props) => {
  const { title, size, mod } = props.project
  const selectCard = props.select

  
  return (
    <section className='drop-shadow-md p-2 rounded bg-slate-100/50 mb-4 cursor-pointer' onClick={()=>selectCard()}>
      <div className='card-left'>
      <h2 className='card-text'>{title}</h2>
      <h3 className='card-text'>Team Size: {size}</h3>
      <h4 className='card-text'>Turing Module: {mod}</h4>
      </div>
      <div className='card-right'>
      </div>
    </section>
  )
}

export default ProjectCard;