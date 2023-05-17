const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    profession: String,
    password: String
},{
    timestamps:true
})

module.exports =new mongoose.model('users' , userSchema)