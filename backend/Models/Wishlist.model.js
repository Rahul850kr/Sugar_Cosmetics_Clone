const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
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
  userId: String,
});

const WishlistModel = mongoose.model("wishlist", wishlistSchema);

module.exports = {
  WishlistModel,
};
