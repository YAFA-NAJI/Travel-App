import React, { useState } from 'react';
import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const closeNav = () => {
    setIsActive(false);
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='/' className='logo flex' aria-label="Travel Home">
            <h1><MdOutlineTravelExplore className="icon"/> Travel.</h1>
          </a>
        </div>

        <div className={`navBar ${isActive ? 'activeNavbar' : ''}`}>
          <ul className='navLists flex'>
            {['Home', 'Packages', 'Shop', 'About', 'Pages', 'News', 'Contact'].map((item) => (
              <li key={item} className='navItem'>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className='navLink'
                  onClick={closeNav}
                  aria-label={item}
                >
                  {item}
                </a>
              </li>
            ))}
            
            <li className='navItem'>
              <button className='btn' aria-label="Book Now">
                BOOK NOW
              </button>
            </li>
          </ul>

          <button 
            onClick={closeNav} 
            className='closeNavbar'
            aria-label="Close navigation"
          >
            <AiFillCloseCircle className='icon' />
          </button>
        </div>

        <button 
          onClick={toggleNav} 
          className="toggleNavbar"
          aria-label="Open navigation"
        >
          <TbGridDots className='icon'/>
        </button>
      </header>
    </section>
  );
}

export default Navbar;