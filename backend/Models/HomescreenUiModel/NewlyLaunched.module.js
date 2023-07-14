const mongoose = require("mongoose");

const newlyLaunchedShema = mongoose.Schema({
  id: Number,
  imageUrl: String,
});

const NewlyLaunchModel = mongoose.model("newlyLaunch", newlyLaunchedShema);

module.exports = {
  NewlyLaunchModel,
};
