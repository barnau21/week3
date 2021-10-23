let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");
let passport = require('passport');

//define user model instance
let userModel = require('../models/user');
let User = userModel.User //alias
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home', displayName: req.user ? req.user.displayName: ''});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About', displayName: req.user ? req.user.displayName: ''});
}

module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Projects', displayName: req.user ? req.user.displayName: ''});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services', displayName: req.user ? req.user.displayName: ''});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact', displayName: req.user ? req.user.displayName: ''});
}

module.exports.displayLoginPage = (req, res, next)=>{
    //verify is user is already logged in
    if(!req.user)
    {
        res.render('auth/login',
        {
            title: 'Login',
            message: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', 
    (err, user, info) => {
        //if there is a server error
        if(err)
        {
            return next(err);
        }
        //if there is a user login error
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.loging(user, (err) => {
            //check for serger error again
            if(err)
            {
               return next(err); 
            }
            return res.redirect('/contact-list');
        });
    })(req, res, next);
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}