const express = require("express");
const { connection } = require("./config/db");
const { CarouselRoutes } = require("./Routes/Carousel.routes");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 7500;
const app = express();
app.use(cors(), express.json());

app.use("/", CarouselRoutes);

// app.get("/", (req, res) => {
//   res.send("Welcome to sugar");
// });

app.listen(port, async () => {
  try {
    await connection;
    console.log(`listening on port ${port}`);
    console.log("Connected to DB Success");
  } catch (err) {
    console.log("Failed to connect to DB");
  }
});
