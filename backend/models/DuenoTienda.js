/*
    IMPORTANTE: La diferencia entre cliente y dueño de la tienda es: 

    el cliente puede ver, buscar y comprar productos
    mientras que el dueño ademas de ver, buscar y comprar producos, tambien podra modificar su precio
    y stock y elminar productos
*/

// El dueño de la tienda tendra los mismos atributos que el cliente, solo se diferencia en permisos

const mongoose = require("mongoose")

const DuenoTienda = mongoose.Schema({
    idDuenoTienda:{type: String, unique: true},
    nombreTienda:{type: String, require: true},
    nombreDuenoTienda: {type: String, require: true},
    direccion: {type: String, require: true},
    ciudad: {type: String, require: true},
    email: {type: String, require: true},
    tipoTienda: {type: String},
    tipoProducto: {type: String}
})

const DuenoTiendaModel = mongoose.model("DuenoTienda", DuenoTienda)

module.exports = DuenoTiendaModel