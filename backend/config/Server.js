const express = require("express")

class Server{

    constructor(){
        this.app=express()
        this.app.use( express.json())
        this.app.listen(3000, () => { console.log("Se esta ejecutando el backend en el puesto "+3000)})
        this.routes()
    }

    routes(){


    }

}

module.exports = Server