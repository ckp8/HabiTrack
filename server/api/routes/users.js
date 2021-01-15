const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const authorise = require("../middleware/authorisation");

router.get("/", authorise, usersController.index);
router.get("/:id", authorise, usersController.show);

module.exports = router;
