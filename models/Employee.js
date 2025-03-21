
const express =require("express")
const mongoose =require("mongoose")

const employeeschema = mongoose.Schema({
    //name.email,mobile,city
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        default : false
    },
    city : {
        type : String
    }

})
// 

module.exports = mongoose.model('Employee' , employeeschema,)
//module.exports =mongoose.model('user',userschema)