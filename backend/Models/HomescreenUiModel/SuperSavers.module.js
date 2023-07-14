const mongoose = require("mongoose");

const superSaverSchema = mongoose.Schema({
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

const SuperSaverModel = mongoose.model("superSaver", superSaverSchema);

module.exports = {
    SuperSaverModel,
};
