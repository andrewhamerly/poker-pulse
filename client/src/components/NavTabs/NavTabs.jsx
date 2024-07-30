// import './NavTab.css';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="flex flex-col md:flex-row md:space-x-4 border-b border-outerSpace bg-gunmetal p-2">
      <li className="nav-item">
        <Link
          to="/"
          className={`px-4 py-2 ${currentPage === '/' ? 'font-bold text-xl text-white bg-hunterGreen' : 'font-bold text-xl text-whiteSmoke'}`}
          aria-current={currentPage === '/' ? 'page' : undefined}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={`px-4 py-2 ${currentPage === '/profile' ? 'font-bold text-xl text-white bg-hunterGreen' : 'font-bold text-xl text-whiteSmoke'}`}
          aria-current={currentPage === '/profile' ? 'page' : undefined}
        >
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/feed"
          className={`px-4 py-2 ${currentPage === '/schedule' ? 'font-bold text-xl text-white bg-hunterGreen' : 'font-bold text-xl text-whiteSmoke'}`}
          aria-current={currentPage === '/schedule' ? 'page' : undefined}
        >
          Schedule
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={`px-4 py-2 rounded ${currentPage === '/login' ? 'font-bold text-xl text-white bg-hunterGreen' : 'font-bold text-xl text-eerieBlack bg-whiteSmoke transition hover:bg-hunterGreen hover:text-whiteSmoke focus:outline-none focus:ring focus:ring-hunterGreen'}`}
          aria-current={currentPage === '/login' ? 'page' : undefined}
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/signup"
          className={`px-4 py-2 rounded ${currentPage === '/signup' ? 'font-bold text-xl text-white bg-hunterGreen' : 'font-bold text-xl text-white bg-hunterGreen border border-outerSpace transition hover:bg-whiteSmoke hover:text-eerieBlack focus:outline-none focus:ring focus:ring-hunterGreen'}`}
          aria-current={currentPage === '/signup' ? 'page' : undefined}
        >
          Sign Up
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;