'use client'
import React from 'react'
import Link from 'next/link'

const Header = ({setSelection})=> {
  return (
    <header className='sticky top-0 w-full border-b-4 bg-slate-200'>
      <div className='flex justify-evenly'>
        <a className='h-8' href='#welcome'>
          Home
        </a>
        <a className='h-8' href='#projects'>
          Projects
        </a>
        <a className='h-8' href='#aboutme'>
          About Me
        </a>
        <a className='h-8' href='#contact'>
          Contact
        </a>
      </div>
    </header>
  )
}

export default Header;