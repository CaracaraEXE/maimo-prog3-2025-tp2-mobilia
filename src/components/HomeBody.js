import React from 'react'
import MovieGrid from './MovieGrid'
import Link from 'next/link'

const HomeBody = () => {
  return (
    <div>
      <p>Estuve enferma toda la semana :c</p>
      <Link href={"/movie/1100988"}>Test rapido de peliculas</Link>
      <h2>Recent Films</h2>
      <MovieGrid/>
    </div>
  )
}

export default HomeBody