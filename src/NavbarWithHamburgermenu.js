import React, { useState } from 'react';
import './NavbarWithHamburgerMenu.css';

export default function NavbarWithHamburgermenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

  return (
    <nav className={`navbar ${isOpen ? 'open': ''}`}>
            <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleClick}>
               
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div> 
            </div>

            {isOpen ?
            (<>
                <div className='nav-item open'><a>Home</a></div>
                <div className='nav-item open'><a>TV Shows</a></div>
                <div className='nav-item open'><a>Movies</a></div>
                <div className='nav-item open'><a>Kids</a></div>
                <div className='nav-item open'><a>Manage Profiles</a></div>
                <div className='nav-item open'><a>Exit Profile</a></div>
                <div className='nav-item open'><a>MyList</a></div>
                <div className='nav-item open'><a>Watch history</a></div>
                <div className='nav-item open'><a>Manage Account</a></div>
                <div className='nav-item open'><a>Help</a></div>
                <div className='nav-item open signout'><a>Sign Out</a></div>
            </>):
            (
                <>
                <div className='nav-item'><a>Home</a></div>
                <div className='nav-item'><a>TV Shows</a></div>
                <div className='nav-item'><a>Movies</a></div>
                <div className='nav-item'><a>Kids</a></div>
                <div className='nav-item'><a>Manage Profiles</a></div>
                <div className='nav-item'><a>Exit Profile</a></div>
                <div className='nav-item'><a>MyList</a></div>
                <div className='nav-item'><a>Watch history</a></div>
                <div className='nav-item'><a>Manage Account</a></div>
                <div className='nav-item'><a>Help</a></div>
                <div className='nav-item signout'><a>Sign Out</a></div>
                </>
            )}
                  
    </nav>
  )
}
