const mongoose = require("mongoose")

const conexionDB = async() => {
    try {
        const db = await mongoose.connect("mongodb://localhost:27017/omegapetshop")
        .then(() => {console.log("Conexión exitosa a base de datos")})
    } catch (error) {
        console.log("Error en la conexión")   
    }

}

