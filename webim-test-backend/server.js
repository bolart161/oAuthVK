const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

let app = express();
let passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.get('/auth/vk', function(req, res){
	let url = 'https://oauth.vk.com/authorize?' +
		'client_id=7040403&' +
		'display=page&' +
		'redirect_uri=http://bolart.ru:3000/auth/vkontakte/callback&scope=friends&' +
		'response_type=code';
	axios.get(url)
		.then((response) => {
			console.log( response );
		})
		.then((data) => {

		})
		.catch(console.log('Error'));

});

app.get('/auth/vkontakte/callback', cors(), function(req, res) {
	const code = req.query.code,
		url = 'https://oauth.vk.com/access_token?client_id=7040403&client_secret=SJrmcvaarjNDIJnRm7qe&redirect_uri=http://bolart.ru:3000/auth/vkontakte/callback&code=' + code;

	axios.get(url)
		.then((response) => {
			return response.data;
		})
		.then((data) => {

		})
		.catch(console.log('Error'));


});

app.get('/auth/vk/token', function(req, res){
	console.log();
});

app.listen(3000);
