'use client'

import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import Link from 'next/link'

const FeaturedMovie = ({movies}) => {

    const FeaturedMovie = movies[0];

  return (
    <div>
      <div className='flex lg:block'>
        <Image
                            src={("https://image.tmdb.org/t/p/original/" + FeaturedMovie.poster_path)}
                            alt={`${FeaturedMovie.title} Poster`}
                            width={150}
                            height={150}
                            className='m-auto my-2.5'
                        />
                        <div className='px-5 flex flex-col'>
                          <h3 className='text-2xl text-left mb-2.5 bg-gray-400 border-l-6  border-double pl-2'>{FeaturedMovie.title}</h3>
                          <p className='italic first-letter:text-3xl'>{FeaturedMovie.overview}</p>
                          <Link href={`/movie/${FeaturedMovie.id}`} className='p-2 text-center bg-black text-white m-auto mt-5'><span className='border-white border-2 p-8 py-1 border-dotted'>Learn More...</span></Link>
                        </div>
      </div>
    </div>
  )
}

export default FeaturedMovie