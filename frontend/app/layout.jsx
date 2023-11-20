import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beginner react class',
  description: 'Frontend 6b6 class 1 on react',
  keywords: 'React, Next, JavaScript'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

       <div className='min-h-[70vh]'>

       {children}
       </div>
      <footer />
      </body>
    </html>
  )
}
