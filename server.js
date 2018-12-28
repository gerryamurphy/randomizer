
//https://github.com/deadcoder0904/random-quote-generator
var express = require('express');
var session  = require('express-session');
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/img/favicon.png'));

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var morgan = require('morgan');
var routes = require('./routes/');

var app = express();
var passport = require('passport');
var flash    = require('connect-flash');

// connect to our database
//require('./config/passport')(passport); // pass passport for configuration


app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret

app.use(bodyParser.json())


app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//need to replace this to avois the default index.html
// getting called.
//app.use("/", express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
// routes ======================================================================
//require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// =====================================
// HOME PAGE (with login links) ========
// =====================================

//app.get('/', function(req, res){
//  res.render('index.html', {
//    title: 'Home'
//  });
//});


// launch ======================================================================
app.listen(4004);
console.log('listening on *:4004');
