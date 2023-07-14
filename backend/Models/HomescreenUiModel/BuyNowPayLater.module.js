const mongoose = require("mongoose");

const buyNowPayLaterSchema = mongoose.Schema({
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

const BuyNowPayLaterModel = mongoose.model("buyNowPayLater", buyNowPayLaterSchema);

module.exports = {
    BuyNowPayLaterModel,
};
