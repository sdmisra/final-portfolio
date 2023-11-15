'use client'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import {useState, useEffect} from 'react'

export default function Home() {
  const [selection, setSelection] = useState('#')
  console.log('ln 9, page.js', selection)

  useEffect(()=> {

  }, [])

  return (
    <>
    <Header setSelection={(value)=>{setSelection(value)}}/>
    <main className='flex justify-center flex-col items-center h-2/3'>
    <Dashboard selection={selection}/>
    <Footer />
    </main>
    </>
  )
}