const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Article = require('./models/Article');
const cookieParser = require('cookie-parser');
// const password = User.password.findOne();

mongoose.Promise = global.Promise;

require('dotenv').config();
require('./config/express')(app);
require('./config/routes')(app);


app.use(session({ password: 'password'},
                { httpOnly: true },
                { secure: true}))

app.use(cookieParser())

app.get('/setSession', (req, res) => {
    req.session.message = "hello"
    res.end('Session set')
})                

app.get('/readSession', (req, res) => {
    res.json(req.session)
})

app.get('/setCookie', (req, res) => {
    res.cookie("Message", "Hello")
    res.end('Cookie set')
})

app.get('/readCookie', (req, res) => {
    res.json(req.cookies)
})


const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true},
    err => {
        if(err) throw err;
        console.log('Connected to the Gecko Database!!!')
    });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database is most def kicking it!")
});

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

app.listen(port, () => {
    console.log('listening on port 3000')
});