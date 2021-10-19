let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our book model
let Book = require('../models/book');

// get route for Book List page 
router.get('/', (req, res, next) => {
    Book.find((err, bookList) => 
    {
        if(err)
        {
            return console.error(err);
        } 
        else 
        {
            //console.log(BookList);
            res.render('partials/book', {title: 'Book List', BookList: bookList})
        }
    });
});

module.exports = router;