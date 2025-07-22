const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

// Crear producto (solo usuarios autenticados)
router.post('/', authMiddleware, galleryController.createProduct);

// Obtener todos los productos
router.get('/', galleryController.getProducts);

// Obtener un producto por ID
router.get('/:id', galleryController.getProductById);

// Actualizar producto (solo admin)
router.put('/:id', authMiddleware, isAdmin, galleryController.updateProduct);

// Eliminar producto (solo admin)
router.delete('/:id', authMiddleware, isAdmin, galleryController.deleteProduct);

module.exports = router; 