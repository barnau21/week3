/*  
File Name: models/contact.js
Student Name: Adrian Dumitriu
Student ID: 300566849
Date: October 24, 2021
*/


let mongoose = require('mongoose');

// create a model class

let contactModel = mongoose.Schema({
    name: String,
    company: String,
    position: String,
    phone: String,
    email: String
},
{
    collection: "contact_list",
});

module.exports = mongoose.model('Contact', contactModel)