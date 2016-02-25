var express = require('express');
var router = express.Router();
/* GET landing page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET product page. */
router.get('/people', function (req, res, next) {
    res.render('index', { title: 'People' });
});
/* GET services page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact' });
});

module.exports = router;

//# sourceMappingURL=index.js.map
