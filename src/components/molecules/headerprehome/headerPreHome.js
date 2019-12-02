import React from 'react';
import './headerPreHome.css';
import logo from '../../../images/logotipo-blanco-proteccion.svg';

const HeaderPreHome = () => (
  <header>
    <div className='header'>
      <a className='header__item--left' href='#'>
        <img src={logo} alt='Proteccion Logo' />
      </a>
    </div>
  </header>
)

export default HeaderPreHome;