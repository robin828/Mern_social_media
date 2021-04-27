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
    password: {
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

// userSchema.virtual('password')
// .set(()=>{
//     console.log(this.password)


//     this._password = password
//     this.salt = v1
//     this.hashed_password = this.encryptPassword(password)
// })
// .get(()=>{
//     return this._password
// })

// userSchema.methods = {
//     encryptPassword: function(password) {
//         if(!password) return ""; 
//         try {
//             return crypto.createHmac('sha256', this.salt)
//             .update(password)
//             .digest('hex');
//         } catch (err) {
//             return ""
//         }
//     }
// }
module.exports = mongoose.model("User", userSchema)