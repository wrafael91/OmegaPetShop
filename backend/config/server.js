const express = require("express")
const crearCliente = require("../controllers/cliente")
const conexionDB = require("./conexionDB")

class Server {
    constructor(){
        this.port = 3000
        this.app = express()
        this.app.listen(this.port, () => {
            console.log(`escuchando en puerto ${this.port}`)
        })
        this.middleware()
        this.routes()
        conexionDB()
    }

    routes(){
        this.app.post("/usuario", crearCliente)
    }
    
    middleware(){
        this.app.use(express.json())
    }
}

module.exports = Server