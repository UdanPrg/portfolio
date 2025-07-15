import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" className="text-5xl text-red-500" />
      <p className="text-lg">Lo sentimos, la página que buscas no existe.</p>
      <p className="text-sm text-gray-500">Porfavor revisa la URL o regresa al home.</p>
      <Link to="/" className="text-blue-500 hover:underline">Ir al home</Link>
    </main>
  )
}
