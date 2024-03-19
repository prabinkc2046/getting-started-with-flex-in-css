import React from 'react';
import './StanNavbar.css';
import { Link } from 'react-router-dom';
export default function StanNavbar() {
  return (
    <nav className='navbar-container'>
        <Link><span className='stanLogo'>Stan.</span></Link>
        <Link><span>TV shows</span></Link>
        <Link><span>Movies</span></Link>
        <Link><span>Kids</span></Link>
        <Link><span>Australian</span></Link>
        <Link><span>Internationl</span></Link>
    </nav>
  )
}
