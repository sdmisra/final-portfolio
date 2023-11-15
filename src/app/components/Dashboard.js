'use client'

import React, {useState} from 'react'
import Image from 'next/image'

const Dashboard = () => {
  const [selection, setSelection] = useState('');


  return (
    <section className='flex -z4 absolute inset-0 justify-center items-center'>
      This is the main content wrapper
    </section>
  )
}

export default Dashboard;