const { Router } = require("express");
const { HomepageController } = require("../Controllers/HomepageUi.controller");
const { Signup, Login, userInfo } = require("../Controllers/User.controller");
const { authorisation } = require("../Middlewares/Authorization");

const AllRoutes = Router();

AllRoutes.get("/screenUi", HomepageController);
AllRoutes.post("/signup", Signup);
AllRoutes.post("/login", Login);
AllRoutes.get("/userInfo", authorisation, userInfo);

module.exports = {
  AllRoutes,
};
