'use client'

import {useState, useEffect} from 'react';

import Link from 'next/link'
import React from 'react'
import axios from 'axios';
import MovieGrid from './MovieGrid';
import LoadingIcon from './LoadingIcon';
import FeaturedMovie from './FeaturedMovie';
import Image from 'next/image';

const HomeBody = () => {

  const API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=8d155a452063365b70d7e38e2609b662';

  const [movies,setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

useEffect(() => {
const getData = async () => {
  setLoading(true);
  try {
    const response = await axios.get(API_URL);
    const moviesData = response.data.results
    setMovies(moviesData);
    setLoading(false);
    console.log(moviesData);
  } catch(error) {
    console.log("No se han podido mostrar las mubis.")
    setError(true);
  }
}

getData();

},[]);

  //BRANCHES ARE STOOPID
  return (
    <div className='home_body lg:w-[50em] text-center'>
      {!loading &&

        <>

        <p className='italic text-center p-5'>A website made for the love of art.</p>

        <Image
          src="/assets/lune.jpg"
          alt="Cover"
          width={400}
          height={400}
          className='mx-auto'/>

        <h2 className='text-3xl mt-5 border-y-2'>&#10022; Featured Film &#10022;</h2>
        <FeaturedMovie movies={movies} key={"featured_movie"}/>
        <h2 className='text-3xl border-y-2'>&#10022; Recent Films &#10022;</h2>
        <MovieGrid movies={movies} key={"moviegrid"}/>
        </>
      }
      {loading && <LoadingIcon/>}

        {error && "HUBO UN ERROR"}
    </div>
  )
}

export default HomeBody