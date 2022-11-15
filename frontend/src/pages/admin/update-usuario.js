import axios from 'axios';
import React from 'react'
import Header from '../../shared/header';

export default function UpdateUsuario() {

  function submit(event){
    event.preventDefault()
    const {nombre, apellido, numDocumento, tipoDocumento, email, telefonoContacto, contrasena} = event.target
    const body = {
      nombre: nombre.value,
      apellido: apellido.value,
      numDocumento: numDocumento.value,
      tipoDocumento: tipoDocumento.value,
      email: email.value,
      telefonoContacto: telefonoContacto.value,
      contrasena: contrasena.value
    }

    axios.post("",body)

    console.log(body)
  }

  return (
    <div>
      <Header title={"Actualizar usuario"} path={"/"} pathName={"Usuario"} />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Quick Example</h3>
                </div>
                <form onSubmit={submit}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombres</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        placeholder="Ej: Jhon"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="apellido">Apellidos</label>
                      <input
                        type="text"
                        className="form-control"
                        id="apellido"
                        name="apellido"
                        placeholder="Ej: Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label>Tipo de documento</label>
                      <select className="custom-select" name='tipoDocumento'>
                        <option value="CC">Cédula de ciudadania</option>
                        <option value="CE">Cédula de extranjería</option>
                        <option value="RE">Registro Civil</option>
                        <option value="PA">Pasaporte</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="numDocumento">Número de documento</label>
                      <input
                        type="number"
                        className="form-control"
                        id="numDocumento"
                        name='numDocumento'
                        placeholder="Ej: 225598746"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefonoContacto">Teléfono de contacto</label>
                      <input
                        type="number"
                        className="form-control"
                        id="telefonoContacto"
                        name='telefonoContacto'
                        placeholder="Ej: 225598746"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name='email'
                        placeholder="Ej: pepito@notiene.co"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contrasena">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="contrasena"
                        name='contrasena'
                        placeholder="Contraseña"
                      />
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Modificar o crear usuario
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
