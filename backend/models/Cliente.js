import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
    tipoDocumento: String,
    numDocumento: String,
    nombre: String,
    apellido: String,
    email: String,
    telefonoContacto: String,
    password: String
})

const ClienteModel = mongoose.model("Cliente", clienteSchema)
export default ClienteModel
