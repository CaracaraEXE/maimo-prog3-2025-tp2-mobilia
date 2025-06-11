'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MovieGrid = ({movies}) => {

  //eventos sinteticos, onclick, onhover, onmouse

  const handleClick = (numero) => {
    alert(numero);
  }

  return (
    <div className='grid grid-cols-12 px-5 divide-y-2 '>
      {movies.map((movie) =>
      <div key={movie.id} className='col-span-3 border-black p-5 border-dotted' onClick={() => handleClick(movie.id)}>
        <h3 className='text-[1em]'>{movie.title}</h3>
        <Image
          src={("https://image.tmdb.org/t/p/original/" + movie.poster_path)}
          alt={`${movie.title} Poster`}
          width={200}
          height={200}
          className='mb-2.5'
      />
        <Link href={`/movie/${movie.id}`} className='w-full p-2 text-center bg-black text-white block'><span className='border-white border-1 px-13 py-1'>Info</span></Link>
        </div>
      )}
        
    </div>
  )
}

export default MovieGrid