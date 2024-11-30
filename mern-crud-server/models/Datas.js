const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    data1: String,
    data2: String,
    data3: String || Number
})

const datasModel = mongoose.model("datas", dataSchema)
module.exports = datasModel