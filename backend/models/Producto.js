const {Schema,model} = require("mongoose")

//1. Crear Schema 
const productoSchema = new Schema({
    codigo : {type : String, unique : true},
    nombre: String,
    marca : String,
    precio : {type : String, require : [true, "El precio del producto es obligatorio"]},
    pedigri : {type : String, enum : ["BAJO", "MEDIO", "ALTO"]},
    pesoUnidad: String,
    fechaIngreso : Date,
    disponibilidad : Boolean,
    stock : Number,
    imagen: String,
    cliente : {type: Schema.Types.ObjectId, ref: "cliente"}
})

//2. Crear modelo
const ProductoModel = model("producto", productoSchema)

//3. Exporto para usarlo en cualquier parte del proyectoS
module.exports = ProductoModel