// app.js
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./api');
const app = express();

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/hawai', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB: ' + err));

app.use('/api', apiRoutes);

// Configuración adicional de Express, middleware, etc.

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
