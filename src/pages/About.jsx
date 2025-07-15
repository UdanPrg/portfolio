import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-(--main-height) bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="text-gray-700">
        This is the about page of the application where you can find information
        about the application, its features, and the team behind it.
      </p>
      <div className="mt-4">
        <FontAwesomeIcon
          icon="fa-solid fa-info-circle"
          className="text-3xl text-blue-500"
        />
      </div>
    </div>
  );
}
