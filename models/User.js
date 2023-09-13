const mongoose = require('mongoose')


const UserSechma = new mongoose.Schema(
    {
        username:{
            type:String,
            unique: true,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        fullName: {
            type:String
        }
    }
)

const User = mongoose.model('User', UserSechma)

module.exports = User