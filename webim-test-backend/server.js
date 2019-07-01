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
	res.redirect('https://oauth.vk.com/authorize?' +
		'client_id=7040403&' +
		'display=page&' +
		'redirect_uri=http://bolart.ru:3000/auth/vkontakte/callback&scope=friends&' +
		'response_type=code');
});

app.get('/auth/vkontakte/callback', function(req, res) {
	const code = req.query.code,
		url = 'https://oauth.vk.com/access_token?client_id=7040403&client_secret=SJrmcvaarjNDIJnRm7qe&redirect_uri=http://bolart.ru&code=' + code;

	console.log(code);

	axios.get(url)
		.then(response => {
			console.log(response.data.url);
			console.log(response.data.explanation);
		})
		.catch(error => {
			console.log(error);
		});

});

app.listen(3000);
