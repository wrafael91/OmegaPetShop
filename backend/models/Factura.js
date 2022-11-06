/*Atributos:
    -IdCliente( Referencia a Schema Cliente )
    -IdFactura
    -ValorTotal
    -ValorProducto
*/
const {Schema,model} = require("mongoose")

const facturaSchema = new Schema({
    idFactura: Number,
    producto: {type: Schema.Types.ObjectId, ref: "producto"},
    valorTotal: Number,
    valorProducto: Number
})

const FacturaModel = model("factura", facturaSchema)

module.exports = FacturaModel