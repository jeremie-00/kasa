import logoHeader from '@assets/logo_header.png';
import { NavLink } from 'react-router-dom';
//import './header.css'

function Header() {

    return <div className="wrapper margin-top-45">
    <header className='header flexBeteew width-80'>
      <img className='logo' src={logoHeader} alt='logo kasa' />
      <nav className='nav flexRow'>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
    </div>
  }

export default Header;