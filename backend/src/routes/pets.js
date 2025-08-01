import express from 'express'
import { listarMascotas } from '../../CONTROLLERS/mascotasController.js';
// const PetsController = require('../controllers/petsController');
// const Pet = require('../models/pet');

const router = express.Router();
// const petsController = new PetsController(Pet);

router.get('/',listarMascotas);

// router.post('/', petsController.createPet.bind(petsController));
// router.get('/', petsController.getPets.bind(petsController));
// router.get('/:id', petsController.getPetById.bind(petsController));
// router.put('/:id', petsController.updatePet.bind(petsController));
// router.delete('/:id', petsController.deletePet.bind(petsController));


// module.exports = router;

export default router;


