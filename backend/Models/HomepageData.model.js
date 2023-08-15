const mongoose = require("mongoose");

const carouselSchema = mongoose.Schema({
  id: Number,
  imageUrl: String,
});

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

const hotDealsSchema = mongoose.Schema({
  id: Number,
  imageUrl: String,
});

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

const topPicksSchema = mongoose.Schema({
  id: Number,
  imageUrl: String,
});

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

const giftingsSchema = mongoose.Schema({
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

const referBannerSchema = mongoose.Schema({
  banner: String,
});

const superSaversSchema = mongoose.Schema({
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

const newlyLaunchedSchema = mongoose.Schema({
  id: Number,
  imageUrl: String,
});

const thisOrThatSchema = mongoose.Schema({
  id: Number,
  imageUrl: String,
});

const skinCareBasicsSchema = mongoose.Schema({
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

const sugarBeautyBlogSchema = mongoose.Schema({
  id: Number,
  imageUrl: String,
});

const exploreSchema = mongoose.Schema({
  id: Number,
  imageUrl: String,
  category: String,
});
const CarouselModel = mongoose.model("carousel", carouselSchema);
const bestSellersModel = mongoose.model("bestSeller", bestSellersSchema);
const hotDealsModel = mongoose.model("hotDeal", hotDealsSchema);
const justInModel = mongoose.model("justIn", justInSchema);
const topPicksModel = mongoose.model("topPick", topPicksSchema);
const buyNowPayLaterModel = mongoose.model(
  "buyNowPayLater",
  buyNowPayLaterSchema
);
const giftingsModel = mongoose.model("gifting", giftingsSchema);
const referBannerModel = mongoose.model("referBanner", referBannerSchema);
const superSaversModel = mongoose.model("superSaver", superSaversSchema);
const newlyLaunchedModel = mongoose.model("newlyLaunched", newlyLaunchedSchema);
const thisOrThatModel = mongoose.model("thisOrThat", thisOrThatSchema);
const skinCareBasicsModel = mongoose.model(
  "skinCareBasic",
  skinCareBasicsSchema
);
const sugarBeautyBlogModel = mongoose.model(
  "sugarBeautyBlog",
  sugarBeautyBlogSchema
);
const exploreModel = mongoose.model("explore", exploreSchema);

module.exports = {
  CarouselModel,
  bestSellersModel,
  hotDealsModel,
  justInModel,
  topPicksModel,
  buyNowPayLaterModel,
  giftingsModel,
  referBannerModel,
  superSaversModel,
  newlyLaunchedModel,
  thisOrThatModel,
  skinCareBasicsModel,
  sugarBeautyBlogModel,
  exploreModel,
};
