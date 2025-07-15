import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">HOME</h1> 
      <FontAwesomeIcon icon="fa-solid fa-house" className="text-5xl"/>
    </main>
  )
}