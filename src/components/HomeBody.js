'use client'

import {useState, useEffect} from 'react';

import Link from 'next/link'
import React from 'react'
import axios from 'axios';
import MovieGrid from './MovieGrid';
import LoadingIcon from './LoadingIcon';
import FeaturedMovie from './FeaturedMovie';

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

  
  return (
    <div className='home_body w-[50em] h-screen overflow-scroll text-center'>
      <h2 className='text-3xl'>Featured Film</h2>
      <h2 className='text-3xl'>Recent Films</h2>
      {!loading &&

        <>
        
        <MovieGrid movies={movies} key={"moviegrid"}/>
        </>
      }
      {loading && <LoadingIcon/>}

        {error && "HUBO UN ERROR"}
    </div>
  )
}

export default HomeBody