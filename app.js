var express = require('express');
var app = express();
var sql = require('mssql');
var config = {
    user: 'root',
    password: '',
    server: 'localhost',
    database: 'landing_pages',
    options: {
        enctypt: true
    }
};

sql.connect(config, function (err) {
    console.log(err);
})
var port = process.env.PORT || 5000;
var nav = [
    {
        Link: '/home',
        Text: 'Homes'
                         },
    {
        Link: '/about',
        Text: 'Abouts'
                         },
    {
        Link: '/portofolio',
        Text: 'Portofolios'
                         }
];

var homeRouter = require('./src/routes/homeRoutes')(nav);

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/home', homeRouter);

app.use('/', homeRouter);

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});