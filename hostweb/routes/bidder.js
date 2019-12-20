var express = require('express');
var router = express.Router();

router.get('/profile', (req, res) => {
    res.render('viewbidder/profile');
});

router.get('/feedback', (req, res) => {
    res.render('viewbidder/feedback');
});

router.get('/updateprofile', (req, res) => {
    res.render('viewbidder/updateprofile');
});

router.get('/wishlist', (req, res) => {
    res.render('viewbidder/wishlist');
});

module.exports = router;