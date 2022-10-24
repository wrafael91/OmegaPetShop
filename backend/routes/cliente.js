const {Router} = require("express")
const {crearCliente, getCliente} = require("../controllers/cliente")

const routerCliente = Router()

routerCliente.post("/creacion-cliente", crearCliente)
routerCliente.get("", getCliente)

module.exports = routerCliente