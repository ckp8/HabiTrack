const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    // destructure token
    const token = req.header("token");

    if (!token) {
      return res.status(403).json("Not Authorised");
    }

    const verify = jwt.verify(token, process.env.jwtSecret);
    req.user = verify.user;
    next();
  } catch (err) {
    return res.status(403).json("Not Authorised");
  }
};
