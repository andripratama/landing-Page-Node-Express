var express = require('express');
var homeRouter = express.Router();
var sql = require('mssql');
var router = function (nav) {

    var featured = [
        {
            title: 'Simple',
            desc: 'What could be easier? Get started fast with this landing page starter theme.',
            media: 'icon-lg ion-ios-bolt-outline'
                },
        {
            title: 'Free',
            desc: 'Yes, please. Grab it for yourself, and make something awesome with this.',
            media: 'icon-lg ion-ios-cloud-download-outline'
                },
        {
            title: 'Unique',
            desc: 'Because you dont want your Bootstrap site, to look like a Bootstrap site.',
            media: 'icon-lg ion-ios-snowy'
                },
        {
            title: 'Popular',
            desc: 'There is good reason why Bootstrap is the most used frontend framework in the world.',
            media: 'icon-lg ion-ios-heart-outline'
                },
        {
            title: 'Free',
            desc: 'Bootstrap is matured and well-tested. Its a stable codebase that provides consistency.',
            media: 'icon-lg ion-ios-flask-outline'
                }
];
    homeRouter.route('/')
        .get(function (req, res) {
            var request = new sql.Request();
            request.query('select * from homes',
                function (err, recordset) {
                    console.log(recordset);
                })
            res.render('home', {
                title: 'Home',
                nav: nav,
                featured: featured
            });
        });
    homeRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('homeView', {
                title: 'Home',
                nav: nav,
                featur: featured[id]
            });
        });
    return homeRouter;
}

module.exports = router;