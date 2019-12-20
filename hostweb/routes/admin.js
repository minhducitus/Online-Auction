var express = require('express');
var router = express.Router();

router.get('/listcategory', (req, res) => {
    res.render('viewadmin/listcategory.hbs', {layout: false});
});

router.get('/', (req, res) => {
    res.render('viewadmin/index', {layout: false});
});

router.get('/listrequest', (req, res) => {
    res.render('viewadmin/listrequest', {layout: false});
});

router.get('/listuser', (req, res) => {
    res.render('viewadmin/listuser', {layout: false});
});

router.get('/listproduct', (req, res) => {
    res.render('viewadmin/listproduct', {layout: false});
});

module.exports = router;