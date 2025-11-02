const express = require('express');
const router = express.Router();
const Articulo = require('../models/Articulo');

// Crear artículo
router.post('/', async (req, res) => {
  try {
    const articulo = new Articulo(req.body);
    await articulo.save();
    res.status(201).json(articulo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Listar todos
router.get('/', async (req, res) => {
  const articulos = await Articulo.find();
  res.json(articulos);
});

// Buscar por ID
router.get('/:id', async (req, res) => {
  const articulo = await Articulo.findById(req.params.id);
  res.json(articulo);
});

// Actualizar
router.put('/:id', async (req, res) => {
  const articulo = await Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(articulo);
});

// Eliminar
router.delete('/:id', async (req, res) => {
  await Articulo.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Artículo eliminado' });
});

module.exports = router;
