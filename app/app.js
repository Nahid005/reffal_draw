require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express();

app.use(
[
    morgan('dev'),
    cors(),
    express.json()
]
)

const Mydb = require('../db/db');

Mydb.createTicket('Nahid', 22)
Mydb.createTicket('Nahid', 22)
Mydb.createTicket('Nahid', 22)
Mydb.createTicket('Nahid', 22)
Mydb.createTicket('Nahid', 22)
Mydb.createTicket('Nahid', 22)

app.get('/helth', (_req, res) => {
    throw new Error(error)
    res.json({message : 'this is a good service '})
})


module.exports = app