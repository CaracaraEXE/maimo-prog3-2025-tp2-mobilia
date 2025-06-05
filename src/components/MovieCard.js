import React from 'react'

const MovieCard = ({title}) => {
  return (
    <div className='col-span-3'>
        <p>{title}</p>
    </div>
  )
}

export default MovieCard