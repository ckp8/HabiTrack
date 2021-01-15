const User = require("../models/User");
const db = require("../dbconfig");

async function index(req, res) {
  User.all(req, res);
  // try {
  //     const user = await User.all;
  //     res.json(user);
  // } catch (err) {
  //     res.status(500).send(err);
  // };
}

async function show(req, res) {
  //let user = User.findById(req, res);
  let habit = User.habits(req, res);
  //const result = Object.assign({}, user, habit);
  // return habit;
}

module.exports = { index, show };
