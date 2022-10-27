const {Router} = require("express")
const {crearCliente, getCliente, modificarCliente, borrarCliente} = require("../controllers/cliente")

const routerCliente = Router()

routerCliente.post("/creacion-cliente", crearCliente)
routerCliente.get("", getCliente)
routerCliente.put("/modificar-cliente", modificarCliente)
routerCliente.delete("/borrar-cliente", borrarCliente)

module.exports = routerCliente