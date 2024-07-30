// import './NavTab.css';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="flex flex-col md:flex-row md:space-x-4 border-b border-outerSpace bg-gunmetal p-2">
      <li className="nav-item">
        <Link
          to="/"
          className={`px-4 py-2 ${currentPage === '/' ? 'text-white bg-hunterGreen' : 'text-whiteSmoke'}`}
          aria-current={currentPage === '/' ? 'page' : undefined}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={`px-4 py-2 ${currentPage === '/profile' ? 'text-white bg-hunterGreen' : 'text-whiteSmoke'}`}
          aria-current={currentPage === '/profile' ? 'page' : undefined}
        >
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/feed"
          className={`px-4 py-2 ${currentPage === '/feed' ? 'text-white bg-hunterGreen' : 'text-whiteSmoke'}`}
          aria-current={currentPage === '/feed' ? 'page' : undefined}
        >
          Feed
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/signup"
          className={`px-4 py-2 rounded ${currentPage === '/signup' ? 'text-white bg-hunterGreen' : 'text-eerieBlack border border-outerSpace bg-whiteSmoke transition hover:bg-rojo hover:text-gray-700 focus:outline-none focus:ring focus:ring-hunterGreen'}`}
          aria-current={currentPage === '/signup' ? 'page' : undefined}
        >
          Sign up
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={`px-4 py-2 rounded ${currentPage === '/login' ? 'text-white bg-hunterGreen' : 'text-eerieBlack bg-vermillion transition hover:bg-rojo focus:outline-none focus:ring focus:ring-hunterGreen'}`}
          aria-current={currentPage === '/login' ? 'page' : undefined}
        >
          Sign in
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;