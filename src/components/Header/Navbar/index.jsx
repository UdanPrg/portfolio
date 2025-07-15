import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav>
            <ul className="flex space-x-4">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="*">Not Found</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
