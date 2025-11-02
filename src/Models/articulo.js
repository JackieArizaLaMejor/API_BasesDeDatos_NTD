const mongoose = require('mongoose');

const ArticuloSchema = new mongoose.Schema({
  titulo: String,
  autores: [String],
  anio: Number,
  resumen: String,
  cantidadReferencias: Number,
  baseDatos: String,
  revista: String,
  enlace: String,
  pdf: String
});

module.exports = mongoose.model('Articulo', ArticuloSchema);
