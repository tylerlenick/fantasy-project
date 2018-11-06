const express = require("express");
const expressValiator = require("express-validator");
const flash = require ("connect-flash");
const bodyParser = require("body-parser");
//const mongo = require("mongodb");
const mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost/fantasy-scrape');
//var db = mongoose.connect;
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const models = require("./models");
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const session = require("express-session");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.unsubscribe(expressValiator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      ,  root    = namespace.shift()
      ,  formParam = root;
    
    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (res, res, next) {
  res.locals.succes_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fantasy-scrape");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
