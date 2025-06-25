'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingIcon from './LoadingIcon.js'
import GenreScroll from './GenreScroll.js'


const GenreContainer = () => {

    const [genres, setGenres] = useState([]);
    const [moviesByGenre, setmoviesByGenre] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const genre_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=8d155a452063365b70d7e38e2609b662`
    const moviesByGenre_URL = (genreID) => `https://api.themoviedb.org/3/discover/movie?api_key=8d155a452063365b70d7e38e2609b662&with_genres=${genreID}`;

    useEffect(() => {
        const getGenres = async () => {
            setLoading(true);
            try{
                const genreResponse = await axios.get(genre_URL);
                const genresData = genreResponse.data.genres;
                setGenres(genresData);

                const movieRecs = genresData.map((genre) =>
                    axios.get(moviesByGenre_URL(genre.id))
                );

                const responses = await Promise.all(movieRecs);
                const newMoviesByGenre = {};
                genresData.forEach((genre,index) => {
                    newMoviesByGenre[genre.name] = responses[index].data.results;
                });

                setmoviesByGenre(newMoviesByGenre);
                setLoading(false);
            } catch (error){
                console.log("Error");
                setError(true)
            }
            
        };
        getGenres();
    }, [genre_URL])

  return (
    <div>
        {!loading &&
            genres.map((genre) => (
                <div key={genre.id}>
                    <h2 className='text-3xl  bg-gray-400 border-l-6 border-double ml-10 mr-5 pl-5'> {genre.name}</h2>
                    
                    <div className='px-2.5'>
                    <GenreScroll
                        key={genre.id}
                        title={genre.name}
                        movies={moviesByGenre[genre.name]?.slice(0,12) || []}
                    />
                    </div>
                </div>
            ))
        }
         {loading && <LoadingIcon/>}
        {error && <p>Hubo un error!</p>}
    </div>
  )
}

export default GenreContainer