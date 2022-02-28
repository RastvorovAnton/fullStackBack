const mongoose = require("mongoose");

const { Schema } = mongoose;
const ticketSchema = new Schema({
  text: String,
  date: { type: Date, default: Date.now },
  cost: Number,
});

module.exports = Ticket = mongoose.model("tasks", ticketSchema);