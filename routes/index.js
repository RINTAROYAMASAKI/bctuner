var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../psqlConnection');

/* GET home page. */
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'BCtuner Development Environment 1.0' });
});

router.post('/', function(req, res, next) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    //console.log(title);
    console.log(createdAt);
    var id = 111;
    var query = 'INSERT INTO sample (crttimestamp, crtuser, udttimestamp, udtuser, id, name) ' +
        'VALUES ("current_timestamp,' + username + '",current_timestamp ' + '"' + 'test' + '", ' + '"' + email + '", ' + '"' + password + '")';

    // connection.query(query, function(err, rows) {
    //     res.redirect('/');
    // });
});

module.exports = router;