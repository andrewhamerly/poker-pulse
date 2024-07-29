// import './NavTab.css';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={currentPage === '/profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/feed"
          className={currentPage === '/feed' ? 'nav-link active' : 'nav-link'}
        >
          Feed
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;