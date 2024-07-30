import logo from '../../assets/images/poker-pulse-logo.png';
import NavTabs from '../../components/NavTabs/NavTabs.jsx';

const Header = () => {
  return (
    <header className="border-b border-outerSpace bg-gunmetal">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <img src={logo} alt="Poker Pulse Logo" className="logo w-36" />
          </div>
          <nav>
            <NavTabs />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;