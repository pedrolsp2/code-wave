import React, { useState, useEffect } from 'react';
import './header.css';

import Logo from '../Logo/'
import Menu from '../Menu';

function Header() {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollDown(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header-container ${scrollDown ? 'header-state' : ''}`}>
      <Logo />
      <Menu />
    </div>
  );
}

export default Header;
