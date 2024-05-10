import logoHeader from '../assets/logo_header.png';
import { NavLink } from 'react-router-dom';

export default function Header() {

  return (
    <div className="wrapper-header">
      <header className='header'>
        <img className='logo' src={logoHeader} alt='logo kasa' />
        <nav className='nav'>
          <NavLink to="/kasa/" end>Accueil</NavLink>
          <NavLink to="/kasa/about">A propos</NavLink>
        </nav>
      </header>
    </div>
  );
}
