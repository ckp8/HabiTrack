const express = require("express");
const cors = require("cors");

const server = express();

// MIDDLEWARE
server.use(cors()); // gives access to req.body
server.use(express.json());

// ROUTES

//register and login
server.use("/auth", require("./routes/jwtAuth"));

//dashboard
server.use("/dashboard", require("./routes/dashboard"));

// server.use("/habits", require("./routes/dashboard"));
// server.use("/", require("./routes/dashboard"));

const habitsRoutes = require("./routes/habits");
const usersRoutes = require("./routes/users");
server.use("/habits", habitsRoutes);
server.use("/users", usersRoutes);

server.get("/", (req, res) => res.send("Welcome"));

module.exports = server;
