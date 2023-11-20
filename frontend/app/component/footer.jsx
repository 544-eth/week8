import React from 'react'

export default function footer() {
  return (
    <footer className='bg-[blue] flex items-center justify-center h-[200]'>
        <p>&copy; Univelcity {new Date().getFullYear()}</p>
    </footer>
  )
}
