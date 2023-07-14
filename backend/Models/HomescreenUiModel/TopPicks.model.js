const mongoose = require("mongoose");

const topPicksSchema = mongoose.Schema({
  id: Number,
  imageUrl: String,
});

const TopPicksModel = mongoose.model("topPick", topPicksSchema);

module.exports = {
  TopPicksModel,
};
