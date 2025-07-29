import Image from 'next/image'
import React from 'react'

export default function LostCard({item}) {
  
  return (
     <div className='text-xl h-90 w-full bg-white rounded-lg relative'>
        <span className="bg-red-400 px-2 py-1 text-center w-15 rounded-md text-xs font-medium absolute top-3 right-4">{item.status}</span>
        <Image src={'/temp.jpg'}  height={160} width={380} alt="item_image" className="rounded-t-md min-w-full" />
       <div className="px-4 h-[30%] flex flex-col justify-center">
      <h2>Item: {item.name}</h2>
      <p>Description: {item.description}</p>
      <span>Location: {item.location}</span>
      </div>
    </div>
  )
}
