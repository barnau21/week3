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
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel)