import { NavLink } from 'react-router-dom';
import { FaMountain } from 'react-icons/fa'; // optional icon

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2 text-xl font-bold">
        <FaMountain className="text-blue-400" />
        <span>UCIL Portal</span>
      </div>

      <div className="flex gap-6 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : 'hover:text-gray-300'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : 'hover:text-gray-300'
          }
        >
          About
        </NavLink>

        <NavLink
          to="/know-your-rights"
          className={({ isActive }) =>
            isActive ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : 'hover:text-gray-300'
          }
        >
          Know Your Rights
        </NavLink>
        <NavLink
          to="/grievance"
          className={({ isActive }) =>
            isActive ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : 'hover:text-gray-300'
          }
        >
          Grievance Form
        </NavLink>
      </div>
    </nav>
  );
}
