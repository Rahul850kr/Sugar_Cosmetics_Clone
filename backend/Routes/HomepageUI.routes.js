const { Router } = require("express");
const { HomepageController } = require("../Controllers/HomepageUi.controller");

const HomepageRoutes = Router();

HomepageRoutes.get("/", HomepageController);

module.exports = {
  HomepageRoutes,
};
