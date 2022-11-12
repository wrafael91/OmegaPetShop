import React from "react"
import "./sidebar.css"
import perro from "../assets/perro.png"
import { FaDog } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div>
      <aside className="main-sidebar text-white elevation-4 altura">
        <a href="../../index3.html" className="brand-link colorfondo">
          <FaDog style={{color: 'white', fontSize: '20px'}}/>
          <span className="brand-text text-white font-weight-light">  OmegaPetShop</span>
        </a>
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
              <a href="#" className="d-block text-white">
                Usuario
              </a>
            </div>
          </div>
        </div>
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="../../index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../../index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../../index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  );
}
