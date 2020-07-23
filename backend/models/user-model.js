const mongoose =require('mongoose')
const crypto = require('crypto');
const { v1 } = require('uuid') ;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now
    },
    update: Date
})

userSchema.virtual('password')
.set(()=>{
    this._password = password
    this.salt = v1
    this.hashed_password = this.encryptPassword(password)
})
.get(()=>{
    return this._password
})

userSchema.methods = {
    encryptPassword(password) {
        if(!password) return ""; 
        try {
            return crypto.createHmac('sha256', this.salt)
            .update(password)
            .digest('hex');
        } catch (err) {
            return ""
        }
    }
}
module.exports = mongoose.model("User", userSchema)