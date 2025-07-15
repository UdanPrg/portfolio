import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Navbar() {
  return (
    <div>
        <nav>
            {/* profesional social network icons */}
            <ul className="flex space-x-4">
                <li>
                    <a href="https://github.com/UdanPrg" target='_blank' className="text-white hover:text-gray-300 text-2xl">
                        <FontAwesomeIcon icon="fa-brands fa-github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/urielarana" target='_blank' className="text-white hover:text-gray-300 text-2xl">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}
