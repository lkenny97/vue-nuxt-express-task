const express = require('express')
const app = express()
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

module.exports = {
    path: '/api',
    handler: app
}