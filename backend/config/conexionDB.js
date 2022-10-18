//Siempre primero que cualquier cosa se debe establecer la cionexion a la BD
const mongoose = require("mongoose")

const conexionDB = () => { mongoose.connect("mongodb://localhost:27017/OmegaPetShop")
  .then(() => {console.log("Se ha conectado a la base de datos")})
  .catch(() => {console.log("No se pudo establecer una conexión con la base de datos")})
}

module.exports = conexionDB