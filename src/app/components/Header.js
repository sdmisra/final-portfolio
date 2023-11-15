'use client'
import React from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'

const Header = ()=> {
  const pathname = usePathname();
  console.log(pathname)

  return (
    <header className='sticky top-0 w-full'>
      <div className='flex justify-evenly'>
        <button className='nav-button'>
          <Link href='/' className='link'>
            Home
          </Link>
        </button>
        <button className='nav-button'>
          <Link href='/projects' className='link'>
            Projects
          </Link>
        </button>
        <button className='nav-button'>
          <Link href='/aboutme' className='link'>
            About Me
          </Link>
        </button>
      </div>
    </header>
  )
}

export default Header;