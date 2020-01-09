var express = require('express')
var routes = express.Router()
const {todos , gettodos} = require("../controllers/controllers");
 
routes.post('/', todos)

routes.get('/gettodos', gettodos)

module.exports = routes;