'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAppContext } from '@/contexts/AppContext'

const MovieGrid = ({movies}) => {
  const {handleAddToFavorites, favorites, handleRemoveFromFavorites} = useAppContext()
  /*const handleClick = (numero) => {
    alert(numero);
  }*/

  return (
    <div className='grid grid-cols-12 px-5 divide-y-2 divide-dotted'>
      {movies.map((movie) =>
      <div key={movie.id} className='col-span-3 border-black p-5' /*onClick={() => handleClick(movie.id)}*/>
        <h3 className='text-[1em]'>{movie.title}</h3>
          <button className='p-2 text-center bg-black text-white relative lg:top-1 bottom-1 lg:left-13 left-7 transition-colors hover:bg-gray-600'
            onClick={() => 
              favorites.find(fave => (fave.id === movie.id)) ?
              handleRemoveFromFavorites(movie.title,movie.poster_path,movie.id)
              :
              handleAddToFavorites(movie.title,movie.poster_path,movie.id)}
              
                >   
                      {
                        favorites.find(fave => (fave.id === movie.id)) ?
                          <Image
                              src={"/assets/removeheart.png"}
                              alt='Remove'
                              height={20}
                              width={20}
                          />
                          : 
                           <Image
                              src={"/assets/addheart.png"}
                              alt='Remove'
                              height={20}
                              width={20}
                          />
                      }
                </button>
          <Image
            src={("https://image.tmdb.org/t/p/original/" + movie.poster_path)}
            alt={`${movie.title} Poster`}
            width={200}
            height={200}
            className='mt-[-2.5em] mx-auto'
        />
 
        <Link href={`/movie/${movie.id}`} className='p-2 text-center bg-black text-white block mt-1'><span className='border-white border-2 px-6 lg:px-12 py-0.5 border-dotted'>Info</span></Link>
         
        </div>
      )}
        
    </div>
  )
}

export default MovieGrid