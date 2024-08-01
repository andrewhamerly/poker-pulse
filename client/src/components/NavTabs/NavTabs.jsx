import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="flex flex-col md:flex-row md:space-x-4 border-t border-outerSpace md:border-t-0 bg-gunmetal p-2 md:p-0 md:border-0 md:bg-transparent w-full md:w-auto">
      <li className="nav-item">
        <Link
          to="/"
          className={`block px-4 py-2 ${currentPage === '/' ? 'font-bold text-xl text-white bg-hunterGreen' : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`}
          aria-current={currentPage === '/' ? 'home page' : undefined}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={`block px-4 py-2 ${currentPage === '/profile' ? 'font-bold text-xl text-white bg-hunterGreen' : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`}
          aria-current={currentPage === '/profile' ? 'profile page' : undefined}
        >
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/feed"
          className={`block px-4 py-2 ${currentPage === '/feed' ? 'font-bold text-xl text-white bg-hunterGreen' : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`}
          aria-current={currentPage === '/feed' ? 'feed page' : undefined}
        >
          Feed
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/event"
          className={`block px-4 py-2 ${currentPage === '/event' ? 'font-bold text-xl text-white bg-hunterGreen' : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`}
          aria-current={currentPage === '/event' ? 'event page' : undefined}
        >
          Event
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/schedule"
          className={`block px-4 py-2 ${currentPage === '/schedule' ? 'font-bold text-xl text-white bg-hunterGreen' : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`}
          aria-current={currentPage === '/schedule' ? 'schedule page' : undefined}
        >
          Schedule
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={`block px-4 py-2 rounded ${currentPage === '/login' ? 'font-bold text-xl text-white bg-hunterGreen' : 'font-bold text-xl text-eerieBlack bg-whiteSmoke transition hover:bg-hunterGreen hover:text-whiteSmoke focus:outline-none focus:ring focus:ring-hunterGreen'}`}
          aria-current={currentPage === '/login' ? 'login page' : undefined}
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/signup"
          className={`block px-4 py-2 rounded ${currentPage === '/signup' ? 'font-bold text-xl text-white bg-hunterGreen' : 'font-bold text-xl text-white bg-hunterGreen border border-outerSpace transition hover:bg-whiteSmoke hover:text-eerieBlack focus:outline-none focus:ring focus:ring-hunterGreen'}`}
          aria-current={currentPage === '/signup' ? 'signup page' : undefined}
        >
          Signup
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;