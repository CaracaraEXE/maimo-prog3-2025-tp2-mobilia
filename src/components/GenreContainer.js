'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingIcon from './LoadingIcon.js'
import GenreScroll from './GenreScroll.js'
import Link from 'next/link.js'

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

                    <p className='italic text-center pt-2.5 text-[1.25em]'>&#128611; Quick Navigation: &#128609;</p>
        <div className='mx-10 bg-black text-white flex flex-wrap gap-2.5 justify-center py-2.5 border-2 border-dotted'>
            {genres.map((genre) => (
                <Link key={genre.id} href={`/genres/#${genre.name}`} className='h-fit'>&#10022; {genre.name}</Link>
            ))}
        </div>

        {!loading &&

            genres.map((genre) => (
                <section key={genre.id}>
                    <GenreScroll
                        key={genre.id}
                        gentitle={genre.name}
                        movies={moviesByGenre[genre.name].slice(0,12)}
                        fullroster={moviesByGenre[genre.name]}
                    />
                </section>
            ))
        }
         {loading && <LoadingIcon/>}
        {error && <p>Hubo un error!</p>}
    </div>
  )
}

export default GenreContainer