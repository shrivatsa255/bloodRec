const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    role:{
        type: String,
        required:[true,"role is required"],
        enum:['admin','organisation','donar','hospital']
    },
    name:{
        type:String,
        required: function() {
            if(this.role === 'users' || this.role === 'admin' ){
                return true
            }
            return false
        }
    },
    organisationName:{
        type:String,
        requied: function() {
            if(this.role === 'organisation'){
                return true
            }
            return false
        }
    },
    hospitalName:{
        type:String,
        required: function(){
            if(this.role === 'hospital'){
                return true
            }
            return false
        }
    },

    email: {
        type:String,
        required:[true,"enter your email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,'enter the password']
    },
    website: {
        type: String,
    },
    address: {
        type: String,
        required: [true,"enter your address"]
    },
    phone: {
        type: String,
        required: [true,"enter your phone number"]
    }
}, {timestamps:true}); //whenever new user is created time will be mentioned

module.exports = mongoose.model('users',userSchema)