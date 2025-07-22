const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  especie: {
    type: String,
    required: true
  },
  raza: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  estadoAdopcion: {
    type: String,
    enum: ['disponible', 'adoptado'],
    default: 'disponible'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Pet', petSchema); 