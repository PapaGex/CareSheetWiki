const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const path = require('path');

require('dotenv').config();
require('./config/express')(app);
require('./config/routes')(app);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true,},
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