//START
const express = require('express')
const app = express()

//GENERAL PORPOUSE
const logger = require('morgan')
const bodyParser = require('body-parser')
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
require('dotenv').config()

//SWAGGER
options = require("./docs/basicInfo")
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const specs = swaggerJsdoc(options);
app.use(
	"/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: false })
	);
	
//ROUTES
const routes = require('./routes/api')
app.use('/api', routes);
app.get('/', (req, res) => res.render('home'))
app.get('/pokemon/*', (req, res) => res.render('home'))


//VIEWS
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
let pug = require("pug")
let path = require('path')
app.set(path.join(__dirname, './views'))
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'));


//EXPORT
module.exports = app; 
