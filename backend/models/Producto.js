const {Schema,model} = require("mongoose")

//1. Crear Schema 
const productoSchema = Schema({
    codigo : {type : String, unique : true},
    marca : String,
    precio : {type : String, require : [true, "El precio del producto es obligatorio"]},
    pedigri : {type : String, enum : ["BAJO", "MEDIO", "ALTO"]},
    fechaIngreso : Date,
    disponibilidad : Boolean,
    stock : Number,
    cliente : {type: Schema.Types.ObjectId, ref: "cliente"}
})

//2. Crear modelo
const ProductoModel = model("producto", productoSchema)

//3. Exporto para usarlo en cualquier parte del proyectoS
module.exports = ProductoModel