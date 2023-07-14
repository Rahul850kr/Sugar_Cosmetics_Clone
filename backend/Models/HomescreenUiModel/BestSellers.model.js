const mongoose = require("mongoose");

const bestSellersSchema = mongoose.Schema({
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

const BestSellersModel = mongoose.model("bestseller", bestSellersSchema);

module.exports = {
  BestSellersModel,
};
