'use client'

import Link from "next/link"
import { useAppContext } from "@/contexts/AppContext"

const Navbar = () => {
  const {favoritesQty} = useAppContext();

  //<li className=""><a href="">About Our Site</a></li>
                //<li>&#10072;</li>

  return (
        <nav className="bg-gray-400 border-y-2">
            <ul className="flex justify-center items-center gap-5 text-center">
                <li className=""><Link href="/">Return to Earth</Link></li>
                <li>&#10072;</li>
                <li className=""><Link href="/genres">Genres</Link></li>
                <li>&#10072;</li>
                <li><Link href="/favorites">Favorites ({favoritesQty()})</Link></li>
            </ul>
        </nav>
  )
}

export default Navbar