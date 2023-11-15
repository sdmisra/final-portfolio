import Image from 'next/image'
import profile from '/public/ShaneProfile.jpg'

const Welcome = () => {
  return (
    <section className='flex justify-evenly border-2 bg-slate-500/50 h-full py-12' id='welcome'>
      <Image alt='This websites creator and subject matter, Shane Misra' src={profile} height={500} width='auto'/>
      <div>

      <h1>Hello and welcome!</h1>
      <p>
        Brief introductory text here:
      </p>
      </div>
    </section>
  )
}
export default Welcome;