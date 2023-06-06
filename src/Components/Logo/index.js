import React from 'react';
import Logo from '../../Assets/Image/logo.svg'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header-image'>
      <Link to='/'><img src={Logo} alt='Logo'></img></Link>
    </div>
  );
}

export default Header;
