let mongoose = require('mongoose')

let Contact=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

let ContactMe=mongoose.model("Messages",Contact)
module.exports=ContactMe