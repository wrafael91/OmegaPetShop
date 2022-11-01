const express = require("express")
// const crearCliente = require("../controllers/cliente")
const routerCliente = require("../routes/cliente")
const fileUpload = require("express-fileupload")
const routerProducto = require("../routes/producto")
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
    }i

    routes(){
        this.app.use("/cliente", routerCliente)
        this.app.use("/producto", routerProducto)

    }
    
    middleware(){
        this.app.use(express.json())
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
          }))
      
    }
}

module.exports = Server