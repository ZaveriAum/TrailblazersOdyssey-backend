const mongoose = require('mongoose')

const teamschema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone_number: String
})

module.exports = mongoose.model('Teams', teamsSchema)