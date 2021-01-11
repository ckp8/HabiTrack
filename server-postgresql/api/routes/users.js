const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authors')

router.get('/', usersController.index);
router.get('/:id', usersController.show);

module.exports = router;