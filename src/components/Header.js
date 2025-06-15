import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
   <header className="flex flex-col justify-between bg-gray-200 text-center pt-2">
        <h1 className="text-5xl">&#10022; LE MONDE DU CINEMA &#10022;</h1>
    </header>
    <Navbar/>
    </>
  )
}

export default Header