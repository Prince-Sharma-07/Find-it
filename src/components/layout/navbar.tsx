import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className='h-16 bg-[#020817] text-white flex items-center justify-between px-8 border-b-border-secondary border-b'>
      <Link href="/" className="flex items-center gap-2">
      <span className='p-2 bg-green-400 rounded-2xl'><Search /></span>
      <h1 className='text-xl font-bold'>Find It</h1>
      </Link>

      <nav className='flex justify-center '>
        <ul className='flex items-center gap-4'>
          <li>
            <Link href="/" className='text-white hover:text-green-400'>Search</Link>
          </li>
          <li>
            <Link href="/about" className='text-white hover:text-green-400'>About</Link>
          </li>
          <li>
            <Link href="/contact" className='text-white hover:text-green-400'>Contact</Link>
          </li>
          <li>
            <Link href="/search" className='text-white hover:text-green-400'>Search</Link>
          </li>
        </ul>
      </nav>

        
        <div className='flex items-center gap-4'>
            <Link href="/login" className='text-white hover:text-green-400'>Login</Link>
            <Link href="/signup" className='text-white hover:text-green-400'>Get Started</Link>
        </div>
    </header>
  )
}
