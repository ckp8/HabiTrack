const router = require("express").Router();
const authorise = require("../middleware/authorisation");
const pool = require("../dbconfig");

router.get("/name", authorise, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT username, id FROM users WHERE id = $1",
      [req.user]
    );

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/habits", authorise, async (req, res) => {
  try {
    const habit = await pool.query("SELECT * FROM habits");
    res.json(habit.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
