const {request, response} = require("express")
const ClienteModel = require("../models/Cliente")
const {hashSync, genSaltSync} = require("bcryptjs")

async function crearCliente(req = request, res = response){
    const {numDocumento, contrasena} = req.body
    const clienteEncontrado = await ClienteModel.findOne({numDocumento: numDocumento})
    
    //Validación
    if(clienteEncontrado){
        res.status(400).send({msg: "El cliente ya existe"})
    } else {
        //El cliente no existe, entonces se crea

        //Encriptar contraseña
        const passwordEncrypted = hashSync(contrasena, genSaltSync())
        req.body.contrasena = passwordEncrypted

        ClienteModel.create(req.body)
            .then((clienteEncontrado) => {res.send({msg: "Se creó el cliente"})})
            .catch(() => res.send({msg: "Error al crear el cliente"}))
    }
    console.log(req.body)
}

async function getCliente(req, res){
    const {id, email, numDocumento} = req.query
    if(id || email || numDocumento){
        const cliente = await ClienteModel.findOne({$or: [{_id:id},{email},{numDocumento}]})
        return res.send(cliente)
    } else {
        return res.send({msg: "No se encontró registro"})
    }
}


module.exports = {crearCliente, getCliente}