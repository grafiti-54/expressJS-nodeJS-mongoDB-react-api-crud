var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose'); // mongoose is the official MongoDB node.js driver
require('dotenv').config(); // .env file is used to store sensitive information like database credentials

//liste des fichiers necessaires pour les routes
const routerUsers = require('./routes/users.route.js')


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/api', routerUsers);


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connexion à la base de données réussie"))
.catch(err=>console.log(err.message))

//liste des routes
app.use('/api',routerUsers);

module.exports = app;
