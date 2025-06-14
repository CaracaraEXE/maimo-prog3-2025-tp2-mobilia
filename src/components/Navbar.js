import Link from "next/link"

const Navbar = () => {
  return (
        <nav className="bg-gray-400 border-y-2">
            <ul className="flex justify-center items-center gap-5">
                <li className=""><a href="">Return to Earth</a></li>
                <li>&#10072;</li>
                <li className=""><a href="">About Our Site</a></li>
                <li>&#10072;</li>
                <li className=""><a href="">Genres</a></li>
                <li>&#10072;</li>
                <li><Link href="/favorites">Favorites</Link></li>
            </ul>
        </nav>
  )
}

export default Navbar