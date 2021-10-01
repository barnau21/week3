var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/About', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET Products page. */
router.get('/Projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
  res.render('/partials/projects');
});

/* GET Services page. */
router.get('/Services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET Contact Us page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


module.exports = router;
