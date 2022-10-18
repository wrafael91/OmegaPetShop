const Mongoose = require("mongoose")

//1.Crear Schema
const cliente = {
    nombre : String,
    apellido : String,
    numDocumento : String,
    tipoDocumento : String,
    email : String,
    telefonoContacto : String,
    contrasena : String
  }

 const clienteSchema = Mongoose.Schema(cliente)

//2. Crear modelo (Permite hacer CRUD)
const ClienteModel = mongoose.model( "cliente", clienteSchema )

//3. Exporto para usarlo en cualquier parte del proyectoS
module.exports = ClienteModel