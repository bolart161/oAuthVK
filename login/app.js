const express = require('express'),
  passport = require('passport'),
  VkStrategy = require('passport-vkontakte').Strategy,
  axios = require('axios');

const VK_APP_ID = '7040403';
const VK_APP_SECRET = 'SJrmcvaarjNDIJnRm7qe';

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new VkStrategy(
  {
    clientID: VK_APP_ID,
    clientSecret: VK_APP_SECRET,
    callbackURL: "http://bolart.ru:3000/auth/vk/callback",
  },
  function verify(accessToken, refreshToken, params, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));

let app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(require('cookie-parser')());
app.use(require('body-parser')());
app.use(require('express-session')({ secret: 'spb rnd' }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res){
  if (req.user !== undefined) {
    axios.get('https://api.vk.com/method/friends.get?' +
      'user_id=' + req.user.id +
      '&order=random' +
      '&count=5' +
      '&fields=nickname' +
      '&v=5.100' +
      '&access_token=f100705df100705df100705d6af16b1dceff100f100705dac1a409457c2a484fe9a13cf')
      .then(resp => {
        res.render('index', {
          user: req.user,
          friends: resp.data.response.items,
        });
      });
  } else {
    res.render('index', { user: req.user });
  }
});

app.get('/auth/vk', passport.authenticate('vkontakte'), function(req, res){
});

app.get('/auth/vk/callback', passport.authenticate('vkontakte'), function(req, res) {
    res.redirect('/');
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3000);
