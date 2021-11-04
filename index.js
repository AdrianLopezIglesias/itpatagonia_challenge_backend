//START
const express = require('express')
const app = express()

const port = process.env.PORT || 3500;

//GENERAL PORPOUSE
const logger = require('morgan')
const bodyParser = require('body-parser')
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
require('dotenv').config()

//WS
const https = require('https');
const server = require('http').Server(app)
const ws = require('ws')
const wsServer = new ws.Server({ server });

const axios = require('axios')

wsServer.on('connection', (socket) => {
	let openweather_key = "fed594d3bfbd3a0a243f142e71d4ef7a"
	let city_id = "3433955" // BUENOS AIRES
	let x = "http://api.openweathermap.org/data/2.5/weather?id=3433955&appid=fed594d3bfbd3a0a243f142e71d4ef7a&units=metric "
	
	socket.on('message', (message) => {
		let m = JSON.parse(message)
		console.log("Receiving a call")
		console.log(process.env.PORT)
		axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${openweather_key}&units=metric `).then(x => {
			socket.send(JSON.stringify(x.data))
		});

		setInterval(function () {
			axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${openweather_key}&units=metric`).then(x => {
				socket.send(JSON.stringify(x.data))
				console.log(x.data)
			});
		}, 10000);
		setTimeout(() => {
			socket.close()
		}, 100000)
	});

});
server.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})


//ROUTES
app.get('/', (req, res) => res.render('index'))




//VIEWS
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



//EXPORT
module.exports = app; 
