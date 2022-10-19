/* Relacion: Cliente se relacion con producto de */

//const Mongoose = require("mongoose")
const {Schema, model} = require("mongoose")

//1.Crear Schema
 const clienteSchema = new Schema({
    nombre : String,
    apellido : String,
    numDocumento : String,
    tipoDocumento : String,
    email : String,
    telefonoContacto : String,
    contrasena : String
  })

//2. Crear modelo (Permite hacer CRUD)
const ClienteModel = model( "cliente", clienteSchema )

//3. Exporto para usarlo en cualquier parte del proyectoS
module.exports = ClienteModel