import React from 'react';
import logo from '../assets/image/kotakode-logo.png';

function Nav() {
  return (
    <div className='app-bar__wrapper'>
      <header className='app-bar'>
        <div className='app-bar__brand'>
          <a href='#/'>
            <img className='logo-nav' src={logo} alt='logo' />
          </a>
        </div>
        <nav className='app-bar__navigation_cek'>
        <ul>
          <li>
            <a href='#/list'>Tentang</a>
          </li>
          <li>
            <a href='#/favorite'>Produk</a>
          </li>
          <li>
            <a href='#/favorite'>FAQ</a>
          </li>
          <li>
            <a href='#/favorite'>Events</a>
          </li>
          <li>
            <a href='#/favorite'>Partnership</a>
          </li>
        </ul>
      </nav>
      </header>
      
    </div>
  );
}

export default Nav;
