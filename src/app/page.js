import HeroImage from './components/HeroImage'
import Dashboard from './components/Dashboard'


export default function Home() {
  return (

    <main className='flex justify-center flex-col'>
    <HeroImage />
    <Dashboard />
    </main>

  )
}