const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books')

router.get('/', habitsController.index)
router.get('/:id', habitsController.show)
router.post('/', habitsController.create)

module.exports = router;