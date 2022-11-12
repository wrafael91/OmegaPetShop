import React from "react"
import "../../shared/navbar.css"

export default function Login() {

  function formulario(event){
    event.preventDefault()
    const {password, email} = event.target
    console.log(event.target.password.value)
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="card card-outline">
          <div className="card-header text-center text-white colorfondonavbar">
            <a href="#" className="h1 text-white">
              <b>OmegaPetShop</b>
            </a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Ingresa tus datos</p>
            <form onSubmit={formulario}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Recuérdame</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn text-white btn-block colorfondonavbar">
                    Ingresar
                  </button>
                </div>
              </div>
            </form>
            <p className="mb-1">
              <a href="forgot-password.html">Olvidé mi contraseña</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">
                Crear nueva cuenta
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
