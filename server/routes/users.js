/*  
File Name: routes/users.js
Student Name: Adrian Dumitriu
Student ID: 300566849
Date: October 24, 2021
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
