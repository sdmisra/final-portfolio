import React from 'react'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 w-full h-8 border-t-4 bg-slate-200 border-slate-300'>
      <div className='flex justify-evenly'>
        <a href='https://hyper-loom-explorer.vercel.app' className='footer-link' target="_blank" rel="noreferrer noopener">
          Hyper Loom
        </a>
        <a href='https://avian-anthems.vercel.app' className='footer-link' target="_blank" rel="noreferrer noopener">
          Avian Anthems
        </a>
        <a href='https://mars-chronicles.vercel.app' className='footer-link' target="_blank" rel="noreferrer noopener">
          Mars Chronicles
        </a>
      </div>
    </footer>
  )
}
export default Footer