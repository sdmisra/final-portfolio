import { Signika } from 'next/font/google'
import HeroImage from './components/HeroImage'
import './globals.css'

const signika = Signika({
  subsets: ["latin-ext"],
  display: 'swap',
});


export const metadata = {
  title: 'Shane Misra',
  description: 'This is my professional portfolio! It has examples of my work so far in the industry.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${signika.className}`}>
        <HeroImage />
        {children}
      </body>
    </html>
  )
}