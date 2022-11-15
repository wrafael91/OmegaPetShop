import React from 'react'
import "./navbar_home.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import perro from "../assets/perro.png"
import { FaDog } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="image">
              <img
                src={perro}
                className="img-circle elevation-2"
                alt="User Image"
                width="30" height="30" 
              />
            </div>
  <div><a class="navbar-brand" href="#">OmegaPetShop</a></div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="./home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./login">login</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Productos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Perros</a>
          <a class="dropdown-item" href="#">Gatos</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Conctato</a>
      </li>
    </ul>
{/*       <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
<Carousel>
                <div>
                    <img src="https://estaticos.muyinteresante.es/uploads/images/article/570b65e55bafe88a438b456a/perro_0.jpg"  />
                    <p className="legend">Accesorios</p>
                </div>
                <div>
                    <img src="https://www.hogarmania.com/archivos/202102/animales-reducir-asma-ninos-3-668x400x80xX-1.jpg" />
                    <p className="legend">Salud</p>
                </div>
                <div>
                    <img src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/recomendaciones-para-cuidar-a-tu-mascota-en-tiempos-de-contingencia.png?itok=DRE-mqx1"/>
                    <p className="legend">Diversion</p>
                </div>
            </Carousel>
    </>
  ) 
}
