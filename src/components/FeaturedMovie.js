'use client'

import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import Link from 'next/link'

const FeaturedMovie = ({movies}) => {

    const FeaturedMovie = movies[0];

  return (
    <div className=''>
      <div>
        <Image
                            src={("https://image.tmdb.org/t/p/original/" + FeaturedMovie.poster_path)}
                            alt={`${FeaturedMovie.title} Poster`}
                            width={200}
                            height={200}
                        />
                        <div className='px-5 flex flex-col'>
                          <h3 className='text-1xl text-left mb-2.5 bg-gray-400 border-l-6  border-double'>&#10170; {FeaturedMovie.title}</h3>
                          <p className='italic text-justify first-letter:text-3xl'>{FeaturedMovie.overview}</p>
                          <Link href={`/movie/${FeaturedMovie.id}`} className='w-fit p-2 text-center bg-black text-white m-auto mt-10'><span className='border-white border-1 px-13 py-1'>Learn More...</span></Link>
                        </div>
      </div>
    </div>
  )
}

export default FeaturedMovie