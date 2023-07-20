const { Router } = require("express");
const { HomepageController } = require("../Controllers/HomepageUi.controller");
const { Signup, Login } = require("../Controllers/User.controller");

const AllRoutes = Router();

AllRoutes.get("/screenUi", HomepageController);
AllRoutes.post("/signup",Signup);
AllRoutes.post('/login',Login);

module.exports = {
  AllRoutes,
};
