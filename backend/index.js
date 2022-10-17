const mongoose = require("mongoose");
const ClienteModel = require("./models/Cliente.js")

const conexionDB = async() => {

    try {
        const urlDB = await mongoose
            .connect("mongodb://localhost:27017/omegapetshop")
            .then(() => {
            console.log("Conexión exitosa a base de datos");
            })
        
    } catch (error) {
        console.log("Error en la conexion")
    }
}
    
conexionDB()

const cliente5 = {
    tipoDocumento: "CC",
    numDocumento: "123458",
    nombre: "Pepita",
    apellido: "Paeza",
    email: "pepepaeza@gmail.com",
    telefonoContacto: "22222223",
    password: "000003"

}

ClienteModel.create(cliente5).then((respuesta) => {
    console.log(`Se insertó el cliente ${respuesta.nombre}`)
}).catch(error => console.log("No se pudo insertar el cliente"))