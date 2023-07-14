const mongoose = require("mongoose");

const giftingSchema = mongoose.Schema({
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

const GiftingModel = mongoose.model("gifting", giftingSchema);

module.exports = {
  GiftingModel,
};
