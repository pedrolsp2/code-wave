import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcMenu } from 'react-icons/fc';

function Menu() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="menu-container" style={{ display: 'flex', gap: '2em', fontSize: '1em' }}>

      {toggle ? (
        <FcMenu size={32}/>
      ) : (
        <>
          <Link to="">Cursos</Link>
          <Link to="">Carreiras</Link>
          <Link to="">Parceiros</Link>
        </>
      )}
    </div>
  );
}

export default Menu;
