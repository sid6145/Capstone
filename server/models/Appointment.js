const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    date:{
        type: String
    }
})

module.exports = mongoose.model("Appointment", appointmentSchema)