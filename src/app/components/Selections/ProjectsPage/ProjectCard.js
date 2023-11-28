export const ProjectCard = (props) => {
  const { title } = props.project
  const selectCard = props.select

  
  return (
    <button className='w-[26%] md:w-[12%] h-1/5 drop-shadow-xl p-1 md:p-2 text-xs rounded-xl bg-slate-300/[90] cursor-pointer hover:bg-slate-200 active:bg-slate-50/100 text-emerald-950' onClick={()=>selectCard()}>
      <h2 className='text-[.5rem] md:text-base'>{title}</h2>
    </button>
  )
}

export default ProjectCard;