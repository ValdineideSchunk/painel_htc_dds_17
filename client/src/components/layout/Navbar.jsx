import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-primary">
      <nav className={`container navbar navbar-expand ${styles.barra_navegacao}`}>
        <div>
          <span className="navbar-brand">Nome Usuário</span>
        </div>
        <ul className='navbar-nav mx-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to="/">Inicio</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/login">Login</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/cadastro_aulas">Cadastro Aulas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
