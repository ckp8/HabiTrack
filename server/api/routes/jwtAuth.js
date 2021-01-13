const router = require("express").Router();
const pool = require("../dbconfig");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utilities/jwtGenerator");
const validInfo = require("../middleware/validinfo");
const authorise = require("../middleware/authorisation");

//Register

router.post("/register", validInfo, async (req, res) => {
  try {
    // destructure the request body - we want username, email and password
    const { name, email, password } = req.body;

    // check if user exists by referencing emails - these have to be unique
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }

    // encrypt password so it's not readble in db
    // const salt = await bcrypt.genSalt(10);
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt); // this is where the password gets encrypted

    // enter the new user inside our database
    let newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );

    // const printuser = await pool.query("SELECT * FROM users");

    const token = jwtGenerator(newUser.rows[0].id);
    res.json({ token });

    // res.json(newUser.rows[0]);
    // res.json(printuser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error 123");
  }
});

// LOGIN

router.post("/login", validInfo, async (req, res) => {
  try {
    // 1. Destructure req.body
    const { email, password } = req.body;
    // 2. Check if user doesnt exist (if not, throw err)
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json("Password or email is incorrect");
    }
    // 3. check if incoming password is the same as database password
    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json("Invalid Password");
    }

    // 4. give them the jwt token
    const token = jwtGenerator(user.rows[0].id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/verified-user", authorise, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
