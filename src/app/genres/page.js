import GenreContainer from '@/components/GenreContainer.js'
import React from 'react'


const Genres = () => {
  return (
    <div className='genre_body lg:w-[50em] m-auto pb-5 min-h-lvh'>
      <h2 className='text-center text-4xl pt-2.5'>Genres</h2>
      <GenreContainer/>
    </div>
  )
}

export default Genres