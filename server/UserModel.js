const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: String
    },
    email: {
        type: String
    },
    city:  {
        type: String
    },
    phone:  {
        type: String
    }
})

module.exports = mongoose.model('User', UserSchema);