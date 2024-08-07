import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Poker-Pulse.svg';
import NavTabs from '../../components/NavTabs/NavTabs.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPage = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <header className="border-b border-outerSpace bg-gunmetal">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
          <Link
            to="/"
            className={`block px-4 py-2 ${currentPage === '/' ? 'font-bold text-xl text-white rounded' : 'font-bold text-xl text-whiteSmoke hover:text-whiteSmoke/75'}`}
            aria-current={currentPage === '/' ? 'home page' : undefined}
          >
            <img src={logo} alt="Poker Pulse Logo" className="logo w-24" />
          </Link>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-hunterGreen focus:outline-none"
            >
                <p className="text-base font-bold">Menu</p>
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
          </div>
          <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
            <NavTabs />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;