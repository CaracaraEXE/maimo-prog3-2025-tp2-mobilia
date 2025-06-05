'use client'

import {useState, useEffect} from 'react';

import React from 'react'
import axios from 'axios';
import MovieCard from './MovieCard'

const MovieGrid = () => {

const [data,setData] = useState([]);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(true);

useEffect(() => {
const getData = async () => {
  setLoading(true);
  try {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=8d155a452063365b70d7e38e2609b662')
    const responseData = response.data.results
    setData(responseData);
    setLoading(false);
    console.log(responseData);
  } catch(error) {
    console.log("No se han podido mostrar las mubis.")
    setError(true);
  }
}

getData();

},[]);

  return (
    <div className='grid grid-cols-12 gap-10'>
        {!loading &&
      data.map((movie) => (
          <MovieCard
            key={movie.id}
            name={movie.title}
            id={movie.id}
          />
        ))
        }


        {loading && "Loading..."}

        {error && "HUBO UN ERROR"}
    </div>
  )
}

export default MovieGrid