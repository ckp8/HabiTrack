const router = require("express").Router();
const pool = require("../dbconfig");
const bcrypt = require("bcrypt");

//Register

router.post("/register", async (req, res) => {
  try {
    // destructure the request body - we want username, email and password
    const { username, email, password } = req.body;

    // check if user exists by referencing emails - these have to be unique
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }

    // encrypt password so it's not readble in db
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt); // this is where the password gets encrypted

    // enter the new user inside our database
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, bcryptPassword]
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error 123");
  }
});

module.exports = router;
