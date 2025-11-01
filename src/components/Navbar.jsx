import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
 const navClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : "text-gray-300 hover:text-yellow-300";

  return (
    <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-yellow-400">
        ConsultOTT Feed
      </Link>
      <div className="flex gap-6">
        <NavLink to="/posts" className={navClass}>
          Posts
        </NavLink>
        <NavLink to="/create" className={navClass}>
          Create Post
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar