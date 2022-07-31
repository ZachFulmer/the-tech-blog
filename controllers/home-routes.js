const router = require('express').Router();
const sequelize = require('../config/connection.js');

router.get('/', (req, res) => {
    console.log('======================');
    res.render('homepage');
});

router.get('/login', (req, res) => {
    console.log('======================');
    res.render('login');
});

router.get('/signup', (req, res) => {
    console.log('======================');
    res.render('signup');
});

router.get('/dashboard', (req, res) => {
    console.log('======================');
    res.render('dashboard');
});

module.exports = router;