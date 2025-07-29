import Link from 'next/link'
import React from 'react'
import SearchInput from '../ui/search-input'

export default function Hero() {
  return (
    <div className='flex w-full flex-col items-center bg-background-primary'>
        <div className='flex-1 flex flex-col items-center justify-center p-8 gap-8 '>
            <h1 className='text-white text-5xl font-bold'>Join Your Community Network</h1>
            <p className='text-gray-300 text-xl'>
            Connect with neighbors, help find lost items, and make your community
            stronger.
            </p>
        </div>
        <SearchInput />
        <div className='flex-1 flex items-center justify-center bg-[#020817] p-8 text-white shadow-lg w-1/2 gap-8'>
            <Link href="/lost" className='px-4 py-2 bg-gradient-to-r from-[#DC2627] to-[#DB2775] rounded-md'>Report Lost item</Link>
            <Link href="/found" className='px-4 py-2 border-[#22C55E] border rounded-md'>Report Found item</Link>
        </div>
    </div>
  )
}
