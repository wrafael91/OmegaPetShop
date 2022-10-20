const mongoose = require("mongoose")

const CarritoCompras = mongoose.Schema({
    idCliente: {type: Schema.Types.ObjectId, ref:"cliente"},
    idProducto: {type: Schema.Types.ObjectId, ref:"producto"}
})

const CarritoComprasModel = mongoose.model("CarritoCompras", CarritoCompras)
module.exports = CarritoComprasModel