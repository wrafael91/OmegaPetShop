import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light colorfondonavbar">
      <ul className="navbar-nav">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
          <i className="fas fa-bars" style={{color: "white"}}></i>
        </a>
        <li className="nav-item">
          <a className="nav-link text-white" href="./home">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white">Producto</a>
        </li>
      </ul>
    </nav>
  );
}
