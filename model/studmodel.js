var mongoose = require('mongoose')

var studschema = new mongoose.Schema({
    studname: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('studdetail', studschema)