var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/listproduct', (req, res) => {
    res.render('listproduct');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/registration', (req, res) => {
    res.render('registration.hbs');
});

router.get('/forgetpassword', (req, res) => {
    res.render('forgetpassword');
});

router.get('/productdetail', (req, res) => {
    res.render('productdetail');
});

module.exports = router;