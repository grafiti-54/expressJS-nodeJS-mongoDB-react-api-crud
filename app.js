var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose'); // mongoose is the official MongoDB node.js driver
require('dotenv').config(); // .env file is used to store sensitive information like database credentials

const cors = require('cors');

//liste des fichiers necessaires pour les routes
const routerUsers = require('./routes/users.route.js')


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use('/api', routerUsers);



//app.use(proxy("/api/", {target:"http://localhost:3700",secure: false,changeOrigin: true}));
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connexion à la base de données réussie"))
.catch(err=>console.log(err.message))

app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);




app.use(cors());
app.options("http://localhost:3000", cors());
app.use(function (req, res, next) 
{
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, X-CallbackType, Content-Type, Accept");
      res.header("Cache-Control", "no-cache");
      if ("OPTIONS" == req.method) 
      {
          res.send(200);
      }
      else 
     {
       next();
     }
});


//liste des routes
app.use('/api',routerUsers);


module.exports = app;
