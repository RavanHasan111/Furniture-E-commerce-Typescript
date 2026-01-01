import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-red-200 px-6 py-3">
      {/* Left side - Logo or brand name */}
      <div className="text-2xl font-bold text-red-700">
        PANTO
      </div>

      {/* Right side - Navigation links */}
      <ul className="flex gap-6 text-lg">
        <li>
          <Link to={"/"} className="hover:text-red-700">Home</Link>
        </li>
        <li>
          <Link to={"/about"} className="hover:text-red-700">About</Link>
        </li>
        <li>
          <Link to={"/contact"} className="hover:text-red-700">Contact</Link>
        </li>
        <li>
          <Link to={"/faq"} className="hover:text-red-700">FAQ</Link>
        </li>
        <li>
          <Link to={"/shop"} className="hover:text-red-700">Shop</Link>
        </li>
        <li>
          <Link to={"/cart"} className="hover:text-red-700">Cart</Link>
        </li>
        <li>
          <Link to={"/registration"} className="hover:text-red-700">Sign up</Link>
        </li>
        <li>
          <Link to={"/login"} className="hover:text-red-700">Login</Link>
        </li>
        <li>
          <Link to={"/profile"} className="hover:text-red-700">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
