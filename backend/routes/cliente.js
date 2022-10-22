const {Router} = require("express")
const {crearCliente, getCliente} = require("../controllers/cliente")

const routerCliente = Router()

routerCliente.post("/creacion-cliente", crearCliente)
routerCliente.get("/:id", getCliente)

module.exports = routerCliente