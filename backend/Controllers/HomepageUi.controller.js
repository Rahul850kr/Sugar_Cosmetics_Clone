const { HomePageUiModel } = require("../Models/HomepageUi.model");

const HomepageController = async (req, res) => {
  try {
    const homepageUi = await HomePageUiModel.findOne();

    res.status(200).json({
      homepageUi,
    });
  } catch (err) {
    res.status(400).json({ msg: "Failed To Fetch HomapageUi Json", error: err });
  }
};

module.exports = {
  HomepageController,
};
