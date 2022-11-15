import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Login() {
const navigate = useNavigate()

async function formulario(event){

    event.preventDefault()
    const {contrasena, email} = event.target
    try {      
      const res = await axios.post("http://localhost:3001/auth/login", {email: email.value, contrasena: contrasena.value})
      localStorage.setItem("token", res.data.token)
      navigate("/")
    } catch (error) {
      alert("Credenciales incorrectas")
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="card card-outline">
          <div style= {{backgroundColor: "#605ca7"}} className="card-header text-center text-white">
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
                  name="contrasena"
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
                  <button style= {{backgroundColor: "#605ca7"}} type="submit" className="btn text-white btn-block">
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
