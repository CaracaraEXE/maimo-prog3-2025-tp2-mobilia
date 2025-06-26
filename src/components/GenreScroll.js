import React from 'react'
import { useAppContext } from '@/contexts/AppContext'
import Link from 'next/link'
import Image from 'next/image'

const GenreScroll = ({movies, gentitle}) => {
      const {handleAddToFavorites, favorites, handleRemoveFromFavorites} = useAppContext()
  
  
      return (
    <section className='border-t-0 border-y-2' id={gentitle}>
      <div className='flex justify-between text-3xl  bg-gray-400 border-l-6 border-double mx-5 px-5 py-1 mt-5'>
        <h2 className=''>&#10045; {gentitle}</h2>
        <Link href="/genres#main" className='bg-black text-white px-2'>&#129029;</Link>
      </div>  
        <div className='genre_scroll flex overflow-x-scroll overflow-y-hidden mb-5 px-5'>
        {
        movies.map((movie) => (
            <div key={movie.id} className='border-black p-5'>
            <h3 className='text-[1.25em] lg:min-w-10 min-w-30 min-h-20 leading-4.5 pb-2.5 flex items-end justify-center text-center mt-[-0.75em]'>{movie.title}</h3>
          <button className='p-2 text-center bg-black text-white relative left-20 lg:left-26 transition-colors hover:bg-gray-600'
            onClick={() => 
              favorites.find(fave => (fave.id === movie.id)) ?
              handleRemoveFromFavorites(movie.title,movie.poster_path,movie.id)
              :
              handleAddToFavorites(movie.title,movie.poster_path,movie.id)}
              
                >   
                      {
                        favorites.find(fave => (fave.id === movie.id)) ?
                          <Image
                              src={"/assets/removeheart.png"}
                              alt='Remove'
                              height={20}
                              width={20}
                          />
                          : 
                           <Image
                              src={"/assets/addheart.png"}
                              alt='Remove'
                              height={20}
                              width={20}
                          />
                      }
                </button>
          <Image
            src={("https://image.tmdb.org/t/p/original/" + movie.poster_path)}
            alt={`${movie.title} Poster`}
            width={150}
            height={150}
            className='mt-[-2.5em] mx-auto'
        />
 
        <Link href={`/movie/${movie.id}`} className='p-2 text-center bg-black text-white block mt-1'><span className='border-white border-2 px-9 lg:px-12 py-1 border-dotted'>Info</span></Link>
         
        </div>
        ))}
        </div>
    </section>
  )
}

export default GenreScroll