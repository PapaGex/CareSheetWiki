const express = require('express');
const handlebarsTemplate = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

module.exports = (app) => {
    app.set('view engine', 'hbs');

    app.engine( "hbs",
        handlebarsTemplate({ extname: "hbs", defaultLayout: "",
            layoutsDir: __dirname + "/views", partialsDir: __dirname + "/views", })
    );
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(cookieParser());
    app.use('/static', express.static(path.join(__dirname, 'static')));
};