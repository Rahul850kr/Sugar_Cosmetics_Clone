const mongoose = require("mongoose");

const homepageUiSchema = mongoose.Schema({
  carouselData: [
    {
      id: Number,
      imageUrl: String,
    },
  ],
  bestSellers: [
    {
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
    },
  ],
  hotDeals: [
    {
      id: Number,
      imageUrl: String,
    },
  ],
  justIn: [
    {
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
    },
  ],
  topPicks: [
    {
      id: Number,
      imageUrl: String,
    },
  ],
  buyNowPayLater: [
    {
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
    },
  ],
  giftings: [
    {
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
    },
  ],
  referBanner: String,
  superSavers: [
    {
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
    },
  ],
  newlyLaunched: [
    {
      id: Number,
      imageUrl: String,
    },
  ],
  thisOrThat: [
    {
      id: Number,
      imageUrl: String,
    },
  ],
  skinCareBasics: [
    {
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
    },
  ],
  sugarBeautyBlog: [
    {
      id: Number,
      imageUrl: String,
    },
  ],
  explore: [
    {
      id: Number,
      imageUrl: String,
      category: String,
    },
  ],
});

const HomePageUiModel = mongoose.model("homepageui", homepageUiSchema);

module.exports = {
  HomePageUiModel,
};
