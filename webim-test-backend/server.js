const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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
	axios.get(url);
});

app.get('/auth/vkontakte/callback', cors(), function(req, res) {
	const code = req.query.code;
	let token = '',
		id = '';

	console.log(code);
	if (code !== undefined) {
		console.log(req.query);
		if (req.query.client_secret) {
			const url = 'https://oauth.vk.com/access_token?client_id=7040403&client_secret=SJrmcvaarjNDIJnRm7qe&redirect_uri=http://bolart.ru:3000/auth/vkontakte/callback&code=' + code;
			// res.redirect(url);

			axios.get(url)
				.then((response) => {
					console.log(response.data);
				})
				.catch(console.log('Error'));
		} else {
			console.log('3')
			res.sendStatus(200);
		}
	} else {
		let url = 'https://oauth.vk.com/authorize?' +
			'client_id=7040403&' +
			'display=page&' +
			'redirect_uri=http://bolart.ru:3000/auth/vkontakte/callback&scope=friends&' +
			'response_type=code';
		res.redirect(url);
	}
});

app.get('/auth/vk/token', function(req, res){
	console.log();
});

app.listen(3000);
