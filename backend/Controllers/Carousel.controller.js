const { CarouselModel } = require("../Models/Carousel.model");

const CarouselController = async (req, res) => {
  try {
    let images = await CarouselModel.find();
    res.status(200).json({ images: images });
  } catch (err) {
    res.status(400).json({ msg: "Failed to fetch carousel images" });
  }
};

module.exports = {
  CarouselController,
};
