'use client'

import React from 'react'
import axios from 'axios'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import LoadingIcon from './LoadingIcon';
import { useAppContext } from '@/contexts/AppContext';

const MovieContainer = ({id}) => {

    const [movieData,setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

      const {handleAddToFavorites, handleRemoveFromFavorites,favorites} = useAppContext();

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
    <div className='movie_container lg:w-[50em] m-auto py-5'>
        {!loading &&
        <>
            <div className='flex justify-center'>
                <Link href={"/"} className='p-2 px-4 bg-black text-white inline-block'><span className='border-white border-1 px-5 py-1'>Return</span></Link>
            </div>

            <div className='flex m-5'>
                <Image
                    src={("https://image.tmdb.org/t/p/original/" + movieData.poster_path)}
                    alt={`${movieData.title} Poster`}
                    width={250}
                    height={200}
                />
                <div className='movie_info m-5'>
                    <h2 className="text-3xl py-1 pl-2 border-y-4 border-dotted">&#10022; {movieData.title}</h2>
                    <p className='italic py-5 text-center'>&#10077; {!movieData.tagline ? "..." : movieData.tagline } &#10078;</p>
                    <p className='mb-10 text-justify first-letter:text-3xl'>{movieData.overview}</p>
                    <p><span className='font-bold'>Release Date:</span> {movieData.release_date}</p>
                    <p><span className='font-bold'>Genres:</span> {movieData.genres.map((genre,index) => (<span key={index} > &#10022; {genre.name} </span>))}</p>
                    <p><span className='font-bold'>Runtime:</span> {parseInt(movieData.runtime / 60)} H {parseInt(movieData.runtime % 60)} M</p>            
                </div>
            </div>
            
            <div className='flex  justify-center mx-10'>
                <button className='p-2 px-4 text-center bg-black text-white inline-block ml-3.5'
            onClick={() => 
              favorites.find(fave => (fave.id === movieData.id)) ?
              handleRemoveFromFavorites(movieData.title,movieData.poster_path,movieData.id)
              :
              handleAddToFavorites(movieData.title,movieData.poster_path,movieData.id)}
              
                >
                    <span className='border-white border-2 px-5 py-1 border-dotted'>
                      {
                        favorites.find(fave => (fave.id === movieData.id)) ?
                        <span>
                          <Image
                          src={"/assets/removeheart.png"}
                          alt="remove"
                          height={20}
                          width={20}
                          className='inline mr-2'/>Remove Favorite
                          </span>
                          : 
                           <span>
                          <Image
                          src={"/assets/addheart.png"}
                          alt="remove"
                          height={20}
                          width={20}
                          className='inline'/>Favorite
                          </span>
                      }
                    </span>
                </button>
                <a className='p-2 px-4 text-center bg-black text-white inline-block ml-3.5'><span className='border-white border-2 px-5 py-1 border-dotted'>&#9974; Where to Watch It?</span></a>
                <a className='p-2 px-4 text-center bg-black text-white inline-block ml-3.5'><span className='border-white border-2 px-5 py-1 border-dotted'>&#9993; Share This Page</span></a>
            </div>
        </>
        }

        {loading && <LoadingIcon/>}

        {error && "FUK U"}
    </div>
  )
}

export default MovieContainer