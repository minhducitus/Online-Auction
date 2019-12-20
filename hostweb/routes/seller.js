var express = require('express');
var router = express.Router();

router.get('/feedback', (req, res) => {
    res.render('viewseller/feedback');
});

router.get('/historybid', (req, res) => {
    res.render('viewseller/historybid');
});

router.get('/postproduct', (req, res) => {
    res.render('viewseller/postproduct');
});

router.get('/profile', (req, res) => {
    res.render('viewseller/profile');
});

module.exports = router;