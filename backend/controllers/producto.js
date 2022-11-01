const { request } = require("express");
const ProductoModel = require("../models/producto");
const path = require("path")

async function guardarImagen(req = request, res = response){

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ mensaje: "No se encontro el archivo" })
  }

  // Extrae el archivo segun el nombre (en este caso "archivo")
  const archivo = req.files.imagen
  const rutaDeCarga = path.join(__dirname, "../imagenes/", archivo.name)

  // Usa el metodo mv() para colocar el archivo en cualquier parte del backend
  archivo.mv(rutaDeCarga, (error) => {
    if (error) return res.status(500).send(error)

    res.send("Archivo cargado corectamente")
  })

}

async function guardarProducto(req = request, res = response){
    const producto = await new ProductoModel(req.body)
    producto.save()
    res.send({producto, mensaje: "Se creó el producto"})
}

function verImagen(req = request, res = response){
    const {nombre} = req.query
    const rutaDeLaImagen = path.join(__dirname, "../imagenes/", nombre)
    res.sendFile(rutaDeLaImagen)
}

async function verProductos(req = request, res = response){
    const listadoProductos = await ProductoModel.find()
    res.send(listadoProductos)
}

module.exports = {guardarProducto, guardarImagen, verImagen, verProductos}