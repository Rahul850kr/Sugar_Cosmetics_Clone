const mongoose = require("mongoose");

const hotDealsSchema = mongoose.Schema({
  id: Number,
  imageUrl: String,
});

const HotDealsModel = mongoose.model('hotdeal',hotDealsSchema);

module.exports={
    HotDealsModel
}