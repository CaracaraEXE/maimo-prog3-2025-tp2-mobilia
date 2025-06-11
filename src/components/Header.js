import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
   <div className="flex flex-col justify-between mb-1 bg-gray-200 text-center pt-2">
        <h1 className="text-5xl text-red-950">&#10022; LE MONDE DU CINEMA &#10022;</h1>
    </div>
    <Navbar/>
    </>
  )
}

export default Header