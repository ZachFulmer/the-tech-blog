const router = require('express').Router();
const sequelize = require('../config/connection.js');

router.get('/', (req, res) => {
    res.render('homepage', {
        title: 'The Tech Blog',
        loggedIn: req.session.loggedIn
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login', {
        title: 'The Tech Blog'
    });
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup', {
        title: 'The Tech Blog'
    });
});

router.get('/dashboard', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard', {
            title: 'Your Dashboard',
            loggedIn: req.session.loggedIn
        });
        return;
    }
    res.redirect('/login');
});

module.exports = router;