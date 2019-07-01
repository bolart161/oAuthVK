let express = require('express')
  , passport = require('passport')
  , VkStrategy = require('passport-vkontakte').Strategy;

let VK_APP_ID = '7040403';
let VK_APP_SECRET = 'SJrmcvaarjNDIJnRm7qe';

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
  res.render('index', { user: req.user });
});

app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});


app.get('/auth/vk',
  passport.authenticate('vkontakte'),
  function(req, res){
  });

app.get('/auth/vk/callback',
  passport.authenticate('vkontakte', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(res);
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3000);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}