const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightName: String,
  flightNumber: String,
  airline: String,
  departure: String,
  arrival: String,
  departureTime: String,
  arrivalTime: String,
  status: String,
  price: Number,
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;