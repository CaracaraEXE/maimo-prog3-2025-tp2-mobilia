'use client'

import React from 'react'
import { useEffect } from 'react'

const FeaturedMovie = ({movies}) => {

    const FeaturedMovie = movies[0];

  return (
    <>
    <h3>Featured Film</h3>
    <p>{FeaturedMovie.title}</p>
    </>
  )
}

export default FeaturedMovie