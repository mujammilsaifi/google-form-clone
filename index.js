var express = require('express')
var ejs = require('ejs')
var mysql = require('mysql')
const bodyParser = require("body-parser");

mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'google form'
});

var app = express();
app.use(express.static('public'));

// write on browser localhost:8080
app.listen(8080);

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.render('pages/index');
});

app.post('/submitted', function (req, res) {
    var name = req.body.name;
    var collage = req.body.collage;
    var email = req.body.email;
    var phone = req.body.phone;
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'google form'
    });
    con.connect(function (error) {
        if (error) throw error;
        var sql = "INSERT INTO usertable(name ,college,email,mobileNo) VALUES(?,?,?,?)";
        con.query(sql, [name, collage, email, phone], function (error, result) {
            if (error) throw error;
            res.render('pages/response');
        });

    });
});