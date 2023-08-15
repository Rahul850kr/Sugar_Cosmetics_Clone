const { Router } = require("express");
const { HomepageController } = require("../Controllers/HomepageUi.controller");
const { Signup, Login, userInfo } = require("../Controllers/User.controller");
const { authorisation } = require("../Middlewares/Authorization");
const {
  getWishlistData,
  addWishlist,
} = require("../Controllers/Wishlist.controller");

const AllRoutes = Router();

AllRoutes.get("/screenUi", HomepageController);
AllRoutes.post("/signup", Signup);
AllRoutes.post("/login", Login);
AllRoutes.get("/userInfo", authorisation, userInfo);
AllRoutes.get("/getWishlists", authorisation, getWishlistData);
AllRoutes.post("/addWishlist", authorisation, addWishlist);

module.exports = {
  AllRoutes,
};
