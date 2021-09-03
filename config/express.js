const express = require('express');
const handlebarsTemplate = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');
const session = require('express-session')
const bcrypt = require('bcrypt')



module.exports = (app) => {
    app.set('view engine', 'hbs');

    app.engine( "hbs",
        handlebarsTemplate({ extname: "hbs", defaultLayout: "",
            layoutsDir: __dirname + "./views/layouts", partialsDir: __dirname + "./views/partials" })
    );
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(cookieParser());
    app.use('./static', express.static(path.join(__dirname, 'static')));
};