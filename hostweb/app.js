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
var guestRouter = require('./routes/guest');
app.use('/', guestRouter);

// View admin
var adminRouter = require('./routes/admin');
app.use('/admin', adminRouter);

//viewbidder
var bidderRouter = require('./routes/bidder');
app.use('/bidder', bidderRouter);

//Seller view
var sellerRouter = require('./routes/seller');
app.use('/seller', sellerRouter);

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});