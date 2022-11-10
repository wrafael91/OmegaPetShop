//Siempre primero que cualquier cosa se debe establecer la cionexion a la BD
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const conexionDB = () => { mongoose.connect(process.env.URL_DATABASE)
  .then(() => {console.log("Se ha conectado a la base de datos")})
  .catch(() => {console.log("No se pudo establecer una conexión con la base de datos")})
}

module.exports = conexionDB