import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <ul className='flex justify-between md:flex-row bg-[blue] text-white md:h-[100px] h-screen items-center'>
            <Link href='/'>
            <li>Home</li>
            </Link>
            <Link href='/about'>
            <li>About</li>
            </Link>
            <Link href='/contact'>
            <li>Contact</li>
            </Link>
            <Link href='/course'>
            <li>Course</li>
            </Link>
        </ul>
    </nav>
  )
}
