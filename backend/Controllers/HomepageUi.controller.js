const {
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
} = require("../Models/HomepageData.model");
const { HomePageUiModel } = require("../Models/HomepageUi.model");

const HomepageController = async (req, res) => {
  try {
    const carouselData = await CarouselModel.find();
    const bestSellers = await bestSellersModel.find();
    const hotDeals = await hotDealsModel.find();
    const justIn = await justInModel.find();
    const topPicks = await topPicksModel.find();
    const buyNowPayLater = await buyNowPayLaterModel.find();
    const giftings = await giftingsModel.find();
    const referBanner = await referBannerModel.find();
    const superSavers = await superSaversModel.find();
    const newlyLaunched = await newlyLaunchedModel.find();
    const thisOrThat = await thisOrThatModel.find();
    const skinCareBasics = await skinCareBasicsModel.find();
    const sugarBeautyBlog = await sugarBeautyBlogModel.find();
    const explore = await exploreModel.find();

    // const homepageUi = await HomePageUiModel.findOne();

    res.status(200).json({
      homepageUi: {
        carouselData,
        bestSellers,
        hotDeals,
        justIn,
        topPicks,
        buyNowPayLater,
        giftings,
        referBanner,
        superSavers,
        newlyLaunched,
        thisOrThat,
        skinCareBasics,
        sugarBeautyBlog,
        explore,
      },
    });
  } catch (err) {
    res
      .status(400)
      .json({ msg: "Failed To Fetch HomapageUi Json", error: err });
  }
};

module.exports = {
  HomepageController,
};
