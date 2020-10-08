const mongoose = require('mongoose')

const allinfo = new mongoose.Schema({ // type => String, Number, Boolean, Date
  carid: {
    type: String,
    required: true,
  },
  watch: [
    { 
      "mac_address":"",
      "rssi":"",
      "name":"",
    },
  ],
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  temp: {
    type: String,
    required: true,
  },
  hum: {
    type: String,
    required: true,
  },
  
})


const allinfoModel = mongoose.model('allinfo', allinfo)

module.exports = allinfoModel