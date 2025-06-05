import React from 'react'
import MovieCard from './MovieCard'

const MovieGrid = () => {
  return (
    <div className='grid grid-cols-12 gap-10'>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
    </div>
  )
}

export default MovieGrid