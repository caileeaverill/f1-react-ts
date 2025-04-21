import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center gap-4 bg-f1-warm-red p-4 text-white">
      <div>
        <h2 className="text-5xl font-bold italic">
          <Link to="/" className="">
            Fast Laps
          </Link>
        </h2>
      </div>
      <div className="flex gap-4">
        <Link to="/drivers" className="hover:text-lime-00">
          Drivers
        </Link>
        <Link to="/drivers" className="hover:text-lime-00">
          Teams
        </Link>
        <Link to="/drivers" className="hover:text-lime-00">
          Circuits
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
