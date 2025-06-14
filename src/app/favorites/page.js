//No se puede ir a favorites tipeando la URL, se rrecarga yse pierde el esstado. HAY QUE USAR LIIIIIIIINK

//Armar parte de favoritos desde tanto la card como el grid original que se añada de favoritos

//Solo se puede agregar una vez, find dentro del array si ya esta esa movie
//Si ya esta, no hacer nada
//PARA REMOVER, handleRemoveFavorites, recibir un id, buscar en array de favs si se halla
//Filter -> devolver todas las peliculas MENOS la del id encontrado
//Grilla de peliculas, tiene que estar el boton de quitar/añadir favoritos

//AL MENOS HACERLA WACHINA

'use client'

import React from 'react'
import FavoritesContainer from '@/components/FavoritesContainer'
import { useAppContext } from '@/contexts/AppContext'

const Favorites = () => {

  const {favoritesQty} = useAppContext();

  return (
    <div className='fave_container lg:w-[50em] m-auto pb-5'>
      <h2 className='text-3xl border-b-2 text-center'>&#10022; Your Favorites &#10022; ({favoritesQty()})</h2>
      <FavoritesContainer/>
    </div>
  )
}

export default Favorites