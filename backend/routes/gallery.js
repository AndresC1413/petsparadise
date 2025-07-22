const express = require('express');
const router = express.Router();
const petController = require('../controllers/galleryController');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

// Crear mascota (solo usuarios autenticados)
router.post('/', authMiddleware, petController.createPet);

// Obtener todas las mascotas
router.get('/', petController.getPets);

// Obtener una mascota por ID
router.get('/:id', petController.getPetById);

// Actualizar mascota (solo admin)
router.put('/:id', authMiddleware, isAdmin, petController.updatePet);

// Eliminar mascota (solo admin)
router.delete('/:id', authMiddleware, isAdmin, petController.deletePet);

module.exports = router; 