'use client'
import React from 'react'
import Link from 'next/link'

const Header = ({setSelection})=> {
  return (
    <header className='sticky top-0 w-full border-b-4 bg-slate-200'>
      <div className='flex justify-evenly'>
        <button className='h-8' onClick={()=>{setSelection('/')}}>
          Home
        </button>
        <button className='h-8' onClick={()=>{setSelection('projects')}}>
          Projects
        </button>
        <button className='h-8' onClick={()=>{setSelection('aboutme')}}>
          About Me
        </button>
      </div>
    </header>
  )
}

export default Header;