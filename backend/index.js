const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const { HomepageRoutes } = require("./Routes/HomepageUI.routes");
require("dotenv").config();
const port = process.env.PORT || 7500;
const app = express();
app.use(cors(), express.json());

app.use("/screenUi", HomepageRoutes);

app.listen(port, async () => {
  try {
    await connection;
    console.log(`listening on port ${port}`);
    console.log("Connected to DB Success");
  } catch (err) {
    console.log("Failed to connect to DB");
  }
});
