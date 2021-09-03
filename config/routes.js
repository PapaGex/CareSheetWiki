const express = require ('express');
const app = express();
const User = require('../models/User');


module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('index')
    });

    app.get('/register', (req, res) => {
        res.render("register")
    });
    app.get('/login', (req, res) => {
        res.render("login")
    });
    app.post('/login', (req, res) => {

    });

    app.get('/all-articles', (req, res) => {
        res.render("all-articles")
    });

    app.get('article', (req, res) => {
        res.render("article")
    });

    app.get('create', (req, res) => {
        res.render("create")
    });

    app.get('edit', (req, res) => {
        res.render("edit")
    });

    app.get('search-results', (req, res) => {
        res.render("search-results")
    });
};