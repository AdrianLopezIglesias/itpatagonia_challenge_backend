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


//DATA
const axios = require('axios');
fs = require('fs');
var cron = require('node-cron');

let openweather_key = "fed594d3bfbd3a0a243f142e71d4ef7a"

ciudades = ["3433955", "1688161", "3836873", "3838830", "3860259", "2950158", "4164138", "5128638"]
let city_id = "3433955" // BUENOS AIRES
let rosario = "1688161"
let san_miguel_tucuman = "3836873"
let rio_negro = "3838830"
let córdoba = "2519240"

cron.schedule(' 0,15,30,45 * * * * *', () => {
	ciudades_promise = []
	ciudades_data = []
	ciudades.forEach(y => {
		ciudades_promise.push(axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${y}&lang=sp&appid=${openweather_key}&units=metric`))
	})

	Promise.all(ciudades_promise).then(function (values) {
		values.forEach(z => {
			ciudades_data.push(z.data);
			console.log('running a task every minute');
		})
		fs.writeFile("static/data.json", JSON.stringify(ciudades_data), function (err) {
			if (err) return console.log(err);
		})
}).catch(error => console.log(error))


});
	

//WS
const https = require('https');
const server = require('http').Server(app)
const ws = require('ws')
const wsServer = new ws.Server({ server });

const { fstat } = require('fs');

wsServer.on('connection', (socket) => {
	
	socket.on('message', (message) => {
		let m = JSON.parse(message)
		fs.readFile("static/data.json", 'utf8', function(err, data) {
			if (err) throw err;
			socket.send((data))
		});

		setInterval(function () {
			fs.readFile("static/data.json", 'utf8', function(err, data) {
				if (err) throw err;
				socket.send((data))
			});
		}, 5000);

		setTimeout(() => {
			socket.close()
		}, 1000000)
	});

});
server.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})


//ROUTES
app.get('/', (req, res) => res.render('index', {port: port}))




//VIEWS
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



//EXPORT
module.exports = app; 
