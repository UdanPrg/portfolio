import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-(--main-height) bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Home Page</h1>
      <p className="text-gray-700 text-justify">
        This is the home page of the application where you can find various
        features and functionalities.
        lorem*50
      </p>
      <div className="mt-4">
        <FontAwesomeIcon
          icon="fa-solid fa-home"
          className="text-3xl text-blue-500"
        />
      </div>
    </div>
  );
}
