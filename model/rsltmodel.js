var mongoose = require('mongoose')

var rsltschema = new mongoose.Schema({
    studname: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'studdetails'
    },
    s1: Number,
    s2: Number,
    s3: Number,

})
module.exports = mongoose.model('rslt', rsltschema)