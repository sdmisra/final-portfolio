import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroImage from './components/HeroImage'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shane Misra',
  description: 'This is my professional portfolio! It has examples of my work so far in the industry.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeroImage />
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}