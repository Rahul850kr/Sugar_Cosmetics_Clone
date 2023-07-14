const mongoose = require("mongoose");

const thisOrThatSchema = mongoose.Schema({
  id: Number,
  imageUrl: String,
});

const ThisOrThatModel = mongoose.model('thisOrThat',thisOrThatSchema);

module.exports={
    ThisOrThatModel
}