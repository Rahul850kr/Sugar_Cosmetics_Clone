const mongoose = require("mongoose");

const justInSchema = mongoose.Schema({
  id: Number,
  imageUrl: String,
  name: String,
  shadesAvailable: Boolean,
  strikedPriceAvailable: Boolean,
  offAvailable: Boolean,
  shadesCount: Number,
  strikedPrice: Number,
  price: Number,
  discoount: Number,
  buttonText: String,
});

const JustInModel = mongoose.model("justIn", justInSchema);

module.exports = {
  JustInModel,
};
