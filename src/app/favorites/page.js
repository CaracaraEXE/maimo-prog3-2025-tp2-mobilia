'use client'

import React from 'react'
import FavoritesContainer from '@/components/FavoritesContainer'
import { useAppContext } from '@/contexts/AppContext'

const Favorites = () => {

  const {favoritesQty} = useAppContext();

  return (
    <div className='fave_container lg:w-[50em] m-auto pb-5 min-h-lvh'>
      <h2 className='text-3xl border-b-2 text-center pt-2'>&#10022; Your Favorites &#10022; ({favoritesQty()})</h2>
      <section>
        <FavoritesContainer/>
      </section>
    </div>
  )
}

export default Favorites