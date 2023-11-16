import { Nunito } from 'next/font/google'
import HeroImage from './components/HeroImage'
import './globals.css'

const nunito = Nunito({
  subsets: ["latin-ext"],
  display: 'swap',
  variable: '--font-poppins',
});


export const metadata = {
  title: 'Shane Misra',
  description: 'This is my professional portfolio! It has examples of my work so far in the industry.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <HeroImage />
        {children}
      </body>
    </html>
  )
}