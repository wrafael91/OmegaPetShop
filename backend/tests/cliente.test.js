const ClienteModel = require("../models/Cliente")
const conexionDB = require ("../config/conexionDB")

conexionDB()

//Implementando caso de uso
const cliente1 = {
    nombre : "Pepito",
    apellido : "Perez",
    numDocumento : "55444520",
    tipoDocumento : "CC",
    email : "mailito2@mail.com",
    telefonoContacto : "123123123",
    contrasena : "321321321"
  }

  ClienteModel
  .create( cliente1 )
  .then( (respuesta)=>{console.log(`Se creo el cliente ${respuesta.nombre}`)} )
  .catch( ()=>{console.log("Hubo un error al inserar el cliente")})