var express = require('express')
var routes = express.Router()
const birds = require("../controllers/controllers")


routes.get('/',birds )
routes.post('/',birds )
routes.get('/',birds )
routes.get('/',birds )


module.exports = routes