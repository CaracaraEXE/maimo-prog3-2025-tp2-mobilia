'use client'

import {useState, useEffect} from 'react';
import HomeBody from "@/components/HomeBody.js"
import FeaturedMovie from '@/components/FeaturedMovie';
import LoadingIcon from '@/components/LoadingIcon';
import axios from 'axios';

export default function Home() {
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
    <>
    {!loading &&
        <div className="flex mx-auto w-fit">
        <aside className='bg-gray-400 px-4 border-black border-x-4 w-[15em]'>
          <h2 className='text-2xl mt-5 border-y-2'>&#10022; Featured Film &#10022;</h2>
          <FeaturedMovie movies={movies}/>
        </aside>
        <HomeBody movies={movies}/>
        </div>
    }

    {loading && <LoadingIcon/>}

        {error && "HUBO UN ERROR"}
    </>
  );
}
