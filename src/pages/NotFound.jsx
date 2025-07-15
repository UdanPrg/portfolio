import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-(--main-height) bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">No encontrada</h1>
      <p className="text-gray-700 text-justify">
        La página que estás buscando no existe o ha sido movida. Por favor,
        verifica la URL o vuelve a la página de inicio.
      </p>
      <div className="mt-4">
        <FontAwesomeIcon
          icon="fa-solid fa-exclamation-triangle"
          className="text-3xl text-blue-500"
        />
      </div>
    </div>
  );
}
