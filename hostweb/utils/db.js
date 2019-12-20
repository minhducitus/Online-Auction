var mysql = require('mysql');

function createConnection() {
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Caominhduc123',
        database: 'auction_minhduc'
    });
}

var connection = createConnection().connect(function(err) {
    if (err) {
        throw err;
    }
    console.log('connected');
})


