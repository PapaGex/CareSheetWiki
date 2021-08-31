const User = require('../models/User');
const Article = require('../models/Article');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.mainPage =async function(req, res) {

    const articles = await Article.find().lean();
    res.render("index", { articles });
};

exports.login = function(req, res) {
    res.render("login");
};

exports.loggedIn =async function(req, res) {
    await User.findOne({ username: req.body.username }, function (err, user) {
        res.render("loggedIn", { article})
    };
};