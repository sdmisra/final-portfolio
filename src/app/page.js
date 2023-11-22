'use client'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

export default function Home() {

  return (
    <>
    <Header />
    <main className='flex justify-center flex-col items-center h-full'> 
    <Dashboard />
    </main>
    </>
  )
}