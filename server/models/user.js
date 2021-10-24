/*  
File Name: models/user.js
Student Name: Adrian Dumitriu
Student ID: 300566849
Date: October 24, 2021
*/


let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        /* password:
        {
            type: String,
            default: "",
            trim: true,
            required: "password is required"
        },
        */
       email:
       {
        type: String,
        default: '',
        trim: true,
        required: 'email is required'
       },
       displayName:
       {
        type: String,
        default: '',
        trim: true,
        required: 'display name is required'
       },
       created:
       {
        type: Date,
        default: Date.now
       },
       update:
       {
        type: Date,
        default: Date.now
       }
    },
    {
        collection: "users"
    }
);

//configure options for user model

let options = ({missingPasswordError: 'Wrong / Missing password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User)
