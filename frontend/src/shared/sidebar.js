import React, { useState } from "react"
import "./sidebar.css"
import perro from "../assets/perro.png"
import { FaDog } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [itemUsuarioOpen, setItemUsuarioOpen] = useState(true)
  //let itemUsuarioOpen = true

  return (
    <div>
      <aside className="main-sidebar text-white elevation-4 altura">
        <Link to="/" className="brand-link colorfondo">
          <FaDog style={{color: 'white', fontSize: '20px'}}/>
          <span className="brand-text text-white font-weight-light">  OmegaPetShop</span>
        </Link>
        <div className="sidebar sidebar-dark-primary">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={perro}
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <Link to="#" className="d-block text-white">
                Usuario
              </Link>
            </div>
          </div>
        </div>
        <nav>
          <ul
            className="nav nav-pills nav-sidebar flex-column sidebar-dark-primary altura"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className={"nav-item menu-open" + (itemUsuarioOpen ? "menu-open":"")}>
              <div className="nav-link text-white" onClick={() => {
                setItemUsuarioOpen(!itemUsuarioOpen)
                console.log(itemUsuarioOpen)
              }}>
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Usuarios
                  <i className="right fas fa-angle-left" />
                </p>
              </div>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../../index.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Listar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../../index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Crear</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
