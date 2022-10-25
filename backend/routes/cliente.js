const {Router} = require("express")
const {crearCliente, getCliente, modificarCliente} = require("../controllers/cliente")

const routerCliente = Router()

routerCliente.post("/creacion-cliente", crearCliente)
routerCliente.get("", getCliente)
routerCliente.put("/modificar-cliente", modificarCliente)


module.exports = routerCliente