import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">About</h1>
      <FontAwesomeIcon icon="fa-solid fa-info-circle" className="text-5xl" />
      <p className="text-lg">Esta es la página acerca de la aplicación.</p>
      <p className="text-sm text-gray-500">Está página está aún en construcción.</p>
      <Link to="/" className="text-blue-500 hover:underline">Puedes volver al home</Link>
    </main>
  )
}
