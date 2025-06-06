'use client'

import React from 'react'
import axios from 'axios'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const MovieContainer = ({id}) => {

    const [movieData,setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

     useEffect(() => {
        const getMovieData = async () => {
           try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8d155a452063365b70d7e38e2609b662`);
                const responseData = response.data;
                setMovieData(responseData);
                setLoading(false);
            } catch(error){
                setError(true);
            }
        } 

        getMovieData();

     },[]);

  return (
    <div>
        {!loading &&
        <>
            <Link href={"/"}>Return</Link>

            <h2>{movieData.title}</h2>
            <h3>{movieData.tagline}</h3>
            <p>{movieData.overview}</p>
            <Image
                src={("https://image.tmdb.org/t/p/original/" + movieData.poster_path)}
                alt={`${movieData.title} Poster`}
                width={200}
                height={200}
            />
            <p>Runtime: {parseInt(movieData.runtime / 60)} H {parseInt(movieData.runtime % 60)} M</p>            
        </>
        }

        {loading && "Loading..."}

        {error && "FUK U"}
    </div>
  )
}

export default MovieContainer