'use client'

import { useAppContext } from '@/contexts/AppContext'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FavoritesContainer = () => {
  
  const {favorites,handleAddToFavorites,handleRemoveFromFavorites} = useAppContext();
  
  return (
    <div className='grid grid-cols-12 px-5 divide-y-2 divide-dotted'>
      {favorites.map((movie) => 
      <div key={movie.id} className='col-span-3 border-black p-5'>
        <h3 className='text-[1.25em] text-center mb-[-2em]'>{movie.title}</h3>
         <button className='p-2 text-center bg-black text-white relative lg:top-11 bottom-1 lg:left-27 left-7 transition-colors hover:bg-gray-600'
                    onClick={() => 
                      handleRemoveFromFavorites(movie.title,movie.poster_path,movie.id)
                    }
                        >   
                              {
                                  <Image
                                      src={"/assets/removeheart.png"}
                                      alt='Remove'
                                      height={20}
                                      width={20}
                                  />
                              }
                        </button>
        <Image
                  src={("https://image.tmdb.org/t/p/original/" + movie.image)}
                  alt={`${movie.title} Poster`}
                  width={200}
                  height={200}
                  className='mb-2.5'
              />
              <Link href={`/movie/${movie.id}`} className='p-2 text-center bg-black text-white block mt-1'><span className='border-white border-2 px-6 lg:px-12 py-0.5 border-dotted'>Info</span></Link>
              
      </div>)}
    </div>
  )
}

export default FavoritesContainer