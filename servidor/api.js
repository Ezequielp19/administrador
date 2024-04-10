// api.js
const express = require('express');
const router = express.Router();
const Product = require('./models/product');

router.get('/products', async (req, res) => {
    try {
      // Utiliza Mongoose para buscar todos los productos en la base de datos
      const products = await Product.find();
  
      // Devuelve los productos como respuesta en formato JSON
      res.json(products);
    } catch (error) {
      // En caso de error, devuelve una respuesta de error con el código 500
      res.status(500).json({ error: 'Error al obtener productos' });
    }
  });
// Otras rutas para agregar, actualizar, eliminar productos, etc.

module.exports = router;
