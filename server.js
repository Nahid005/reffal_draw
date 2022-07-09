require('dotenv').config()
const http = require('http')
const app = require('./app/app.js')
const { globalError, serverError } = require('./app/error')

const server = http.createServer(app)
const PORT = 8000


app.use(globalError)
app.use(serverError)



server.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
})