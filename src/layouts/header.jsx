import logoHeader from '../assets/logo_header.png';
import { NavLink, useLocation, useNavigate  } from 'react-router-dom';

export default function Header() {
  const location = useLocation()

  const isLocationPage = location.pathname.includes("/kasa/location")

  return (
    <div className="wrapper-header">
      <header className='header'>
        <img className='logo' src={logoHeader} alt='logo kasa' />
        <nav className='nav'>
          {isLocationPage ? (
            <>
              <a href='/kasa/'>Accueil</a>
              <a href='/kasa/about'>A propos</a>
            </>
          ) :
            (
              <>
                <NavLink to="/kasa/" end>Accueil</NavLink>
                <NavLink to="/kasa/about">A propos</NavLink>
              </>
            )}
        </nav>
      </header>
    </div>
  );
}
