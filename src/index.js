const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const apiRoutes = require("./routes/index");

const connect = require("./config/database");
const CityService = require("./services/city-service");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
app.listen(PORT, async () => {
  console.log("====================================");
  console.log("Server Started at port ", PORT);
  console.log("====================================");
  await connect();
  console.log("====================================");
  console.log("mongodb connected");

  console.log("====================================");

  //cityRepo.createCity({ name: "Lucknow" });
});
