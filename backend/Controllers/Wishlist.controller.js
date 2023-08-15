const { WishlistModel } = require("../Models/Wishlist.model");

const getWishlistData = async (req, res) => {
  try {
    const { userId } = await req.body;
    const wishlists = await WishlistModel.find({ _id: userId });
    res.status(200).json({ wishlists });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};

const addWishlist = async (req, res) => {
  try {
    const payload = req.body;
    const exist = await WishlistModel.findOne({
      userId: payload.userId,
      _id: payload._id,
    });
    if (!exist) {
      const new_wishlist = await new WishlistModel(payload);
      await new_wishlist.save();
      res.status(200).json({ msg: "Wishlist added successfully" });
    } else {
      res.status(400).json({ msg: "Item Already In The Wishlist" });
    }
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};

module.exports = {
  getWishlistData,
  addWishlist,
};
