'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MovieGrid = ({movies}) => {

  //eventos sinteticos, onclick, onhover, onmouse

  /*const handleClick = (numero) => {
    alert(numero);
  }*/

  return (
    <div className='grid grid-cols-12 px-5 divide-y-2 divide-dotted'>
      {movies.map((movie) =>
      <div key={movie.id} className='col-span-3 border-black p-5' /*onClick={() => handleClick(movie.id)}*/>
        <h3 className='text-[1em]'>{movie.title}</h3>
        <Image
          src={("https://image.tmdb.org/t/p/original/" + movie.poster_path)}
          alt={`${movie.title} Poster`}
          width={200}
          height={200}
          className='mb-2.5'
      />
        <Link href={`/movie/${movie.id}`} className='p-2 text-center bg-black text-white lg:block'><span className='border-white border-2 px-6 lg:px-13 py-0.5 border-dotted'>Info</span></Link>
        </div>
      )}
        
    </div>
  )
}

export default MovieGrid