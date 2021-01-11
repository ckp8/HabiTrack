const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const booksRoutes = require('./routes/habits')
const authorsRoutes = require('./routes/users')
server.use('/habits', booksRoutes)
server.use('/users', authorsRoutes)

server.get('/', (req, res) => res.send('Welcome'))

module.exports = server