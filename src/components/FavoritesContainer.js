'use client'

import { useAppContext } from '@/contexts/AppContext'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FavoritesContainer = () => {
  
  const {favorites} = useAppContext();
  
  return (
    <div className='grid grid-cols-12 px-5 divide-y-2 divide-dotted'>
      {favorites.map((movie) => 
      <div key={movie.id} className='col-span-3 border-black p-5'>
        <h3>{movie.title}</h3>
        <Image
                  src={("https://image.tmdb.org/t/p/original/" + movie.image)}
                  alt={`${movie.title} Poster`}
                  width={200}
                  height={200}
                  className='mb-2.5'
              />
        <Link href={`/`} className='text-[0.85em] text-center bg-black text-white lg:block'><span className='border-white border-2 py-0.5 border-dotted'>Remove from Favorites</span></Link>
      </div>)}
    </div>
  )
}

export default FavoritesContainer