const express = require("express");
const router = express.Router();
const habitsController = require("../controllers/habits");
const authorise = require("../middleware/authorisation");


router.get('/', habitsController.index)
router.get('/:id', habitsController.show)
router.post('/', habitsController.create)
// router.patch('/:id', habitsController.update)
// router.patch('/:id', habitsController.updateCounter)
router.get('/:id', habitsController.destroy)


module.exports = router;
