const express = require("express")
const ClienteModel = require("../models/Cliente")

async function crearCliente(request = express.request, response = express.response){
    const {numDocumento} = request.body
    const clienteEncontrado = await ClienteModel.findOne({numDocumento: numDocumento})
    
    if(clienteEncontrado){
        response.send({msg: "El cliente ya existe"})
    } else {
        ClienteModel.create(request.body)
            .then((clienteEncontrado) => {response.send({msg: "Se creó el cliente"})})
            .catch(() => response.send({msg: "Error al crear el cliente"}))
    }
    console.log(request.body)
}

module.exports = crearCliente