const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Place", placesSchema);
