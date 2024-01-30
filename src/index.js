const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const connect = require("./config/database");
const CityService = require("./servicces/city-service");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, async () => {
  console.log("====================================");
  console.log("Server Started at port ", PORT);
  console.log("====================================");
  await connect();
  console.log("====================================");
  console.log("mongodb connected");

  console.log("====================================");
  const cityService = new CityService();
  console.log(await cityService.getCity());
  //cityRepo.createCity({ name: "Lucknow" });
});
