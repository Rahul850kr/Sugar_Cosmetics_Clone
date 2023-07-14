const {
  BestSellersModel,
} = require("../Models/HomescreenUiModel/BestSellers.model");
const {
  BuyNowPayLaterModel,
} = require("../Models/HomescreenUiModel/BuyNowPayLater.module");
const { GiftingModel } = require("../Models/HomescreenUiModel/Giftings.module");
const { HotDealsModel } = require("../Models/HomescreenUiModel/Hotdeals.model");
const { JustInModel } = require("../Models/HomescreenUiModel/JustIn.model");
const {
  NewlyLaunchModel,
} = require("../Models/HomescreenUiModel/NewlyLaunched.module");
const {
  SuperSaverModel,
} = require("../Models/HomescreenUiModel/SuperSavers.module");
const {
  ThisOrThatModel,
} = require("../Models/HomescreenUiModel/ThisOrThat.module");
const { TopPicksModel } = require("../Models/HomescreenUiModel/TopPicks.model");

const HomepageController = async (req, res) => {
  const bestSellers = await BestSellersModel.find();
  const hotDeals = await HotDealsModel.find();
  const justIn = await JustInModel.find();
  const topPicks = await TopPicksModel.find();
  const buyNowPayLater = await BuyNowPayLaterModel.find();
  const giftings = await GiftingModel.find();
  const superSavers = await SuperSaverModel.find();
  const newlyLaunched = await NewlyLaunchModel.find();
  const thisOrThat = await ThisOrThatModel.find();

  res.status(200).json({
    bestSellers,
    hotDeals,
    justIn,
    topPicks,
    buyNowPayLater,
    giftings,
    superSavers,
    newlyLaunched,
    thisOrThat,
  });
};

module.exports = {
  HomepageController,
};
