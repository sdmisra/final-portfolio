'use client'
import React from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'

const Header = ()=> {
  const pathname = usePathname();
  console.log(pathname)

  return (
    <header className='sticky top-0 w-full border-b-4 bg-slate-200'>
      <div className='flex justify-evenly'>
        <button className='h-8'>
          <Link href='/' className='link'>
            Home
          </Link>
        </button>
        <button className='h-8'>
          <Link href='/projects' className='link'>
            Projects
          </Link>
        </button>
        <button className='h-8'>
          <Link href='/aboutme' className='link'>
            About Me
          </Link>
        </button>
      </div>
    </header>
  )
}

export default Header;