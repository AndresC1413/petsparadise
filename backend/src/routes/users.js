const express = require('express');
const UsersController = require('../controllers/usersController');

const router = express.Router();
const usersController = new UsersController();

// User routes
router.post('/', usersController.createUser.bind(usersController));
router.get('/', usersController.getUsers.bind(usersController));
router.get('/:id', usersController.getUserById.bind(usersController));
router.put('/:id', usersController.updateUser.bind(usersController));
router.delete('/:id', usersController.deleteUser.bind(usersController));

module.exports = router;