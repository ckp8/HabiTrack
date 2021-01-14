const express = require("express");
const router = express.Router();
const habitsController = require("../controllers/habits");
const authorise = require("../middleware/authorisation");

router.get("/", authorise, habitsController.index);
router.get("/:id", authorise, habitsController.show);
router.get("/:id", authorise, habitsController.show);
router.post("/", habitsController.create);
router.patch("/:id", habitsController.update);
router.get("/:id", habitsController.destroy);


module.exports = router;
