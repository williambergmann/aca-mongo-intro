const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
  name: String,
  age: Number
})

module.exports = { Users }