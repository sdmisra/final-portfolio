import React from 'react'

const Footer = () => {
  return (
    <footer className='sticky bottom-0 w-full h-5.5'>
      <h4 className='flex justify-center'>Quick links to my work:</h4>
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