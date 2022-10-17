const mongoose = require("mongoose");

const conexionDB = mongoose.connect("mongodb://localhost:27017/omegapetshop")
                .then(() => {console.log("Conexión exitosa a base de datos")})
                .catch(error => {console.log("Hubo un error en la conexión")});


module.exports = conexionDB