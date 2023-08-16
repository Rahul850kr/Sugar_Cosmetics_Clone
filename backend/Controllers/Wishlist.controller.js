const { WishlistModel } = require("../Models/Wishlist.model");

const getWishlistData = async (req, res) => {
  try {
    const { userId } = await req.body;
    const wishlists = await WishlistModel.find({ userId });
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

const handleRemoveWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    await WishlistModel.deleteOne({ _id: id, userId: userId });
    res.status(200).json({ msg: "Item reomoved from wishlist" });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};

module.exports = {
  getWishlistData,
  addWishlist,
  handleRemoveWishlist,
};
