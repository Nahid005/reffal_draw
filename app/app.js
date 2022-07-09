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

app.get('/helth', (_req, res) => {
    res.json({message : 'this is a good service '})
})

module.exports = app