let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

let expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//guest view
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/listproduct', (req, res) => {
    res.render('listproduct');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/registration', (req, res) => {
    res.render('registration.hbs');
});

app.get('/forgetpassword', (req, res) => {
    res.render('forgetpassword');
});

app.get('/productdetail', (req, res) => {
    res.render('productdetail');
});

app.get('/historybid', (req, res) => {
    res.render('historybid');
});

// View admin
app.get('/admin/listcategory', (req, res) => {
    res.render('viewadmin/listcategory.hbs', {layout: false});
});

app.get('/admin/index', (req, res) => {
    res.render('viewadmin/index', {layout: false});
});

app.get('/admin/listrequest', (req, res) => {
    res.render('viewadmin/listrequest', {layout: false});
});

app.get('/admin/listuser', (req, res) => {
    res.render('viewadmin/listuser', {layout: false});
});

app.get('/admin/listproduct', (req, res) => {
    res.render('viewadmin/listproduct', {layout: false});
});

//viewbidder
app.get('/bidder/profile', (req, res) => {
    res.render('viewbidder/profile');
});

app.get('/bidder/feedback', (req, res) => {
    res.render('viewbidder/feedback');
});

app.get('/bidder/updateprofile', (req, res) => {
    res.render('viewbidder/updateprofile');
});

app.get('/bidder/wishlist', (req, res) => {
    res.render('viewbidder/wishlist');
});

//Seller view
app.get('/seller/feedback', (req, res) => {
    res.render('viewseller/feedback');
});

app.get('/seller/historybid', (req, res) => {
    res.render('viewseller/historybid');
});

app.get('/seller/postproduct', (req, res) => {
    res.render('viewseller/postproduct');
});

app.get('/seller/profile', (req, res) => {
    res.render('viewseller/profile');
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});