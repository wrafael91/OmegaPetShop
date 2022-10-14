const express = require("express")

const app = express()

app.use("/", (request, response) => {
    response.send("Hola mundo desde puerto 4000")
})

app.listen(4000, () => {
    console.log("Probando desde puerto 4000")
})

