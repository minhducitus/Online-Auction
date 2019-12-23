var mysql = require('mysql');
var q = require('q');

var HOST = "localhost",
    DB = "myauction",
    USER = "root",
    PWD = "Caominhduc123";

// load, insert, update, loadOne, delete
exports.load = function(sql) {
    var d = q.defer();

    var connection = mysql.createConnection({
        host: HOST,
        user: USER,
        password: PWD,
        database: DB
    });

    connection.connect();

    connection.query(sql, function(error, rows, fields) {
        if (err){
            d.reject(error);
        }
        d.resolve(rows);
    });

    connection.end();
    return d.promise;
}

exports.insert = function(sql) {
    var d = q.defer();

    var connection = mysql.createConnection({
        host: HOST,
        user: USER,
        password: PWD,
        database: DB
    });

    connection.connect();

    connection.query(sql, function(error, value) {
        if (error) {
            d.reject(error);
        } else {
            d.resolve(value.insertId);
        }
    });

    connection.end();
    return d.promise;
}

exports.update = function(sql) {
    var d = q.defer();

    var connection = mysql.createConnection({
        host: HOST,
        user: USER,
        password: PWD,
        database: DB
    });

    connection.connect();

    connection.query(sql, function(error, value) {
        if (error) {
            d.reject(error);
        } else {
            d.resolve(value.changedRows);
        }
    });

    connection.end();
    return d.promise;
}

exports.delete = function(sql) {
    var d = q.defer();

    var connection = mysql.createConnection({
        host: HOST,
        user: USER,
        password: PWD,
        database: DB
    });

    connection.connect();

    connection.query(sql, function(error, value) {
        if (error) {
            d.reject(error);
        } else {
            d.resolve(value.affectedRows);
        }
    });

    connection.end();
    return d.promise;
}

exports.loadOne = function(sql) {
    var d = q.defer();

    var connection = mysql.createConnection({
        host: HOST,
        user: USER,
        password: PWD,
        database: DB
    });

    connection.connect();
    
    connection.query(sql, function(error, rows, fields) {
        if (error) {
            d.reject(error);
        } else {
            d.resolve(rows[0]);
        }
    });

    connection.end();
    return d.promise;
}


