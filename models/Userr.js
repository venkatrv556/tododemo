const bcrypt  = require('bcrypt')
const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    //username ,passwors

    username : {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    password : {
        type : String,
        required : true,


    }

})
userschema.pre('save' ,async function(){
    try{
     const userr = this;
     const  salt = await(bcrypt.genSalt(10));
     const hashpass =await bcrypt.hash(userr.password ,salt)
     userr.password =hashpass;



    }
    catch(error){
        throw error

    }
})









userschema.methods.comparepassword = async function(userpassword)
{
    try{
   //  const   ismatch = userpassword == this.password(this is for without hash password compare)
     const ismatch= await bcrypt.compare(userpassword, this.password);
     return ismatch;

    }
    catch(err){
        console.log("the error is",err)
        throw err;

    }
}






const Userr = mongoose.model('Userr' ,userschema );

module.exports = Userr;