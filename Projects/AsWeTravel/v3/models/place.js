const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String
});

module.exports = mongoose.model("Place", placesSchema);
