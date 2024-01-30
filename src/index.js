const express = require("express");
const { PORT } = require("./config/serverConfig");
const connect = require("./config/database");

const app = express();
app.listen(PORT, async () => {
  console.log("====================================");
  console.log("Server Started at port ", PORT);
  console.log("====================================");
});
