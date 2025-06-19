'use client'

import React from 'react'
import FavoritesContainer from '@/components/FavoritesContainer'
import { useAppContext } from '@/contexts/AppContext'

const Favorites = () => {

  const {favoritesQty} = useAppContext();

  return (
    <div className='fave_container lg:w-[50em] m-auto pb-5'>
      <h2 className='text-3xl border-b-2 text-center pt-2'>&#10022; Your Favorites &#10022; ({favoritesQty()})</h2>
      <p className='text-center mt-2.5 italic'> &#10087; Don't refresh the page! Your favorites will go away!</p>
      <FavoritesContainer/>
    </div>
  )
}

export default Favorites