const { response, request } = require("express")
const {compareSync} = require("bcryptjs")
const {sign} = require("jsonwebtoken")
const ClienteModel = require("../models/Cliente")

async function login(req = request, res = response){
    const {email, contrasena} = req.body
    //Buscar usuario
    const cliente = await ClienteModel.findOne({email})
    if(cliente){
        //Si las credenciales son validas
        try {
            if(compareSync(contrasena, cliente.contrasena)){
                sign({id: cliente.id}, "grupo19-tiend4Mascota$", (err, token)=>{
                    if(err){
                        res.status(500).send({msg: "Hubo un error"})
                    } else {
                        res.send({auth: true, token})
                    }
                })
            }
            
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(400).send({msg:"No existe el cliente"})
    }
}

module.exports = {login}