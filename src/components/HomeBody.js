import React from 'react'
import MovieGrid from './MovieGrid';
import Image from 'next/image';

const HomeBody = ({movies}) => {
  return (
    <div className='home_body lg:w-[50em] text-center'>
        <p className='italic text-center p-5'>A website for the love of art.</p>

        <Image
          src="/assets/lune.jpg"
          alt="Cover"
          width={400}
          height={400}
          className='mx-auto mb-5'/>

        <h2 className='text-3xl border-y-2'>&#10022; Recent Films &#10022;</h2>
        <MovieGrid movies={movies} key={"moviegrid"}/>
      
    </div>
  )
}

export default HomeBody