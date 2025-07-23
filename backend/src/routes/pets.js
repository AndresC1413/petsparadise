const express = require('express');
const PetsController = require('../controllers/petsController');

const router = express.Router();
const petsController = new PetsController();

router.post('/', petsController.createPet.bind(petsController));
router.get('/', petsController.getPets.bind(petsController));
router.get('/:id', petsController.getPetById.bind(petsController));
router.put('/:id', petsController.updatePet.bind(petsController));
router.delete('/:id', petsController.deletePet.bind(petsController));

module.exports = router;

