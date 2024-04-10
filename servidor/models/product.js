// models/Product.js
const mongoose = require('mongoose');

// Define el modelo de productos
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  // Otros campos
});

module.exports = mongoose.model('Product', productSchema);
