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
            res.render('book/list', {title: 'Book List', BookList: bookList})
        }
    });
    
});
// GET route for displaying add page - CREATE OPERATION
router.get('/add', (req, res, next) => {
    res.render('book/add', {title: 'Add Book'});
});

// POST route for processing the add page - CREATE OPERATION
router.post('/add', (req, res, next) => {
    
    let newBook = Book({
        "name" : req.body.name,
        "author" : req.body.author,
        "published" : req.body.published,
        "description" : req.body.description,
        "price" : req.body.price
    });

    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');
        }
    });
});

// GET route for displaying edit page
router.get('/edit/:id', (req, res, next) => {

    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //show edit view
            res.render('/book/edit', {title: 'Edit Book', book: bookToEdit})
        }
    });
});

// POST route for processing the edit page
router.post('/edit/:id', (req, res, next) => {

    let id = req.params.id

    let updatedBook = Book({
        "_id" : req.body.id,
        "name" : req.body.name,
        "author" : req.body.author,
        "published" : req.body.published,
        "description" : req.body.description,
        "price" : req.body.price
    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh book list
            res.redirect('/book-list');
        }
    });
    
});

// GET TO DELETE - delete operation
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.render('/book-list')
        }
    })
});

module.exports = router;