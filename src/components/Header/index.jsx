import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-pf-dark-30 text-white p-4">
      <div>Portfolio</div>
      <Navbar />
    </div>
  );
}
