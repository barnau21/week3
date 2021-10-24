/*  
File Name: routes/index.js
Student Name: Adrian Dumitriu
Student ID: 300566849
Date: October 24, 2021
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Login page */
router.post('/login', indexController.processLoginPage);

/* GET Registration page */
router.get('/register', indexController.displayRegisterPage);

/* POST Registration page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform User Logout */
router.get('/logout', indexController.performLogout);

module.exports = router;
