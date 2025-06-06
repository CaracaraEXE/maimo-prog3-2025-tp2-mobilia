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
    <div className='grid grid-cols-12 gap-10 px-25'>
      {movies.map((movie) =>
      <div key={movie.id} className='col-span-3' onClick={() => handleClick(movie.id)}>
        <h2>{movie.title}</h2>
        <Image
          src={("https://image.tmdb.org/t/p/original/" + movie.poster_path)}
          alt={`${movie.title} Poster`}
          width={300}
          height={300}
      />
        <Link href={`/movie/${movie.id}`} className='w-full text-center bg-amber-800 text-white block'>Info</Link>
        </div>
      )}
        
    </div>
  )
}

export default MovieGrid