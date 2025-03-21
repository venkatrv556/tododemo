const mongoose = require('mongoose')
const Userrmodel = require('..//models/Userr')
const Userr = require('..//models/Userr')
const { Schema} = mongoose

const todoschema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : Userrmodel.modelName
    },
    title : {
        type : String,
        required : true

    },
    desc : {
        type : String,
        required : true
    }


})
const  Todomodel = mongoose.model('Todomodel' , todoschema);
module.exports =Todomodel;