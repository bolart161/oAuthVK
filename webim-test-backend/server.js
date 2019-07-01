const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');

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
	let code = req.query.code;
	console.log(code);
	// https.get(url, (resp) => {
	//
	// });
});

app.listen(3000);
