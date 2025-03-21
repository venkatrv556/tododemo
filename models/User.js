
const mongoose =require('mongoose');
const express = require('express')
// const bcrypt = require('bcrypt');
const { user } = require('../routes/userRoutes');

//user registration
const userschema = mongoose.Schema({
    //username ,password
    username: {
        type : String,
        unique :true,
        lowercase: true,
        required : true
    },
    password: {
        type : String,
        required: true

    }
});

//this is for bcrypt password
userschema.pre('save' ,async function() {
    try{
        var user = this;
        const salt = await (bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password ,salt);
        user.password =hashpass;

    }
    catch(error){
        throw error;
        

    }
})




module.exports = mongoose.model('user' , userschema)