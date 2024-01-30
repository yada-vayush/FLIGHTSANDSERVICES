const mongoose = require("mongoose");
const connect = async () => {
  await mongoose.connect("mongodb://localhost/flightAndSearch_dev");
};
exports = connect;
